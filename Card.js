import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Card = ({ item, navigation }) => {
  const handleCardPress = () => {
    navigation.navigate('Detalhes do Item', { item });
  };

  return (
    <View style={styles.card}>
      <Image source={item.imagem} style={styles.image} />
      <Text style={styles.title}>{item.nome}</Text>
      <Text style={styles.description}>{item.descricao}</Text>
      <TouchableOpacity style={styles.button} onPress={handleCardPress}>
        <Text style={styles.buttonText}>Propor Troca</Text>
      </TouchableOpacity>
    </View>
  );
};
  
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    marginTop: 5,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Card;
