import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import SearchField from './Components/SearchField';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie Finder</Text>

      <SearchField />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#223343',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default App;
