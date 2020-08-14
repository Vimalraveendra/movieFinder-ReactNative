import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const SearchField = ({searchMovies, text, onChange}) => {
  return (
    <View style={styles.inputField}>
      <TextInput
        placeholder="Enter a movie..."
        style={styles.inputText}
        // eslint-disable-next-line no-shadow
        onChangeText={(text) => onChange(text)}
        value={text}
        onSubmitEditing={searchMovies}
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
    marginBottom: 10,
  },
  inputText: {
    fontSize: 20,
    fontWeight: '300',
  },
});

export default SearchField;
