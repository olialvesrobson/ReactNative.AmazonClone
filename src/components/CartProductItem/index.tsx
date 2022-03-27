import React from 'react'
import { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Button from '../Button';
import QuantitySelector from '../QuantitySelector';
import styles from './styles';
 

interface CartProductItemProps {
    cartItem: {
        id: string;
        quantity: number;
        option?: string;
        item: {
            id: string,
            title: string,
            image: string,
            avgRating: number,
            ratings: number,
            price: number,
            oldPrice?: number,
        };
    };  
};


const CartProductItem = ({cartItem}: CartProductItemProps) => {
    const {quantity: quantityProp, item } = cartItem;
    const [quantity, setQuantity] = useState(quantityProp);

    const buttonTextStyle = {color: '#444', fontSize: 12, fontWeight: '400', padding: 5};
    return (
        <View style={styles.root}>
            <View style={styles.row}>
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
                    <Pressable onPress={() => console.log('Like')}>
                        <FontAwesome style={styles.star} name={'heart-o'}/>
                    </Pressable>
                </View>
                
            </View>
            <View style={styles.quantityContainer}>
                <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                <Button text={'Delete'} 
                    onPress={() => console.log('Delete pressed')}
                    containerStyle={{borderColor: '#c9c9c9'}}
                    textStyle={buttonTextStyle}/>
                <Button text={'Save for later'} 
                    onPress={() => console.log('Save for later pressed')}
                    containerStyle={{borderColor: '#c9c9c9'}}
                    textStyle={buttonTextStyle}
                />
            </View>
            
        </View>
    )
}

export default CartProductItem;
