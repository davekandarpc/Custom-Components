import React, { useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { LazyImage } from './components/LazyImage';

const SplashScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <LazyImage
        source={{ uri: 'https://gratisography.com/wp-content/uploads/2021/09/gratisography-retro-phone-free-stock-photo-1170x780.jpg' }}
      />
      <LazyImage
        source={{ uri: 'https://gratisography.com/wp-content/uploads/2021/09/gratisography-retro-phone-free-stock-photo-1170x780.jpg' }}
        imageWrapper={styles.imageWrapper}
        imageStyle={styles.imageStyle}
        loaderColor="orange"
      />
      <LazyImage
        source={{ uri: 'https://gratisography.com/wp-content/uploads/2021/09/gratisography-retro-phone-free-stock-photo-1170x780.jpg' }}
        imageWrapper={styles.imageWrapper}
        imageStyle={styles.imageStyle}
        loader={<ActivityIndicator size={30} color={"green"} />}
      />
    </View>
  );
};

export default SplashScreen

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 24,
  },
  imageWrapper: {
    height: 150,
    width: 150
  },
  imageStyle: {
    flex: 1,
    height: undefined,
    width: undefined,
    resizeMode: 'contain'
  }
})
