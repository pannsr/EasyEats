import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';

import {useData, useTheme} from '../hooks';
import {ICategory, IMenu} from '../constants/types';
import {Block, Button, Article, Text, Menu, Image} from '../components';
import {useNavigation} from '@react-navigation/core';

const MenuPage = () => {
  const navigation = useNavigation();
  const data = useData();
  const [selected, setSelected] = useState<ICategory>();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [menus, setMenus] = useState<IMenu[]>([]);
  const {colors, gradients, sizes, icons} = useTheme();

  // init articles
  useEffect(() => {
    // THIS sets what articles (specific text and image) it displays
    setMenus(data?.menus);
    setCategories(data?.categories);
    setSelected(data?.categories[0]);
  }, [data.menus, data.categories]);

  // update articles on category change
  useEffect(() => {
    const category = data?.categories?.find(
      (category) => category?.id === selected?.id,
    );

    const newMenus = data?.menus?.filter(
      (menu) => menu?.category?.id === category?.id,
    );

    setMenus(newMenus);
  }, [data, selected, setMenus]);

  return (
    <Block>
      {/* Floating Cart Button */}
      <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 70,
            position: 'absolute',
            bottom: 30,
            right: 10,
            height: 70,
            backgroundColor: '#fff',
            borderRadius: 100,
            zIndex: 2
          }}
          onPress={() =>
            navigation.navigate('Screens', {
              screen: 'Cart',
            })
          }
      >
          <Image style={{width:60, height:60,}} source={icons.cart}/>
      </TouchableOpacity>

      {/* categories list */}
      <Block color={colors.card} row flex={0} paddingVertical={sizes.padding}>
        <Block
          scroll
          horizontal
          renderToHardwareTextureAndroid
          showsHorizontalScrollIndicator={false}
          contentOffset={{x: -sizes.padding, y: 0}}>
          {categories?.map((category) => {
            const isSelected = category?.id === selected?.id;
            return (
              <Button
                radius={sizes.m}
                marginHorizontal={sizes.s}
                key={`category-${category?.id}}`}
                onPress={() => setSelected(category)}
                gradient={gradients?.[isSelected ? 'primary' : 'light']}>
                <Text
                  p
                  bold={isSelected}
                  white={isSelected}
                  black={!isSelected}
                  transform="capitalize"
                  marginHorizontal={sizes.m}>
                  {category?.name}
                </Text>
              </Button>
            );
          })}
        </Block>
      </Block>

      {/* All the menus */}
      <FlatList
        data={menus}
        numColumns={2}
        showsVerticalScrollIndicator={true}
        keyExtractor={(item) => `${item?.id}`}
        style={{paddingHorizontal: sizes.padding}}
        contentContainerStyle={{paddingBottom: sizes.l}}
        renderItem={({item}) => 
          <Block row wrap="wrap" justify="space-between" marginTop={sizes.sm}>
            <Menu {...item} />
          </Block>
        }
      />
    </Block>

    

  );
};

export default MenuPage;
