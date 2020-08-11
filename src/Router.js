import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Main, News, Contact, Announcements, MyoNews} from './pages';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={Main}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="News"
          component={News}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="Announcements"
          component={Announcements}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="MyoNews"
          component={MyoNews}
          options={{gestureEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
