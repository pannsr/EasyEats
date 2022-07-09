import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  StackHeaderTitleProps,
  CardStyleInterpolators
} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/core';
import {DrawerActions} from '@react-navigation/native';
import {StackHeaderOptions} from '@react-navigation/stack/lib/typescript/src/types';

import {useData} from './useData';
import {useTranslation} from './useTranslation';

import Image from '../components/Image';
import Text from '../components/Text';
import useTheme from '../hooks/useTheme';
import Button from '../components/Button';
import Block from '../components/Block';
import { shouldUseActivityState } from 'react-native-screens';



export default () => {
  const {t} = useTranslation();
  const {user} = useData();
  const navigation = useNavigation();
  const {icons, colors, gradients, sizes} = useTheme();

  const menu = {
    headerStyle: {elevation: 0},
    headerTitleAlign: 'left',
    headerTitleContainerStyle: {marginLeft: -sizes.sm},
    headerLeftContainerStyle: {paddingLeft: sizes.s},
    headerRightContainerStyle: {paddingRight: sizes.s},
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerTitle: ({children}: StackHeaderTitleProps) => (
      <Text p>{children}</Text>
    ),
    /* the three side bar icon, get rid if no navigation needed */
    
    headerLeft: () => (
      <Button onPress={() => navigation.goBack()}>
        <Image
          radius={0}
          width={12}
          height={20}
          source={icons.back}
        />
      </Button>
    ),
    headerRight: () => (
      <Block row flex={0} align="center" marginRight={sizes.padding}>
        {/* Profile icon in header */}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Screens', {
              screen: 'Profile',
            })
          }>
          <Image
          width={30}
          height={30}
          source={icons.profile} 
          radius={1}/>
        </TouchableOpacity>
      </Block>
    ),
  } as StackHeaderOptions;

  const options = {
    stack: menu,
    home: {
      ...menu,
      headerTitle: () => (
        <Text p>
          {t('navigation.home')}
        </Text>
      ),
      headerLeft: () => (
        <Button>
          <Image
            radius={0}
            width={20}
            height={20}
            color={colors.black}
            source={icons.home}
          />
        </Button>
      ),
    },
    menu: {
      ...menu,
      headerTitle: () => (
        <Text p>
          {t('navigation.menu')}
        </Text>
      ),
      headerLeft: () => (
        <Button onPress={() => navigation.navigate('Screens', {
          screen: 'Home',
        })}>
          <Image
            radius={0}
            width={20}
            height={20}
            color={colors.black}
            source={icons.home}
          />
        </Button>
      ),
    },
  };

  return options;
};
