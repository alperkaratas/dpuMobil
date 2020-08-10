import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Dimensions} from 'react-native';
import {Header, DateCard, CardView} from '../components';

const Main = () => {
  return (
    <SafeAreaView>
      <Header headerName="DPU MOBİL" />
      <DateCard />
      <CardView />
    </SafeAreaView>
  );
};

export {Main};
