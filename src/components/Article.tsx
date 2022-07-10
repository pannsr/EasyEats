import React from 'react';
import dayjs from 'dayjs';
import {TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';

import Text from './Text';
import Block from './Block';
import {useTheme, useTranslation} from '../hooks/';
import {IBlock} from '../constants/types';
import Button from './Button';
import { useNavigation } from '@react-navigation/native';

const Article = ({
  foodTitle,
  onPress,
  linkLabel,
  foodQuantity,
  price,
}: IBlock) => {
  const {t} = useTranslation();
  const {colors, gradients, icons, sizes} = useTheme();
  const navigation = useNavigation();

    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <Block card marginTop={sizes.sm} style={{flexDirection:'row'}}>
            <View style={{flex: 1, justifyContent:'center'}}>
              <Button
                onPress = {() => 
                  navigation.navigate('Screens', {
                    screen: 'Customizable'
                })}
                color={'#FC585D'} height={30} width={30}>
                <Text white bold>
                  x{foodQuantity}
                </Text>
              </Button>
            </View>
            <View style={{paddingVertical: 10, flex: 5, flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
            <View style={{flex: 3, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:10}}>
              {foodTitle && (
                <Text
                  style={{flex:100}}
                  p bold>
                  {foodTitle}
                </Text>
              )}

            {/* food price */}
            {price && (
            <Text>
              ฿{price.toString()}
            </Text>
          )}
            </View>
              {/* Edit button */}
          <TouchableOpacity style={{ alignSelf:'flex-start', paddingHorizontal:10}}
          onPress = {() => 
            navigation.navigate('Screens', {
              screen: 'Customizable'
            })
          }>
            {/* This is the text */}
            <Text
              p
              color={colors.link}
              semibold
              size={sizes.linkSize}
              style={{alignSelf: 'flex-end'}}
              marginRight={sizes.sm}
            >
              {linkLabel || t('common.edit')}
            </Text >
          </TouchableOpacity>
            </View>

          
          
          
        </Block>
      </TouchableWithoutFeedback>
    );
  }

export default Article;
