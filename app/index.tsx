import { useAuth } from '@/context/AuthContext';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';




export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [position, setPosition] = useState('');
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async () => {
    if (!position) {
      alert('Please select a position');
      return;
    }

    try {
      const response = await fetch('http://192.168.4.22:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, position }),
      });

      const data = await response.json();

      if (data.success) {
        login({ username, position });
        router.replace('/(tabs)/home');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Could not connect to server');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

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

      <View style={styles.input}>
  <Picker
    selectedValue={position}
    onValueChange={(value) => setPosition(value)}
    style={styles.picker}
    dropdownIconColor="#aaa"
  >
    <Picker.Item label="Position" value="" color="#aaa" enabled={false} />
    <Picker.Item label="Civilian" value="civilian" />
    <Picker.Item label="Public Worker" value="public_worker" />
    <Picker.Item label="Administrator" value="administrator" />
  </Picker>
</View>

      <View style={styles.buttonGroup}>
        <View style={styles.buttonWrapper}>
          <Button title="Log In" onPress={handleLogin} color="#99e799ff" />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Register" onPress={() => router.push('/registration')} color="#686868ff" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 30, paddingTop: 80, backgroundColor: '#f5f5f5' },
  title: { fontSize: 60, fontWeight: 'bold', marginBottom: 80, color: "#3a3a3aff" },
  input: {
    width: '60%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  picker: {
    color: "#a4a4a4ff",
    fontSize: 16,
  },
  buttonGroup: {
    marginTop: 20,
    alignItems: 'flex-start', // Align left
  },
  buttonWrapper: {
    width: '20%',
    marginBottom: 20,
  },
});
