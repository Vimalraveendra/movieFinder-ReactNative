import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import axios from 'axios';
import Config from 'react-native-config';
import SearchField from './Components/SearchField';
import MovieList from './Components/MovieList';

const App = () => {
  const apiUrl = `http://www.omdbapi.com/?&apikey=${Config.API_KEY}`;

  const [state, setState] = useState({
    text: '',
    moviesList: [],
  });

  const onChange = (inputText) => {
    setState((prevState) => {
      return {...prevState, text: inputText};
    });
  };
  const searchMovies = () => {
    axios(apiUrl + '&s=' + state.text).then(({data}) => {
      let response = data.Search;
      setState((prevState) => {
        return {...prevState, moviesList: response};
      });
    });
  };

  const openPopUpWindow = () => {
    console.log('hello');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie Finder</Text>
      <SearchField
        text={state.text}
        searchMovies={searchMovies}
        onChange={onChange}
      />
      <MovieList
        moviesList={state.moviesList}
        openPopUpWindow={openPopUpWindow}
      />
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
    marginBottom: 20,
  },
  textInput: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 18,
    fontSize: 20,
    fontWeight: '300',
    borderRadius: 10,
    marginBottom: 40,
  },
});

export default App;
