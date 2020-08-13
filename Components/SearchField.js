import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const SearchField = () => {
  const onChangeText = (text) => {
    console.log(text);
  };

  return (
    <View style={styles.inputField}>
      <TextInput
        placeholder="Enter a movie..."
        style={styles.inputText}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 10,
  },
  inputText: {
    fontSize: 20,
    fontWeight: '300',
  },
});

export default SearchField;
