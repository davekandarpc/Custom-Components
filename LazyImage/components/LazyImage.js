import React, { useState } from 'react';
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native';

export const LazyImage = ({
    imageWrapper,
    imageStyle,
    source,
    loader,
    loaderColor,
    ...props
}) => {
    const [loaded, setLoaded] = useState(false);
    return (
        <View style={[styles.imageWrapper, imageWrapper]}>
            <Image
                {...props}
                source={source}
                style={[styles.imageStyle, imageStyle]}
                onLoadEnd={() => setLoaded(true)}
            />
            {
                !loaded &&
                <View style={styles.loader}>
                    {
                        loader ?
                            loader
                            :
                            <ActivityIndicator size={30} color={loaderColor ? loaderColor : "red"} />
                    }
                </View>
            }
        </View>
    );
};

export const styles = StyleSheet.create({
    imageWrapper: {
        position: 'relative',
        borderWidth: 1
    },
    loader: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageWrapper: {
        height: 100,
        width: 100
    },
    imageStyle: {
        flex: 1,
        height: undefined,
        width: undefined,
        resizeMode: 'contain'
    }
})
