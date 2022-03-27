
import React, { useState , useCallback } from 'react';
import { View, Text, FlatList, Image, StyleSheet, useWindowDimensions } from 'react-native';

const ImageCarousel = ({ images } : {image: [string]}) => {
    const windowWidth = useWindowDimensions().width - 20; 
    const [activeIndex, setActiveIndex] = useState(0);

    const onFlatListUpdate = useCallback (({viewableItems}) => {
        if (viewableItems.length > 0){
            setActiveIndex(viewableItems[0].index || 0);
        }

    },[]);


    return (
        <View style={styles.root}>
            <FlatList 
                data={images}
                renderItem={({item}) => (
                    <Image style={[styles.image, {width: windowWidth -20}]} source={{uri: item}} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={windowWidth }
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: 50,
                }}
                onViewableItemsChanged={onFlatListUpdate}
            />
            <View style={styles.dots}>
                {images && images.map((image, index) => (
                    <View
                    key={index}
                    style={[styles.dot, {
                        backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed' 
                    }]} />
                ))}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        
    },
    image: {
        height: 250,
        resizeMode: 'contain',
        margin: 10,
    },
    dots: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#c9c9c9',
        marginHorizontal: 5,
        
    }
})
export default ImageCarousel;
