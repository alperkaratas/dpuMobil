/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  StyleSheet,
  View,
  Dimensions,
  Linking,
  Alert,
} from 'react-native';
import data from '../mock/contact.json';

const Contact = (props) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(data);
  }, []);

  const renderContact = ({item}) => {
    return (
      <View>
        <View style={styles.iconsContainer}>
          <Image style={styles.icon} source={require('../Icons/phone2.png')} />
          <View style={styles.mockData}>
            <Text style={styles.mockDataText}>{item.tel1}</Text>
          </View>
        </View>
        <View style={styles.iconsContainer}>
          <Image style={styles.icon} source={require('../Icons/phone2.png')} />
          <View style={styles.mockData}>
            <Text style={styles.mockDataText}>{item.tel2}</Text>
          </View>
        </View>
        <View style={styles.iconsContainer}>
          <Image style={styles.icon} source={require('../Icons/phone2.png')} />
          <View style={styles.mockData}>
            <Text style={styles.mockDataText}>{item.faks}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.iconsContainer}
          onPress={() =>
            Linking.openURL(
              'https://accounts.google.com/ServiceLogin/signinchooser?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin',
            )
          }>
          <Image style={styles.icon} source={require('../Icons/mail.png')} />
          <View style={styles.mockData}>
            <Text style={styles.mockDataText}>basin@dpu.edu.tr</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.iconsContainer}>
          <Image style={styles.icon} source={require('../Icons/map.png')} />
          <View style={styles.mockData}>
            <Text style={styles.mockDataText}>{item.adres}</Text>
          </View>
        </View>
        <View style={styles.iconsContainer}>
          <Image style={styles.icon} source={require('../Icons/mail.png')} />
          <View style={styles.mockData}>
            <Text style={styles.mockDataText}>{item.kepadresi}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Image
          source={require('../Icons/back.png')}
          style={{width: 40, height: 32, margin: 10}}
        />
      </TouchableOpacity>
      <View style={{alignSelf: 'center', marginTop: -30, margin: 30}}>
        <Text style={{fontWeight: 'bold', fontSize: 22, color: '#355284'}}>
          İLETİŞİM BİLGİLERİ
        </Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={dataList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderContact}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 1.2,
    marginHorizontal: 5,
  },
  icon: {
    width: 47,
    height: 47,
  },
  iconsContainer: {
    marginHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  mockData: {
    marginHorizontal: 15,
    marginTop: 15,
  },
  mockDataText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export {Contact};
