import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function ScreenB(){
    return(
      <View style={styles.body}>
        <Text style={styles.text}>Screen B</Text>
      </View>
    )
    } 

    const styles = StyleSheet.create({
        body:{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
        },
       text:{
        color:'#000000',
        fontWeight:'bold',
        fontSize:40,
        margin:20
       }
      });