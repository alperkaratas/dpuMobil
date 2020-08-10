import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

const Card = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.pressCard}>
      <Image source={props.imgSource} style={styles.imgContainer} />
      <Text style={styles.text}>{props.cardName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 200,
    backgroundColor: '#3160BE',
    margin: 15,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  imgContainer: {
    width: 110,
    height: 110,
    marginBottom: 15,
  },
});

export {Card};
