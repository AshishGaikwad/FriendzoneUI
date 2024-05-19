import React, {useEffect} from 'react';
import {
  StatusBar,
  SafeAreaView,
  View,
} from 'react-native';

import Login from './src/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './src/Register';

const Stack = createNativeStackNavigator();

function App() {

  return (
       <NavigationContainer >
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            {/* <Stack.Screen name="Register" component={Register} /> */}
          </Stack.Navigator>
       </NavigationContainer>
  );
}

export default App;