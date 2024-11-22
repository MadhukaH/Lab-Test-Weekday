import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons'; 
import { useRouter } from 'expo-router'; 

const WelcomeScreen = () => {
  const router = useRouter(); 

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.postimg.cc/Y0FRwbn0/Untitled-design-Photoroom.png' }}
        style={styles.image}
      />
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.subtitle}>Welcome to the Volunteer & Charity App!</Text>

      {/* Navigate to Dashboard on Login button press */}
      <TouchableOpacity
        style={[styles.button, styles.loginButton]}
        onPress={() => router.push('/Login')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Navigate to Signup on Sign Up button press */}
      <TouchableOpacity
        style={[styles.button, styles.signUpButton]}
        onPress={() => router.push('/Signup')}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.signUpUsing}>Sign up using</Text>
      <View style={styles.iconsContainer}>
        {/* Navigate to Signup on Icon press */}
        <TouchableOpacity onPress={() => router.push('/Signup')}>
          <AntDesign name="google" size={40} color="#EA4335" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/Signup')}>
          <AntDesign name="instagram" size={40} color="#4B0082" style={styles.icon} /> 
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/Signup')}>
          <FontAwesome name="facebook" size={40} color="#1877F2" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EADCF8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 55,
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4B0082',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#4B0082',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    width: '80%',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
    elevation: 5, //shadow on Android
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  loginButton: {
    backgroundColor: '#6A5ACD',
  },
  signUpButton: {
    backgroundColor: '#6A5ACD',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
  signUpUsing: {
    fontSize: 16,
    color: '#4B0082',
    marginTop: 30,
    marginBottom: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  icon: {
    marginHorizontal: 15,
  },
});

export default WelcomeScreen;
