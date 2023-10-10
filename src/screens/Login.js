import React from 'react';
import { Text, TextInput, StyleSheet, View, Image, } from 'react-native';
import { Button, Card } from 'react-native-paper';

import Logo from '../../icons/LogoFundoAzul.png'
import Google from '../../icons/google.png'
import Facebook from '../../icons/facebook.png'

export default function Cadastro ({ navigation }) {
  return (
    <View style={styles.container}>
        <Image source={Logo} style={styles.logo}>
        </Image>
      <Card style={styles.card}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}> Cadastre-se </Text>
        </View>
        <View>
          <TextInput type="text" name="name" placeholder='Nome:' style={styles.input}/>
          <TextInput type="email" name="email" placeholder='Email:' style={styles.input}/>
          <TextInput type="password" name="senha" placeholder='Senha:' style={styles.input}/>
          <TextInput type="password" name="Confirme-Senha" placeholder='Confirme a senha:' style={styles.input}/>      
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly',}}>
          <Image source={Facebook} style={styles.image}>
          </Image>
          <Image source={Google} style={styles.image}>
          </Image>
        </View>
          <View style={{alignItems: 'center', margin: 10,}}>
          <Text>
            Já possui conta?
            <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
              Clique Aqui
            </Text> 
          </Text>
        </View>
        <View style={{alignItems: 'center',}}>
          <Button mode="elevated" onPress={() => navigation.navigate('Home')} style={styles.botao}>
            <Text style={{color: '#FF5F0F',}}>Enviar!</Text>
          </Button>
        </View>
      </Card>
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
    width: 60,
    height: 60,
  },

  card: {
    backgroundColor: '#FFFFFF',
    width: '80%',
    padding: 10,
    marginTop: 10,
  },

  titleContainer: {
    alignItems: 'center',
  },

  title: {
    fontWeight: 'bold',
    color: '#FF5F0F',
  },

  input: {
    backgroundColor: '#EEEEEE',
    borderRadius: 12,
    margin: 10,
    width: '90%',
  },

  botao: {
    width: 130,
    backgroundColor: '#6304AE',
  },

  link: {
    color: '#FF5F0F',
  },
});