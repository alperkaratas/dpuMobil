/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import data from '../mock/newsData.json';

const News = (props) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(data);
  }, []);

  const renderNews = ({item}) => {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: item.image}} />
        <View style={{marginBottom: 10}}>
          <View style={{marginVertical: 12, alignSelf: 'center'}}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={{alignSelf: 'center', marginVertical: 7}}>
              <Text style={{color: 'grey'}}>{item.date}</Text>
            </View>
          </View>
          <Text style={styles.text}>{item.description}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{height: Dimensions.get('window').height / 1.1}}>
      <View style={{justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image
            source={require('../Icons/back.png')}
            style={{width: 40, height: 32, margin: 10}}
          />
        </TouchableOpacity>
        <View style={{alignSelf: 'center', marginTop: -30, margin: 30}}>
          <Text style={{fontWeight: 'bold', fontSize: 22, color: '#355284'}}>
            HABERLER
          </Text>
        </View>
      </View>
      <View style={{marginHorizontal: 5}}>
        <FlatList
          data={dataList}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => (
            <View
              style={{
                borderWidth: 1,
                borderColor: '#e0e0e0',
                marginVertical: 10,
              }}
            />
          )}
          renderItem={renderNews}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 250,
  },
  text: {
    fontSize: 15,
  },
});

export {News};
