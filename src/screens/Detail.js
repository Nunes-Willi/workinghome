import React from 'react';
import { Text, TextInput, StyleSheet, View, Image, } from 'react-native';
import { Button, Card } from 'react-native-paper';

import dnaGertrudes from '../../assets/dnaGertrudes.png'


export default function Login ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={dnaGertrudes} style={styles.image}>
        </Image>
        <View style={styles.informacoes}>
          <Text style={{fontSize: 25, color: '#837F7F', fontWeight: 'bold',}}>Dna. Gertrudes</Text>
          <Text style={{fontSize: 18, color: '#9F9F9F',}}>72 anos diarista</Text>
          <Text style={{fontSize: 18, color: '#3B8AEB', maxWidth: '100%'}}>Av. Getulio Vargas 369 Joinville</Text>
        </View> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'red',
    
  },

  card: {
    backgroundColor: 'white',
    width: '100%',
    height: '25%',
    flexDirection: 'row',
  },

  image: {
    marginTop: 17,
    marginLeft: 3,
    width: '40%',
    height: '80%',
  },

  informacoes: {
    width: '60%',
    marginTop: 20,
    marginLeft: 10,
  },
});