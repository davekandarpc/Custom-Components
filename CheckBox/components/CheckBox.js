import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Add this plugin

/* 
Please install below plugins:
    - react-native-vector-icons
*/

export const CheckBox = ({
    checked,
    labelStyle,
    onSelect,
    label,
    size,
    color,
    uncheckedIcon,
    checkedIcon
}) => {
    return (
        <TouchableOpacity style={styles.checkboxStyle} onPress={onSelect}>
            {
                checked ?
                checkedIcon ? checkedIcon :
                    <MaterialCommunityIcons name="checkbox-marked" size={size ? size : 30} color={color ? color : 'blue'} />
                    :
                    uncheckedIcon ? uncheckedIcon
                    :
                    <MaterialCommunityIcons name="checkbox-blank-outline" size={size ? size : 30} color={color ? color : 'blue'} />
            }
            {label && <Text style={[styles.labelStyle, { labelStyle }]}>{label}</Text>}
        </TouchableOpacity >
    );
};

export const styles = StyleSheet.create({
    checkboxStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelStyle: {
        marginLeft: 12
    }
})
