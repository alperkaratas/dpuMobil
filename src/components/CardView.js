import React from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {Card} from '../components';
import {useNavigation} from '@react-navigation/native';

const CardView = (props) => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>DUMLUPINAR ÜNİVERSİTESİ</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Card
          pressCard={() => navigation.navigate('News')}
          cardName="HABERLER"
          imgSource={require('../Icons/haberler.png')}
        />
        <Card
          cardName="DUYURULAR"
          imgSource={require('../Icons/duyurular.png')}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Card
          cardName="MYO HABER"
          imgSource={require('../Icons/myohaber.png')}
        />
        <Card cardName="İLETİŞİM" imgSource={require('../Icons/phone.png')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#355284',
    height: Dimensions.get('window').height,
  },
  nameContainer: {
    alignSelf: 'center',
    width: Dimensions.get('window').width / 1.2,
    marginTop: 15,
    borderRadius: 13,
    backgroundColor: '#3160BE',
    alignItems: 'center',
    padding: 15,
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
});

export {CardView};
