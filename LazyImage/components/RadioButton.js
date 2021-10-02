import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export const RadioButton = ({
    selected,
    outerCircleStyle,
    innerCircleStyle,
    radioLabelStyle,
    onSelect,
    label
}) => {
    return (
        <TouchableOpacity style={styles.radioButton} onPress={onSelect}>
            <View style={[styles.outerCircle, outerCircleStyle]}>
                {selected &&
                    <View style={[styles.innerCircle, { innerCircleStyle }]} />
                }
            </View>
            {label && <Text style={[styles.radioLabel, { radioLabelStyle }]}>{label}</Text>}
        </TouchableOpacity >
    );
};

export const styles = StyleSheet.create({
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    outerCircle: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerCircle: {
        height: 16,
        width: 16,
        borderRadius: 16,
        backgroundColor: 'blue'
    },
    radioLabel: {
        marginLeft: 12
    }
})
