import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { CheckBox } from './components/CheckBox';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SplashScreen = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <CheckBox
        label="Radio 1"
        checked={checked}
        onSelect={() => setChecked(!checked)}
      />
      <CheckBox
        label="Radio 1"
        checked={checked}
        onSelect={() => setChecked(!checked)}
        uncheckedIcon={<MaterialCommunityIcons name="checkbox-blank-circle-outline" color="orange" size={32} />}
        checkedIcon={<MaterialCommunityIcons name="checkbox-marked-circle" color="orange" size={32} />}
      />
      <CheckBox
        label="Radio 1"
        checked={checked}
        onSelect={() => setChecked(!checked)}
        uncheckedIcon={<MaterialCommunityIcons name="checkbox-blank-outline" color="red" size={40} />}
        checkedIcon={<MaterialCommunityIcons name="checkbox-marked" color="red" size={40} />}
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
