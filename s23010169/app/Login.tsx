import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

const LoginScreen = () => {
  const router = useRouter(); // Initialize the router

  return (
    <View style={styles.container}>
      {/* Illustration */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://i.postimg.cc/0yPfLGp5/6343845-Photoroom.png' }}
          style={styles.image}
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>Login</Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      </View>

      {/* Forgot Password Button */}
      <TouchableOpacity
        onPress={() => router.push('/ForgotPassword')}
        style={styles.forgotPasswordButton}
      >
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/Dashboard')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Sign-up Link */}
      <Text style={styles.footerText}>
        Don't have an account?{' '}
        <TouchableOpacity onPress={() => router.push('/Signup')}>
          <Text style={styles.link}>Sign-up</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default LoginScreen;

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
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#F3E5F5',
    borderRadius: 5,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#6C4AB6',
    fontWeight: '600',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#6C4AB6',
    paddingVertical: 15,
    width: '100%',
    borderRadius: 50,
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
