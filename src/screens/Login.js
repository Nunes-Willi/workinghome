import React from 'react';
import { Text, TextInput, StyleSheet, View, Image, } from 'react-native';
import { Button, Card } from 'react-native-paper';

import Logo from '../../icons/LogoFundoAzul.png'
import Google from '../../icons/google.png'
import Facebook from '../../icons/facebook.png'

export default function Login ({ navigation }) {
  return (
    <View style={styles.container}>
        <Image source={Logo} style={styles.logo}>
        </Image>
        <View style={styles.titleContainer}>
          <Text 
            style={{  
              fontWeight: 'bold',
              fontSize: 26,
              color: '#FFFFFF',
              marginTop: 15,
              marginBottom: 15,
            }}> 
              Login 
          </Text>
        </View>
      <Card style={styles.card}>
        <View>
          <TextInput type="email" name="email" placeholder='  Email:' placeholderTextColor="#9F9F9F" style={styles.input}/>
          <TextInput type="password" name="senha" placeholder='  Senha:' placeholderTextColor="#9F9F9F" style={styles.input}/>      
        </View>
          <View style={{alignItems: 'center', paddingTop: 5, paddingBottom: 15,}}>
            <Text style={{color: '#837F7F',}}>---------- Outras maneiras de login ----------</Text>
          </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly',}}>
          <Image source={Facebook} style={styles.image}>
          </Image>
          <Image source={Google} style={styles.image}>
          </Image>
        </View>
        <View style={{alignItems: 'center', margin: 10, }}>
          <Text style={{color: '#837F7F'}}>
            Não possui conta?
            <Text style={styles.link} onPress={() => navigation.navigate('Cadastro')}>
              Clique Aqui
            </Text> 
          </Text>
        </View>
        <View style={{alignItems: 'center',}}>
          <Button mode="elevated" onPress={() => navigation.navigate('Home')} style={styles.botao}>
            <Text style={{color: '#3B8AEB',}}>Enviar!</Text>
          </Button>
        </View>
      </Card>
      <View style={styles.footer}>
        <Text style={{fontSize: 12, color: '#FFFFFF',}}>
          Termos de privacidade          
        </Text>
        <Text style={{fontSize: 10, color: '#FFFFFF',}}>
          @2023 Working House
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3B8AEB',
  },

  logo: {
    height: 180,
    width: 180,
  },

  image: {
    width: 35,
    height: 35,
  },

  card: {
    backgroundColor: '#FFFFFF',
    width: '80%',
    padding: 10,
    marginTop: 10,
    marginBottom: 40,
  },

  titleContainer: {
    alignItems: 'center',
    width: '80%',
  },

  input: {
    backgroundColor: '#EEEEEE',
    borderRadius: 12,
    margin: 10,
    width: '90%',
  },

  botao: {
    width: 130,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
  },

  link: {
    color: '#3B8AEB',
  },

  footer: {
    padding: 12,
    alignItems: 'center',
  },
});