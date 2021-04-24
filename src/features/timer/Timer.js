import React from 'react';
import { Text, View, StyleSheet } from 'react-native';



import { fontSizes, PaddingSizes } from '../../utils/sizes';

export const Timer = ({focusSubject}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.subject}>{focusSubject}</Text>
      </View>
     
       
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    paddingTop: PaddingSizes.xxxl,
    fontSize:fontSizes.md,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: fontSizes.sm,
    textAlign:"center",
  },
  subject:{
    color:'#fff',
    textAlign:"center",
    fontSize:fontSizes.xl,
    fontWeight:'600'

  },
  inputContainer: {
    paddingTop: PaddingSizes.md,
    flexDirection: 'row',
    alignItems:'center',
  },
});
