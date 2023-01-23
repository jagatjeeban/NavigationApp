import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ScreenA({ navigation }){

  const onClickHandler = () => {
    navigation.navigate('Screen_B')
  }
return(
  <View style={styles.body}>
    <Text style={styles.text}>Screen A</Text>
    {/* <TouchableOpacity
    style={
      {
        backgroundColor:'#6495ED',
        width:200,
        height:60,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
      }
    }
    activeOpacity={0.7}
    onPress={onClickHandler}
    >
      <View>
        <Text style={{
          fontSize:20
        }}>Go to screen B</Text>
      </View>
    </TouchableOpacity> */}
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