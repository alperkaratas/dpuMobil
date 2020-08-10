import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, Dimensions} from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{props.headerName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 14,
    backgroundColor: '#3160BE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export {Header};
