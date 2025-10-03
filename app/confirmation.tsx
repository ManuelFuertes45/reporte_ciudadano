import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Confirmation() {
  const router = useRouter();
  const params = useLocalSearchParams(); // <-- Correct way now

  const username = params.username as string || '';
  const email = params.email as string || '';

  const [code, setCode] = useState('');

  const handleConfirm = () => {
    alert(`User ${username} verified with code ${code}`);
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm Your Account</Text>
      <Text style={styles.info}>A code has been sent to: {email}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter confirmation code"
        value={code}
        onChangeText={setCode}
        keyboardType="numeric"
        placeholderTextColor="#aaa"
      />

      <Button title="Confirm Account" onPress={handleConfirm} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 30, backgroundColor: '#f5f5f5' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#333' },
  info: { fontSize: 16, marginBottom: 20, textAlign: 'center', color: '#555' },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
});
