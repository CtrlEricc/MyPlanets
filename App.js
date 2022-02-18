import React, { Fragment, useState } from 'react'
import { ScrollView, StyleSheet, Text, View, TextInput } from 'react-native'
import Card from './components/Card'

const App = () => {
  const [selected, setSelected] = useState('');
  const [weightValue, setWeightValue] = useState(0);

  const stars = [
    { name: 'Terra', gravity: 9.7, imgSrc: require('./assets/images/Terra.png') },
    { name: 'Sol', gravity: 274, imgSrc: require('./assets/images/Sol.png') },
    { name: 'Júpiter', gravity: 24.9, imgSrc: require('./assets/images/Júpiter.png') },
    { name: 'Netuno', gravity: 11.1, imgSrc: require('./assets/images/Netuno.png') },
    { name: 'Saturno', gravity: 10.4, imgSrc: require('./assets/images/Saturno.png') },
    { name: 'Urano', gravity: 8.8, imgSrc: require('./assets/images/Urano.png') },
    { name: 'Vênus', gravity: 8.8, imgSrc: require('./assets/images/Vênus.png') },
    { name: 'Marte', gravity: 3.7, imgSrc: require('./assets/images/Marte.png') },
    { name: 'Mercúrio', gravity: 3.7, imgSrc: require('./assets/images/Mercúrio.png') },
    { name: 'Lua', gravity: 1.6, imgSrc: require('./assets/images/Lua.png') },
    { name: 'Plutão', gravity: 0.5, imgSrc: require('./assets/images/Plutão.png') },
  ]

  function getCurrentGravity() {
    let selectedPlanet = selected
    let gravity = 0.0
    stars.map((planet) => {
      if (selectedPlanet == planet.name) {
        gravity = Number(planet.gravity)
      }
    })
    return gravity
  }

  function calcGravity() {
    let planetG = getCurrentGravity()
    let calc = ((planetG * Number(weightValue)) / 9.7).toFixed(2)  // 9.7 é Earth G
    return isNaN(calc) ? '0.00' : calc
  }

  return (

    <ScrollView>

      <View style={styles.topContainer}>
        <Text style={styles.title}>Calculadora de gravidade</Text>
        <View style={styles.input}>
          <Text style={styles.prefix}>Seu peso na Terra:</Text>
          <TextInput
            placeholder="Digite aqui"
            onChangeText={setWeightValue}
            keyboardType="numeric"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.prefix}>Seu peso em {selected}</Text>
          <TextInput
            placeholder="0.04"
            keyboardType="numeric"
            underlineColorAndroid="transparent"
            value={`${calcGravity()}`}
            editable={false}
          />
        </View >
      </View >

      <View style={styles.bottomContainer}>
        <Text style={styles.subtitle}>Selecione um planeta abaixo: </Text>
        <View style={styles.cardsContainer}>
          {
            stars.map((planet) => {
              return <Card
                key={planet.name}
                name={planet.name}
                gravity={planet.gravity}
                selected={selected}
                imageUri={planet.imgSrc}
                onClick={setSelected}
              />
            })
          }
        </View>
      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  topContainer: {
    height: 230,
    backgroundColor: '#fa5e23',
    paddingHorizontal: 24,
    paddingTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginTop: 20,
    borderRadius: 20
  },
  prefix: {
    paddingHorizontal: 10,
    fontWeight: 'bold',
    color: '#b6490e'
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#2a1265',

    paddingTop: 20,
    alignItems: 'center'
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});

export default App;
