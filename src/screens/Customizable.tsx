import React, {useCallback, useState} from 'react';

import {useData, useTheme, useTranslation} from '../hooks';
import {Block, Button, Image, Input, Product, Text} from '../components';
import { TouchableOpacity } from 'react-native';
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
    <Block>
    </Block>
  );
};

export default Customizable;
