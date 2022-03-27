import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CartProductItem from '../../components/CartProductItem';
import ProductItem from '../../components/ProductItem';
import styles from './styles';

import products from '../../data/cart';
import product from '../../data/product';
import Button from '../../components/Button';

const ShoppingCartScreen = () => {

    const totalPrice = products.reduce(( summedPrice, product) => 
        summedPrice + product.item.price * product.quantity, 0,);
    

    return (
        <View style={styles.page}>
            
            <FlatList
                data={products}
                renderItem={({item}) => <CartProductItem cartItem={item}/>}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent = {() => (
                    <View>
                        <Text style={{fontSize: 16}}>
                            Subtotal ({products.length} items): 
                            <Text style={styles.priceText}>$ {totalPrice.toFixed(2)}</Text>
                        </Text>
                        <Button text={'Proceed to checkout'}
                            onPress={() => console.log('Proceed to checkOut')}
                            containerStyle={{backgroundColor: '#e47911'}}
                        />
                    </View>
                )}
            />
        </View>
    )
};

export default ShoppingCartScreen;
