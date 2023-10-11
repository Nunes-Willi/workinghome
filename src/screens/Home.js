import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView,Image } from 'react-native';
import { Button, Card } from 'react-native-paper';

import Engrenagem from '../../icons/engrenagem.png'
import Login from '../../icons/login.png'



const HomeScreen = ({ navigation }) => {
  const people = [
    {
      name: 'Maria Silva',
      jobType: 'Limpeza',
      location: 'São Paulo',
      age: 30,
      price: 'R$ 50/hora',
    },
    {
      name: 'João Oliveira',
      jobType: 'Cozinhar',
      location: 'Rio de Janeiro',
      age: 28,
      price: 'R$ 40/hora',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.button}>
          <Image source={Engrenagem} style={styles.image}></Image>
        </TouchableOpacity>
        <TextInput
          style={styles.searchBar}
          placeholder="Pesquisar..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")} style={styles.button}>
          <Image source={Login} style={styles.image}></Image>
        </TouchableOpacity>
      </View>
      
      {people.map((person, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => {
          }}
        >
          <Text style={styles.cardText}>{`Nome: ${person.name}`}</Text>
          <Text style={styles.cardText}>{`Trabalho Doméstico: ${person.jobType}`}</Text>
          <Text style={styles.cardText}>{`Localidade: ${person.location}`}</Text>
          <Text style={styles.cardText}>{`Idade: ${person.age} anos`}</Text>
          <Text style={styles.cardText}>{`Preço: ${person.price}`}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B8AEB',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    padding: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginHorizontal: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 13,
  },
  image: {
    width: 25,
    height: 25,
  },
});

export default HomeScreen;