import React from 'react'
import { View, Text, Image } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
 

interface ProductItemProps {
    item: {
        id: string,
        title: string,
        image: string,
        avgRating: number,
        ratings: number,
        price: number,
        oldPrice?: number,
    };
}


const ProductItem = ({item}: ProductItemProps) => {
    
    return (
        <View style={styles.root}>
                <Image style={styles.image} 
                    source={{
                        uri: item.image}}></Image>

                <View style={styles.rightContainer}>
                    <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
                    <View style={styles.ratingContainer}>
                        {
                            //"star" or "star-o" or "star-half-full"
                            [1,2,3,4,5].map( (el, i) => (
                                <FontAwesome style={styles.star} 
                                name={ el <= Math.fround(item.avgRating)  ? "star" : el > (item.avgRating) && el < (item.avgRating) + 1 ? "star-half-full" : "star-o"} size={18} color="#e47911" 
                                key={`${item.id}-${i}`}
                                />
                            ))
                        }
                         

                        <Text>{item.ratings}</Text>
                    </View>
                    <Text style={styles.price}>
                        {item.price}
                        {item.oldPrice && (
                            <Text style={styles.oldPrice}>{item.oldPrice}</Text>
                        )} 
                        
                    </Text>
                </View>
            </View>
    )
}

export default ProductItem
