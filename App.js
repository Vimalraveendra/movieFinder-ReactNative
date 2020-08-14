import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';

import axios from 'axios';
import Config from 'react-native-config';
import SearchField from './Components/SearchField';
import MovieList from './Components/MovieList';
import PopUpWindow from './Components/PopUpWindow';

const App = () => {
  const apiUrl = `http://www.omdbapi.com/?&apikey=${Config.API_KEY}`;

  const [state, setState] = useState({
    text: '',
    moviesList: [],
    selected: {},
  });

  const onChange = (inputText) => {
    setState((prevState) => {
      return {...prevState, text: inputText};
    });
  };

  const searchMovies = () => {
    if (state.text.length) {
      try {
        axios(apiUrl + '&s=' + state.text).then(({data}) => {
          let response = data.Search;
          console.log('res', response);
          if (response) {
            return setState((prevState) => {
              return {...prevState, moviesList: response, text: ''};
            });
          } else {
            Alert.alert('error!!!', 'Please enter a valid film name');
            setState((prevState) => {
              return {...prevState, text: ''};
            });
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const openPopUpWindow = (id) => {
    try {
      axios(apiUrl + '&i=' + id).then(({data}) => {
        let response = data;
        setState((prevState) => {
          return {...prevState, selected: response};
        });
      });
    } catch (err) {
      console.log('Please select a movie ');
    }
  };

  const closePopUp = () => {
    setState((prevState) => {
      return {...prevState, selected: {}};
    });
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
        error={state.error}
      />
      <PopUpWindow selected={state.selected} closePopUp={closePopUp} />
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
});

export default App;
