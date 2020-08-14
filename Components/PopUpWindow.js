import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight, Modal} from 'react-native';

const PopUpWindow = ({selected, closePopUp}) => {
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={false}
        visible={typeof selected.Title != 'undefined'}>
        <View style={styles.popUp}>
          <Text style={styles.popupTitle}>Title:{selected.Title}</Text>
          <Text style={styles.rating}>Rating:{selected.imdbRating}</Text>
          <Text style={styles.year}>Year:{selected.Year}</Text>
          <Text style={styles.plot}>Plot:{selected.Plot}</Text>
        </View>
        <TouchableHighlight onPress={closePopUp} style={styles.closeBtn}>
          <Text style={styles.closeBtnText}>Close</Text>
        </TouchableHighlight>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  popUp: {
    marginTop: 80,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  popupTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  rating: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 10,
  },
  year: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
  },
  plot: {
    fontSize: 16,
    fontWeight: '400',
  },
  closeBtn: {
    backgroundColor: '#2484c4',
    borderRadius: 50,
    marginHorizontal: 18,
  },
  closeBtnText: {
    padding: 20,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: '#fff',
  },
});

export default PopUpWindow;
