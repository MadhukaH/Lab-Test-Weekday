import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

const SignUpScreen = () => {
  const router = useRouter(); // Initialize the router

  return (
    <View style={styles.container}>
      {/* Illustration */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://i.postimg.cc/0yPfLGp5/6343845-Photoroom.png' }} // Replace with your image URL or asset
          style={styles.image}
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>Sign Up</Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Name" />
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      </View>

      {/* Sign-up Button */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/Dashboard')}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      {/* Login Link */}
      <Text style={styles.footerText}>
        You already have an account?{' '}
        <TouchableOpacity onPress={() => router.push('/Login')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EADCF8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    marginVertical: 10,
    fontSize: 16,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#6C4AB6',
    paddingVertical: 15,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footerText: {
    fontSize: 14,
    color: '#000',
    marginBottom: 100,
  },
  link: {
    color: '#6C4AB6',
    fontWeight: 'bold',
  },
});
