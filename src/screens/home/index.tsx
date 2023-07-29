import { View, StyleSheet, Dimensions } from 'react-native'
import { useKeepAwake } from '@sayem314/react-native-keep-awake';
import React from 'react'
import Clock from '../../component/Clock'
import { StatusBar } from 'react-native';


export default function Home() {
  useKeepAwake();
  return (
    <View style={[styles.fullScreen]}>
      <StatusBar hidden={true} />
      <Clock />
    </View>
  )
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
