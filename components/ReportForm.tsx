import { View, StyleSheet } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { useState } from "react";

export default function ReportForm({
  onSubmit,
}: {
  onSubmit?: (data: any) => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    const reportData = {
      title,
      description,
      status: "open",
      created_at: new Date().toISOString(),
    };
    if (onSubmit) onSubmit(reportData);
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineSmall" style={styles.heading}>
        Create a New Report
      </Text>
      <TextInput
        label="Title"
        value={title}
        onChangeText={setTitle}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Description"
        value={description}
        onChangeText={setDescription}
        mode="outlined"
        multiline
        numberOfLines={4}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSubmit}>
        Submit Report
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 16,
  },
  heading: {
    marginBottom: 8,
  },
  input: {
    backgroundColor: "transparent",
  },
});
