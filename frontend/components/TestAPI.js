import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const API_URL = 'http://10.0.2.2:5000'; // Địa chỉ đặc biệt cho Android Emulator

const TestAPI = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [response, setResponse] = useState('');

  // Test GET request
  const testConnection = async () => {
    try {
      const res = await fetch(`${API_URL}/api/test`);
      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Lỗi kết nối: ' + error.message);
    }
  };

  // Test POST request
  const sayHello = async () => {
    try {
      const res = await fetch(`${API_URL}/api/hello`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
      const data = await res.json();
      setResponse(data.message);
    } catch (error) {
      setResponse('Lỗi: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={testConnection}>
        <Text style={styles.buttonText}>Kiểm tra kết nối</Text>
      </TouchableOpacity>
      
      <Text style={styles.messageText}>{message}</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập tên của bạn"
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity style={styles.button} onPress={sayHello}>
        <Text style={styles.buttonText}>Gửi lời chào</Text>
      </TouchableOpacity>

      <Text style={styles.messageText}>{response}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
});

export default TestAPI;