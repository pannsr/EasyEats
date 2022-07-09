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
        options={{title: t('navigation.home')}}
      />

      <Stack.Screen
        name="Branch"
        component={Branch}
        options={screenOptions.branch}  
      />

      <Stack.Screen
        name="MenuPage"
        component={MenuPage}
        options={screenOptions.menu}  
      />  

      <Stack.Screen
        name="Components"
        component={Components}
        options={screenOptions.components}
      />

      <Stack.Screen name="Pro" component={Pro} options={screenOptions.pro} />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Customizable"
        component={Customizable}
        options={{headerShown: true}}
      />

    <Stack.Screen
        name="Cart"
        component={Cart}
        options={screenOptions.cart}
      />    

      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
