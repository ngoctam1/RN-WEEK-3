import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const MyApp = () => {
  return (
    <LinearGradient
      colors={['#a4e8ff', '#E0FFFF', '#3399FF']}
      locations={[0.1, 0.8, 1]}
      style={styles.container}
    >
      <View style={styles.header}>
        <View style={styles.circle}></View>
      </View>

      <View style={styles.body}>
        <Text style={styles.titleText}>GROW</Text>
        <Text style={styles.titleText}>YOUR BUSINESS</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.descriptionText}>We will help you to grow your business using</Text>
        <Text style={styles.descriptionText}>online server</Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.howItWorks}>
        <Text style={styles.howItWorksText}>HOW WE WORK?</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 8,
    borderColor: 'black',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: 16,
    color: 'black',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 40,
  },
  button: {
    backgroundColor: 'yellow',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  howItWorks: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  howItWorksText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default MyApp;
