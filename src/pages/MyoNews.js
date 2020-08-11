import React from 'react';
import {SafeAreaView, TouchableOpacity, Text, Image} from 'react-native';

const MyoNews = (props) => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Image
          source={require('../Icons/back.png')}
          style={{width: 40, height: 32, margin: 10}}
        />
      </TouchableOpacity>
      <Text>MyoNews</Text>
    </SafeAreaView>
  );
};

export {MyoNews};
