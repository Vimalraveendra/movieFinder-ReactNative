import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight, Modal} from 'react-native';

const PopUpWindow = ({selected}) => {
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={false}
        visible={typeof selected.Title != 'undefined'}>
        <View style={styles.popUp}>
          <Text style={styles.popupTitle}>Title:{selected.Title}</Text>
          <Text style={styles.rating}>Rating:{selected.imdbRating}</Text>
          <Text style={styles.plot}>Plot:{selected.Plot}</Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  popUp: {
    flex: 1,
    marginTop: 80,
    marginHorizontal: 20,
  },
  popupTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  rating: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
  },
  plot: {
    fontSize: 16,
    fontWeight: '400',
  },
});

export default PopUpWindow;
