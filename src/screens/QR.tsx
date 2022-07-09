import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {useNavigation} from '@react-navigation/core';
import { Block, Image } from '../components';
import {useTheme} from '../hooks';

import { Dimensions } from 'react-native';

export default function QR() {
  const screenHeight = Dimensions.get('screen').height;
  const screenWidth = Dimensions.get('screen').width;
  const {icons, assets} = useTheme();
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data } : {type:any, data:any}) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container} >
        <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
        >
            <View style={{justifyContent:'center', alignItems:'center', flex: 1}} >
                <Image width={300} height={300} radius={0} source={assets.qrscanner} />
            </View>

        </BarCodeScanner>
        <Block style={{justifyContent: 'flex-end', marginHorizontal: (screenWidth * (3/4)) - 35, marginTop: screenHeight * (6/7)}}>
            <TouchableOpacity
                style={{
                borderWidth: 3,
                borderColor: 'rgba(0,0,0,10)',
                alignItems: 'center',
                justifyContent: 'center',
                width: 70,
                height: 70,
                backgroundColor: '#fff',
                borderRadius: 100,
                zIndex: 2,
                }}  
                onPress={() =>
                navigation.navigate('Screens', {
                    screen: 'Home',
                })
                }
            >
                <Image style={{width: 35, height: 35}} radius={0} source={icons.cancel}/>
            </TouchableOpacity>
        </Block>
        <Block style={{ justifyContent: 'flex-end', marginHorizontal: (screenWidth * (1/4)) - 35, marginBottom: screenHeight * (1/7)}}>
            <TouchableOpacity
                style={{
                borderWidth: 3,
                borderColor: 'rgba(0,0,0,10)',
                alignItems: 'center',
                justifyContent: 'center',
                width: 70,
                height: 70,
                backgroundColor: '#fff',
                borderRadius: 100,
                zIndex: 2,
                }}
                
                onPress={() => {
                    if(scanned) {
                        setScanned(false);
                    }
                }
            }
            >
                <Image style={{width: 35, height: 35}} radius={0} source={icons.reload}/>
            </TouchableOpacity>
        </Block>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});