import React, {useCallback, useState} from 'react';

import {useData, useTheme, useTranslation} from '../hooks/';
import {Block, Button, Image, Input, BranchComponent, Text} from '../components/';

const Branch = () => {
  const {t} = useTranslation();
  const [tab, setTab] = useState<number>(0);
  const {branches} = useData();
  const [products, setProducts] = useState(branches);
  const {assets, colors, fonts, gradients, sizes} = useTheme();

  return (
    <Block>
      {/* products list */}
      <Block
        scroll
        paddingHorizontal={sizes.padding}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: sizes.l}}>
        <Block row wrap="wrap" justify="space-between" marginTop={sizes.sm}>
          {products?.map((product) => (
            /* Uses the Product component from components/Product.tsx */
            <BranchComponent {...product} key={`card-${product?.id}`} />
          ))}
        </Block>
      </Block>
    </Block>
  );
};

export default Branch;
