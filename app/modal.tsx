import { StyleSheet } from "react-native";
import { Surface, Card, Button } from "react-native-paper";
import { useRouter } from "expo-router";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function ModalScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <Surface style={styles.surface}>
        <Card>
          <Card.Title title="This is a modal" />
          <Card.Content>
            <ThemedText>
              You can use this modal to show temporary content or actions.
            </ThemedText>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" onPress={() => router.dismiss()}>
              Go to home screen
            </Button>
          </Card.Actions>
        </Card>
      </Surface>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  surface: {
    elevation: 4,
    borderRadius: 8,
    padding: 8,
  },
});
