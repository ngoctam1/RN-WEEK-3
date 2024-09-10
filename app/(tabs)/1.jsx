import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';


const MyApp = () => {
  return (

  <View style={styles.container}>
      
      <View style={styles.header}>
          <View style={styles.circle}></View>
      </View>
      <View style={styles.body}>
        <Text style={{fontWeight:'bold'}}>
          GROW 
        </Text>
        <Text style={{fontWeight:'bold'}}>
          YOUR BUSINESS
        </Text>
      </View>
      <View style={styles.footer}>
      <Text style={{}}>
          We will help you to grow your businees using
        </Text>
        <Text style={{}}>
          online sever
        </Text>
      </View>
      <View style={styles.foot}>
      <TouchableOpacity style={styles.touchable}>
                <Text style={styles.text_style3}>Login</Text>
                
            </TouchableOpacity>
      <TouchableOpacity style={styles.touchable}>
                <Text style={styles.text_style3}>SIGN UP</Text>
                
      </TouchableOpacity>
      </View>
    <View style={{}}></View>
  </View>
  );
};

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#3399FF',
      justifyContent:'center',
      alignContent:'center',
    },
    header:{
      flex:2,
      flexDirection:'row',
      backgroundColor:'',
      justifyContent:'center',
      alignItems:'center',

    },
    body:{
      flex:1,
      backgroundColor:'',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
    },
    footer:{
      flex:1,
      backgroundColor:'',
      flexDirection:'column',
      justifyContent:'flex-start',
      alignItems:'center',
    },
    foot:{
      flex:1,
      backgroundColor:'',
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      
    },
    circle:{
      width: 150,  
      height: 150, 
      borderRadius: 75,
      borderWidth: 8, 
      borderColor: 'black', 
      backgroundColor: 'transparent',
    },

    touchable: {
      backgroundColor: 'yellow',
      height:70,
      width: 130,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems:'center'
    },

    text_style3:{
      fontSize: 30, 
       fontWeight: 'bold'
    },
    
});


export default MyApp;
