import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
import QuantitySelector from '../../components/QuantitySelector';
import product from '../../data/product';
import styles from './styles';

const ProductScreen = () => {

    const [optionSelected, setOptionSelected] = useState(product.options ? product.options[0] : null);
    const [quantity, setQuantity] = useState(1);

    return (
        <ScrollView style={styles.root}>
            <Text style={styles.title}>{product.title}</Text>

            {/* Image Carousel */}
            <ImageCarousel images={product.images} />
            {/* Option Selector*/}
            <Picker
                selectedValue={optionSelected}
                onValueChange={ (itemValue) => setOptionSelected(itemValue)}
            >
                {product.options.map(option => (
                    <Picker.Item label={option} value={option} />
                ))}
            </Picker>
            
            {/* Price */}
            <Text style={styles.price}>
                {product.price}
                {product.oldPrice && (
                    <Text style={styles.oldPrice}>{
                        product.oldPrice}
                    </Text>
                )} 
                
            </Text>
            {/* Description */}
            <Text style={styles.description}>
                {product.description}
            </Text>
            {/* Quantity Selector */}
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            {/* Button */}
            <Button text={'Add to Card'} onPress={() => {console.warn('Addd to Card pressed')}} containerStyle={{backgroundColor: '#e47911'}} />
            <Button text={'Buy Now'} onPress={() => {console.warn('Buy Now pressed')}} containerStyle={{backgroundColor: '#37575a'}}/> 
            {/* */}
        </ScrollView>
    )

}

export default ProductScreen;
