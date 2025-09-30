import { useEffect, useState } from "react";
import { View, Switch } from "react-native";
import { Text, Button } from "react-native-paper";
import { useRouter } from "expo-router";
import { deleteToken, saveRole, getRole } from "@/utils/auth";

export default function SettingsScreen() {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const loadRole = async () => {
      const role = await getRole();
      setIsAdmin(role === "admin");
    };
    loadRole();
  }, []);

  const toggleRole = async () => {
    const newRole = !isAdmin ? "admin" : "civilian";
    setIsAdmin(!isAdmin);
    await saveRole(newRole);
  };

  const handleSignOut = async () => {
    await deleteToken();
    await saveRole("civilian");
    router.replace("/");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
      }}
    >
      <Text variant="headlineMedium">Settings</Text>
      <Text>Current Role: {isAdmin ? "Admin" : "Civilian"}</Text>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <Text>{isAdmin ? "Switch to Civilian" : "Switch to Admin"}</Text>
        <Switch value={isAdmin} onValueChange={toggleRole} />
      </View>

      <Button mode="contained" onPress={handleSignOut}>
        Sign Out
      </Button>
    </View>
  );
}
