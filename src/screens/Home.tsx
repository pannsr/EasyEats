import React, {useCallback, useState} from 'react';

import {useData, useTheme, useTranslation} from '../hooks/';
import {Block, Button, Image, Input, Product, Text} from '../components/';
import { TouchableOpacity } from 'react-native';
import { ICONS } from '../constants/theme';


const Home = () => {
  const {t} = useTranslation();
  const [tab, setTab] = useState<number>(0);
  const {mainRestaurants} = useData();
  const [products, setProducts] = useState(mainRestaurants);
  const {assets, colors, fonts, gradients, sizes, icons} = useTheme();

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

  
  return (
    <Block>
      {/* search input */}
     
      
      {/* products list */}
      <Block
        scroll
        paddingHorizontal={sizes.padding}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: sizes.l}}>
        <Block row wrap="wrap" justify="space-between" marginTop={sizes.sm}>
          {products?.map((product) => (
            /* Uses the Product component from components/Product.tsx */
            <Product {...product} key={`card-${product?.id}`} />
          ))}
        </Block>
      </Block>
    </Block>
  );
};

export default Home;
