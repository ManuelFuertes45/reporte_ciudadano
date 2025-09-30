import { useState } from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { useRouter } from "expo-router";
import LoginForm from "@/components/LoginForm";
import SignInForm from "@/components/SignInForm";

export default function SignScreen() {
  const [isNewUser, setIsNewUser] = useState(false);
  const router = useRouter();

  const handleSuccess = () => {
    router.replace("/(tabs)/home");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text
        variant="headlineMedium"
        style={{ textAlign: "center", marginBottom: 24 }}
      >
        {isNewUser ? "Create Account" : "Welcome Back"}
      </Text>

      {isNewUser ? (
        <SignInForm onSuccess={handleSuccess} />
      ) : (
        <LoginForm onSuccess={handleSuccess} />
      )}

      <Button
        mode="text"
        onPress={() => setIsNewUser(!isNewUser)}
        style={{ marginTop: 16 }}
      >
        {isNewUser ? "Already have an account? Log in" : "New here? Sign up"}
      </Button>
    </View>
  );
}
