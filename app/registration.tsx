import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [position, setPosition] = useState('civilian');
  const router = useRouter();

  const handleRegister = async () => {
    try {
      const response = await fetch('http://192.168.4.22:5000/registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, position }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Registration successful');
        router.replace('/');
      } else {
        alert(`Registration failed: ${data.error_msg || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Could not connect to server');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor="#aaa"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#aaa"
      />

      <Picker
        selectedValue={position}
        onValueChange={(value) => setPosition(value)}
        style={styles.picker}
      >
        <Picker.Item label="Civilian" value="civilian" />
        <Picker.Item label="Public Worker" value="public_worker" />
        <Picker.Item label="Administrator" value="administrator" />
      </Picker>

      <Button title="Register" onPress={handleRegister} />
      <Button title="Back to Login" onPress={() => router.replace('/')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 30, backgroundColor: '#f5f5f5' },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 40, textAlign: 'center', color: '#333' },
  input: {
    height: 50, borderColor: '#ccc', borderWidth: 1, borderRadius: 8,
    paddingHorizontal: 15, marginBottom: 20, backgroundColor: '#fff',
  },
  picker: { height: 50, marginBottom: 20, backgroundColor: '#fff' },
});
