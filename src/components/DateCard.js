/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import TextTicker from 'react-native-text-ticker';

const DateCard = () => {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  var hours = new Date().getHours();
  var min = new Date().getMinutes();
  var sec = new Date().getSeconds();
  const [weather, setWeather] = useState('30 °C Güneşli');
  //Hava durumu dinamik değil. Free Weather Api ile dinamikleştirilir.

  return (
    <ImageBackground
      style={styles.container}
      source={require('../Icons/weatherBackground.jpg')}>
      <Text style={styles.text}>{date + ' / ' + month + ' / ' + year}</Text>
      <Text style={styles.text}>{hours + ' : ' + min + ' : ' + sec}</Text>
      <View style={styles.weatherContainer}>
        <Image style={styles.sunImage} source={require('../Icons/sun.png')} />
        <Text style={styles.text}>{weather}</Text>
      </View>
      <View style={styles.welcomeContainer}>
        <TextTicker
          style={styles.welcomeText}
          duration={3000}
          loop
          bounce
          repeatSpacer={50}
          marqueeDelay={1000}>
          Mobil Uygulama Paneline Hoşgeldiniz
        </TextTicker>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4.8,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  weatherContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  sunImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  welcomeContainer: {
    width: Dimensions.get('window').width,
    alignSelf: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export {DateCard};
