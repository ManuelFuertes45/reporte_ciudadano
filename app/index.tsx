import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

export default function Index() {
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

  // Dropdown options
  const positions = [
    { label: 'Civilian', value: 'civilian' },
    { label: 'Public Worker', value: 'public_worker' },
    { label: 'Administrator', value: 'administrator' },
  ];

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

      {/* Dropdown replacement */}
      <Dropdown
        style={styles.dropdown}
        data={positions}
        labelField="label"
        valueField="value"
        placeholder="Select Position"
        value={position}
        onChange={item => setPosition(item.value)}
      />

      <View style={styles.buttonGroup}>
        <View style={styles.buttonWrapper}>
          <Button title="Log In" onPress={handleLogin} color="#99e799ff" />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Register"
            onPress={() => router.push('/registration')}
            color="#686868ff"
          />
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
  dropdown: {
    width: '60%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  buttonGroup: {
    marginTop: 20,
    alignItems: 'flex-start',
  },
  buttonWrapper: {
    width: '20%',
    marginBottom: 20,
  },
});
