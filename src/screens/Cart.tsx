import React, {useCallback, useEffect, useState} from 'react';

import {useData, useTheme, useTranslation} from '../hooks';
import {Article, Block, Button, Image, Input, Product, Text} from '../components';
import { FlatList, TouchableOpacity, View } from 'react-native';
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
      showsVerticalScrollIndicator={true}
      keyExtractor={(item) => `${item?.id}`}
      style={{paddingHorizontal: sizes.padding}}
      contentContainerStyle={{paddingBottom: sizes.l}}
      renderItem={({item}) => <Article {...item} />}
      ListFooterComponentStyle={{justifyContent: 'center', paddingTop: sizes.sm}}
      ListFooterComponent={
      <Block card style={{height: 'auto', flexDirection: 'row'}}>
        <View style={{flex: 1, justifyContent: 'center', paddingLeft: 20}}>
          <Text>
            Chicken wings{"\n"}
            Water{"\n"}
            Salad
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems:'flex-end', paddingRight: 20}}>
          <Text>
            ฿100{"\n"}
            ฿20{"\n"}
            ฿80
          </Text>
        </View>
      </Block>
      }
    />
    <View style={{backgroundColor:'white', borderRadius: 20, justifyContent: 'center', alignItems: 'center', flex: 1, flexDirection:'column'}}>
      <View style={{flex:1, flexDirection:'row', justifyContent: 'space-between', alignItems:'center'}}>
        <Text h5 marginLeft={30} style={{flex: 1}}>Total: </Text>  
        <Text h4 marginRight={30}>฿200</Text> 
      </View>
      <View style={{flex:1, justifyContent:'flex-start'}}>
      <Button gradient={gradients.info} rounded={true} height={30} width={300} style={{justifyContent:'center'}}>
            <Text p white bold transform="uppercase">
              Place Order
            </Text>
          </Button>
      </View>
         
          
    </View>
    </Block>
        
        
  );
};

export default Cart;