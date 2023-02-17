import React, {useEffect} from 'react';
import {HomeScreen} from '../screen/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Image} from 'react-native';
import {NavBarHeader} from '../componentes/header/NavBarHeader';
import {FinalizadoScreen} from '../screen/FinalizadoScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  FinalizadoScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const NavigatorGeneral = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          header: () => (
            <View
              style={{
                display: 'flex',
                width: '100%',
                backgroundColor: '#F6F6F6',
              }}>
              <Image
                style={{height: 60, width: 160, resizeMode: 'stretch'}}
                source={require('../assets/logo.jpg')}
              />
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="FinalizadoScreen"
        component={FinalizadoScreen}
        options={{headerShown: false}}
        // options={{
        //   header: () => (
        //     <View
        //       style={{
        //         display: 'flex',
        //         width: '100%',
        //         backgroundColor: '#F6F6F6',
        //       }}>
        //       <Image
        //         style={{height: 60, width: 160, resizeMode: 'stretch'}}
        //         source={require('../assets/logo.jpg')}
        //       />
        //     </View>
        //   ),
        // }}
      />
    </Stack.Navigator>
  );
};
