import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { RadioButton } from './components/RadioButton';

const SplashScreen = () => {
  const [radioValue, setRadioValue] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <RadioButton
        label="Radio 1"
        selected={radioValue}
        onSelect={()=> setRadioValue(!radioValue)}
      />
    </View>
  );
};

export default SplashScreen

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 24,
  }
})
