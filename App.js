import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, View, StyleSheet } from 'react-native';
import Card from './Card'

const Stack = createStackNavigator();

const App = () => {
  const items = [
    {
      imagem: require('./assets/sword.png'),
      nome: 'Espada Mágica',
      descricao: 'Poder de ataque: 50\nDefesa: 10',
    },
    {
      imagem: require('./assets/armor.png'),
      nome: 'Armadura',
      descricao: 'Poder de ataque: 5\nDefesa: 60',
    },
    {
      imagem: require('./assets/dragon-scroll.png'),
      nome: 'Pergaminho do Dragão',
      descricao: 'Cura 100 pontos de vida.',
    },
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator>


        <Stack.Screen name="Itens Disponíveis">
          {(props) => (
            <ScrollView>
              <View>
                {items.map((item, index) => (
                  <Card
                    key={index}
                    item={item}
                    navigation={props.navigation}
                  />
                ))}
              </View>
            </ScrollView>
          )}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
};




export default App;
