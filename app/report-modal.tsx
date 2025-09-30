import { StyleSheet } from "react-native";
import { Surface, Card, Button } from "react-native-paper";
import { useRouter, useLocalSearchParams } from "expo-router";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { mockReports } from "@/mocks/reports";

export default function ReportModalScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const report = mockReports.find((r) => r.id === Number(id));

  if (!report) {
    return (
      <ThemedView style={styles.container}>
        <Surface style={styles.surface}>
          <Card>
            <Card.Title title="Report not found" />
            <Card.Content>
              <ThemedText>No report matches the given ID.</ThemedText>
            </Card.Content>
            <Card.Actions>
              <Button mode="contained" onPress={() => router.dismiss()}>
                Close
              </Button>
            </Card.Actions>
          </Card>
        </Surface>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <Surface style={styles.surface}>
        <Card>
          <Card.Title title={report.title} />
          <Card.Content>
            <ThemedText>{report.description}</ThemedText>
            <ThemedText>Status: {report.status}</ThemedText>
            <ThemedText>Rating: {report.rating} / 5</ThemedText>
            <ThemedText>
              Created at: {new Date(report.created_at).toLocaleString()}
            </ThemedText>
            {report.resolved_at && (
              <ThemedText>
                Resolved at: {new Date(report.resolved_at).toLocaleString()}
              </ThemedText>
            )}
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" onPress={() => router.dismiss()}>
              Close report modal
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
