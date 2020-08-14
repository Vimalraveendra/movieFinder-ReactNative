import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableHighlight,
} from 'react-native';

const MovieList = ({moviesList, openPopUpWindow}) => {
  return (
    <View style={styles.movies}>
      <ScrollView>
        {moviesList.map((movie) => (
          <TouchableHighlight
            key={movie.imdbID}
            onPress={() => openPopUpWindow(movie.imdbID)}>
            <View style={styles.movie}>
              <Image
                source={{uri: movie.Poster}}
                style={styles.image}
                resizeMode="cover"
              />
              <Text style={styles.heading}>{movie.Title}</Text>
            </View>
          </TouchableHighlight>
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
  image: {
    width: '100%',
    height: 300,
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
