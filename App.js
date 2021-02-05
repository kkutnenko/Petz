import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import Pet from './src/components/PetDetail';
import Constants from 'expo-constants';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView >
      <Pet name="Muffin" imageSrc={require('./assets/cat1.jpg')}/>
      <Pet name="Sir Charles Flooferson III" imageSrc={require('./assets/cat2.jpg')}/>
      <Pet name="Cookie" imageSrc={require('./assets/cat3.jpg')}/>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
