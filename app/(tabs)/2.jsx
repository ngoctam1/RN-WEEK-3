import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ForgetPassword = () => {
  return (
    <LinearGradient 
      colors={['#a4e8ff', '#E0FFFF', '#3399FF']}
      start={{ x: 0, y: 0 }} 
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      {/* Vẽ biểu tượng khóa */}
      <View style={styles.lockContainer}>
        <View style={styles.circle} />
        <View style={styles.rectangle}>
          <View style={styles.keyhole} />
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.title}>FORGET PASSWORD</Text>
        <Text style={styles.subtitle}>
          Provide your account's email for which you want to reset your password
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            style={styles.input}
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lockContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  // Vòng tròn (phần trên của khóa)
  circle: {
    width: 70,
    height: 70,
    borderRadius: 25,
    borderWidth: 15,
    borderColor: 'black',
    backgroundColor: 'transparent',
    marginBottom: -23,
  },
  // Hình chữ nhật (thân khóa)
  rectangle: {
    width: 80,
    height: 60,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,

  },
  // Lỗ khóa
  keyhole: {
    width: 10,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
  },
  button: {
    backgroundColor: 'yellow',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});
