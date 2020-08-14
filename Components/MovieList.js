import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';

const MovieList = ({moviesList}) => {
  return (
    <View style={styles.movies}>
      <ScrollView>
        {moviesList.length > 0 &&
          moviesList.map((movie) => (
            <View key={movie.imdbID} style={styles.movie}>
              <Text style={styles.heading}>{movie.Title}</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  movies: {
    flex: 1,
    width: '100%',
  },
  movie: {
    flex: 1,
    marginBottom: 20,
    width: '100%',
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    padding: 20,
    backgroundColor: '#445565',
  },
});

export default MovieList;
