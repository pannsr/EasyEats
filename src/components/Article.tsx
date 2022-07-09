import React from 'react';
import dayjs from 'dayjs';
import {TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

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
        <Block card padding={sizes.sm} marginTop={sizes.sm}>
          {/* article description */}
          {foodTitle && (
            <Text
              p
              marginTop={sizes.s}
              marginLeft={sizes.xs}
              marginBottom={sizes.sm}>
              {foodTitle}
            </Text>
          )}
          {price && (
            <Text
              p
              marginTop={sizes.xs}
              marginLeft={sizes.xs}
              marginBottom={sizes.xs}>
              {price.toString()}
            </Text>
          )}
          <Button gradient={gradients.success} height={30} width={30} position="absolute" right={10} top={8}>
            <Text white bold>
              x{foodQuantity}
            </Text>
          </Button>
          <TouchableOpacity 
          onPress = {() => 
            navigation.navigate('Screens', {
              screen: 'Branch'
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
        </Block>
      </TouchableWithoutFeedback>
    );
  }

export default Article;
