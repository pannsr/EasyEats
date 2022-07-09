import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Components, Home, Profile, Register, Pro, Branch, MenuPage} from '../screens';
import {useScreenOptions, useTranslation} from '../hooks';
import Cart from '../screens/Cart';
import Customizable from '../screens/Customizable';

const Stack = createStackNavigator();

export default () => {
  const {t} = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator screenOptions={screenOptions.stack}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={screenOptions.home}
      />

      <Stack.Screen
        name="Branch"
        component={Branch}
        options={{title: t('navigation.branch')}}  
      />

      <Stack.Screen
        name="MenuPage"
        component={MenuPage}
        options={screenOptions.menu}  
      />  

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Customizable"
        component={Customizable}
        options={{title: t('navigation.customizable')}}
      />

    <Stack.Screen
        name="Cart"
        component={Cart}
        options={{title: t('navigation.cart')}}
      />    

      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
