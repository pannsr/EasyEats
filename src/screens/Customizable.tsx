import React, {useCallback, useState} from 'react';

import {useData, useTheme, useTranslation} from '../hooks';
import {Block, Button, Image, Input, Product, Text} from '../components';
import { TouchableOpacity, TextInput } from 'react-native';
import { ICONS } from '../constants/theme';
import { Searchbar } from 'react-native-paper';


const Customizable = () => {
  const {t} = useTranslation();
  const [tab, setTab] = useState<number>(0);
  const {mainRestaurants} = useData();
  const [products, setProducts] = useState(mainRestaurants);
  const {assets, colors, fonts, gradients, sizes, icons} = useTheme();

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
  
  return (
    <Block
      color={colors.card}
      paddingTop={sizes.m}
      paddingHorizontal={sizes.padding}>
      <Block>
        <TextInput style={{borderColor: colors.gray, 
                          borderWidth:1, 
                          borderRadius: 8, 
                          paddingVertical:10, 
                          paddingHorizontal: 8,
                          fontSize: 18}} 
                    placeholder="Regular" multiline />
      </Block>
      <Block style={{justifyContent: 'flex-end', alignItems: 'center'}}>
        <Button 
            gradient={gradients.success} 
            marginVertical={sizes.xl} 
            rounded={true} 
            height={30} width={300}>
                <Text white bold transform="uppercase">
                  Place Order
                </Text>
        </Button>
      </Block>
      
    </Block>
  );
};

export default Customizable;
