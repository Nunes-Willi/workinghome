import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, ScrollView} from 'react-native';

import dnaGertrudes from '../../assets/dnaGertrudes.png'
import imgFaxina1 from '../../assets/exemplofaxina1.jpg'
import imgFaxina2 from '../../assets/exemplofaxina2.jpg'
import imgFaxina3 from '../../assets/exemplofaxina3.jpg'
import Voltar from '../../icons/volte.png'

export default function Detail ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={dnaGertrudes} style={styles.imageProfile}>
        </Image>
        <View style={styles.informacoes}>
          <Text style={{fontSize: 25, color: '#837F7F', fontWeight: 'bold',}}>Dna. Gertrudes</Text>
          <Text style={{fontSize: 18, color: '#9F9F9F',}}>72 anos diarista</Text>
          <Text style={{fontSize: 18, color: '#3B8AEB', maxWidth: '100%'}}>Av. Getulio Vargas 369 Joinville</Text>
          <Text style={{color: '#837F7F', fontWeight: 'bold', marginTop: 20,}}>
            5.0  ⭐ ⭐ ⭐ ⭐ ⭐ 
            <Text style={{ color: '#9F9F9F', fontSize: 11 }}> 52 avaliações </Text> 
          </Text>
        </View> 
      </View>
      <View style={styles.main}>
        <ScrollView style={styles.texto}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#837F7F', }}>Serviços</Text>
          <Text style={{ color: '#9F9F9F', fontSize: 14 }}>
            Limpeza comum: a remoção de pó, resíduos de substâncias orgânicas e inorgânicas e a organização do local, 
            fazem parte da limpeza comum. Geralmente, as tarefas incluem limpezas básicas ou de manutenção, 
            com foco naquilo que é visto rapidamente. Mesmo assim, os procedimentos envolvem a remoção seca ou molhada da... 
            <Text style={{ color: '#3B8AEB', fontSize: 14 }}>
            Ver Mais ▼
            </Text>
          </Text>
          <Image source={imgFaxina1} style={styles.image}></Image>
          <Image source={imgFaxina2} style={styles.image}></Image>
          <Image source={imgFaxina3} style={styles.image}></Image>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={Voltar} style={{width: 45, height: 45, marginLeft: 10, marginTop: 17,}}></Image>
        </TouchableOpacity>
        <View style={styles.contrato}>
          <Text style={{ color: '#3B8AEB', fontSize: 22,}}>
            R$110,00
          </Text>
          <Text style={{ color: '#837F7F', fontSize: 17,}}>
            Diária
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  card: {
    backgroundColor: 'white',
    width: '100%',
    height: '25%',
    flexDirection: 'row',
  },

  imageProfile: {
    marginTop: 17,
    marginLeft: 3,
    width: '40%',
    height: '80%',
  },

  informacoes: {
    width: '60%',
    marginTop: 23,
    marginLeft: 10,
  },

  main: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '66%',
  },

  texto: {
    marginLeft: 8 ,
    marginRight: 8 ,
    width: '97%',
  },

  image: {  
    width: 375,
    height: 200,
    marginTop: 15,
    borderRadius: 5,
  },

  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#3B8AEB',
    width: '100%',
    height: '9%',
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
  },

  contrato: {
    width: '42%',
    height: '70%', 
    marginRight: 10, 
    marginTop: 12, 
    borderRadius: 20,
    alignItems: 'center', 
    backgroundColor: '#FFFFFF',
  },
});