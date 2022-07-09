import React, {useCallback, useEffect, useState} from 'react';

import {useData, useTheme, useTranslation} from '../hooks';
import {Article, Block, Button, Image, Input, Product, Text} from '../components';
import { FlatList, TouchableOpacity } from 'react-native';
import { ICONS } from '../constants/theme';
import { Menu, Searchbar } from 'react-native-paper';
import { IBlock } from '../constants/types';
import { ScrollView } from 'react-native-gesture-handler';


const Cart = () => {
  const {t} = useTranslation();
  const [tab, setTab] = useState<number>(0);
  const {mainRestaurants} = useData();
  const [products, setProducts] = useState(mainRestaurants);
  const {assets, colors, fonts, gradients, sizes, icons} = useTheme();
  const [articles, setArticles] = useState<IBlock[]>([]);

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
  
  const data = useData();
  useEffect(() => {
    // THIS sets what articles (specific text and image) it displays
    setArticles(data?.articles);
  }, [data.articles, data.categories]);
  
  return (
      <Block>
        <FlatList
          data={articles}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => `${item?.id}`}
          style={{paddingHorizontal: sizes.padding}}
          contentContainerStyle={{paddingBottom: sizes.l}}
          renderItem={({item}) => <Article {...item} />}
        />
        <Text style={{alignSelf: 'center'}} marginVertical={sizes.xs}>
          Total Price:
        </Text>
        <Button gradient={gradients.success} style={{alignSelf: 'center'}} marginVertical={sizes.xl} rounded={true} height={30} width={300}>
            <Text white bold transform="uppercase">
              Place Order
            </Text>
        </Button>
      </Block>
  );
};

export default Cart;