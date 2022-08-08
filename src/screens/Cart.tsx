import React, {useCallback, useEffect, useState} from 'react';

import {useData, useTheme, useTranslation} from '../hooks';
import {OrderItem, Block, Button, Image, Input, Product, Text} from '../components';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { ICONS } from '../constants/theme';
import { Menu, Searchbar } from 'react-native-paper';
import { IBlock, IOrderItem } from '../constants/types';
import { ScrollView } from 'react-native-gesture-handler';


const Cart = ( { route } : {route: any} ) => {
  const {t} = useTranslation();
  const [tab, setTab] = useState<number>(0);
  const {mainRestaurants} = useData();
  const [products, setProducts] = useState(mainRestaurants);
  const {assets, colors, fonts, gradients, sizes, icons} = useTheme();
  const [articles, setArticles] = useState<IOrderItem[]>([]);
  const {currOrderItem, basket} = route.params;
  console.log('bello', currOrderItem)
  const [searchQuery, setSearchQuery] = React.useState('');
  const [disabled, setDisabled] = useState(() => articles.length != 0)
  
  useState(true);

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
  
  const data = useData();

  var itemsSummary = [];
  var total = 0;
  if (articles.length == 0) {
    itemsSummary.push(
      <View style={{flexDirection:'column', flex:1}}>
        <Text p bold paddingHorizontal={20}>Cart is Empty</Text>
      </View>)
  } else {
    console.log('loop')
    itemsSummary.push(
    <View style={{flexDirection:'column', flex:1}}>
      <Text p bold paddingHorizontal={20}>Order Summary</Text>
    </View>)
    for (let i = 0; i < articles.length; i++) {
      total += (articles[i].price * articles[i].quantity)
      itemsSummary.push(
        <View key={i} style={{flexDirection:'row', flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', paddingLeft: 20}}>
        <Text>{articles[i].foodTitle} x {articles[i].quantity}</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems:'flex-end', paddingRight: 20}}>
          <Text>฿{articles[i].price * articles[i].quantity}</Text>
        </View> 
        </View>
      );
    }
  }

  useEffect(() => {
    // THIS sets what articles (specific text and image) it displays
    setArticles(currOrderItem);
  }, [data.articles]);
  
  return (
    <Block>
      {console.log('articles',articles)}
    <FlatList
      data={articles}
      showsVerticalScrollIndicator={true}
      keyExtractor={(item) => item.menuitem_id}
      style={{paddingHorizontal: sizes.padding}}
      contentContainerStyle={{paddingBottom: sizes.l}}
      renderItem={({item}) => <OrderItem quantity={item.quantity} foodTitle={item.foodTitle} price={item.price} customizabletext={item.customizabletext} basket={currOrderItem} menuitem_id={item.menuitem_id}/>}
      ListFooterComponentStyle={{justifyContent: 'center', paddingTop: sizes.sm}}
      ListFooterComponent={
      <Block card style={{height: 'auto'}}>
        {itemsSummary}
      </Block>
      }
    />
    <View style={{backgroundColor:'white', borderRadius: 20, justifyContent: 'center', alignItems: 'center', flex: 1, flexDirection:'column'}}>
      <View style={{flex:1, flexDirection:'row', justifyContent: 'space-between', alignItems:'center'}}>
        <Text h5 marginLeft={30} style={{flex: 1}}>Total: </Text>  
        <Text h4 marginRight={30}>฿{total}</Text> 
      </View>
      <View style={{flex:1, justifyContent:'flex-start'}}>
      <Button disabled={disabled} color={'#FC585D'} rounded={true} height={30} width={300} style={{justifyContent:'center'}}
      onPress = {() => 
        console.log('ORDERED')
      }>
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