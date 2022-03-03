import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import Card from '../components/Card'
import stars from '../data/planets'


export default props => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Selecione um planeta:</Text>
        <View style={styles.cardsContainer}>
          {
            stars.map((planet) => {
              return <Card
                {...planet}
                key={planet.name}
                onClick={() => props.navigation.navigate('Details', planet)}
              />
            })
          }
        </View>
      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    marginBottom: 20,
  },
  container: {
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
