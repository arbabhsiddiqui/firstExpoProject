import  React,{useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';


import {Focus} from './src/features/focus/Focus';
import {Timer}from './src/features/timer/Timer';

export default function App() {
  const [focusSubject,setFocusSubject]= useState('dd');
  return (
    <View style={styles.container}>
    
    {
      focusSubject ? (
      <Timer focusSubject={focusSubject} />
      ) : (  <Focus addSubject={setFocusSubject}/>)
    }
    
    
    </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor:'#252250',
  
  },
  title:{
    color:'#fff',
    fontSize:50
  }
});
