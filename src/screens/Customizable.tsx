import React, {useCallback, useState} from 'react';

import {useData, useTheme, useTranslation} from '../hooks';
import {Block, Button, Image, Input, Product, Text} from '../components';
import { TouchableOpacity, TextInput, View, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { ICONS } from '../constants/theme';
import { Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Customizable = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [tab, setTab] = useState<number>(0);
  const {mainRestaurants} = useData();
  const [products, setProducts] = useState(mainRestaurants);
  const {assets, colors, fonts, gradients, sizes, icons} = useTheme();
  const [count, setCount] = useState(1);

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

  const increase = () => {
    setCount(count => count + 1);
  };

  const decrease = () => {
    if(count > 0){
      setCount(count => count - 1);
    }
    
  }
  
  return (
    <TouchableOpacity
      activeOpacity={1.0}
      style={{flex:1, paddingTop:sizes.s, }}
      onPress={()=>Keyboard.dismiss()}
    >
      <View style={{flex: 1, paddingHorizontal:sizes.padding}}>
        <View style={{paddingVertical:10}}>
          <Text h5 style={{ paddingVertical:10, 
                            paddingHorizontal: 8,}}>
            The restaurant would give you options here on how to customize your food.
          </Text>
        </View>
        <View >
          <TextInput style={{backgroundColor:colors.card,
                            borderColor: colors.gray, 
                            borderWidth:1, 
                            borderRadius: 8, 
                            paddingVertical:10, 
                            paddingHorizontal: 8,
                            fontSize: 16}} 
                      placeholder="Customize your dish" multiline />
        </View>
      </View>
      <View style={{backgroundColor:'white', borderRadius:20, flex: 0.3, justifyContent: 'flex-end', alignItems: 'center'}}>
        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Button color='#47B9B6' onPress={decrease}>
            <Text h4 bold color='white'>
              -
            </Text>
          </Button>
          <Button color='#EBF1F7'>
            <Text p bold>
              {count}
            </Text>
          </Button>
          <Button color='#47B9B6' onPress={increase}>
            <Text h4 bold color='white'>
              +
            </Text>
          </Button>
        </View>
        <View>
          <Button 
              color='#FC585D' 
              marginVertical={sizes.m} 
              rounded={true} 
              height={30} width={300}
              onPress = {() => 
                navigation.navigate('Screens', {
                  screen: 'MenuPage'
              })}
              >
                  <Text white bold transform="uppercase">
                    Place Order
                  </Text>
          </Button>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Customizable;
