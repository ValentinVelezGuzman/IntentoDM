import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../hook/CartContext';
import styles from '../styles/styleShoppingCar';

const ShoppingCar = () => {
    const { cartItems, updateItemQuantity, removeItem } = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigation = useNavigation();

    const handleNavigateToPayment = () => {
        navigation.navigate('PaymentBranch');
    };

    useEffect(() => {
        const newTotal = cartItems.reduce((sum, item) => {
            const itemPrice = item.discount 
                ? item.price * (1 - item.discount / 100) 
                : item.price;
            return sum + itemPrice * item.quantity;
        }, 0);
        setTotalPrice(newTotal);
    }, [cartItems]);

    const handleQuantityChange = (item, newQuantity) => {
        updateItemQuantity(item.id, newQuantity);
    };

    const renderCartItem = ({ item }) => (
        <View style={styles.cartItem}>
            <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.thumbnail} />
            </View>
            <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.nameItem}</Text>
                <Text style={styles.itemPrice}>Precio: ${item.price}</Text>
                {item.discount ? (
                    <>
                        <Text style={styles.discountText}>
                            Descuento: {item.discount}%
                        </Text>
                        <Text style={styles.finalPriceText}>
                            Precio final: ${item.price * (1 - item.discount / 100)}
                        </Text>
                    </>
                ) : null}
            </View>
            <View style={styles.quantityContainer}>
                <View style={styles.quantityContainer2}>
                    <Pressable 
                        style={styles.quantityButton} 
                        onPress={() => handleQuantityChange(item, item.quantity - 1)}
                    >
                        <Text style={styles.quantityButtonText}>-</Text>
                    </Pressable>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <Pressable 
                        style={styles.quantityButton} 
                        onPress={() => handleQuantityChange(item, item.quantity + 1)}
                    >
                        <Text style={styles.quantityButtonText}>+</Text>
                    </Pressable>
                </View>
                <Pressable onPress={() => removeItem(item.id)} style={styles.deleteButton}>
                    <Text style={styles.deleteButtonText}>Eliminar</Text>
                </Pressable>
            </View>
        </View>
    );

    return (
        <View style={styles.backgroundContainer}>
            <View style={styles.halfBackgroundLeft} />
            <View style={styles.halfBackgroundRight} />
            <View style={styles.container}>
                {/* Top Bar: Shows Total Price and "Make Payment" button */}
                <View style={styles.addMoreProductsContainer}>
                    <Pressable
                        style={styles.addMoreButton}
                        onPress={() => alert('Regresar a la tienda para agregar más productos')}
                    >
                        <Text style={styles.addMoreButtonText}>Agregar Más Productos</Text>
                    </Pressable>
                </View>


                {/* List of Products */}
                <FlatList
                    data={cartItems}
                    renderItem={renderCartItem}
                    keyExtractor={(item) => item.id.toString()}
                    style={styles.cartList}
                />

                {/* Button to Add More Products */}
                <View style={styles.topBar}>
                    <Text style={styles.totalText}>Total a pagar: ${totalPrice}</Text>
                    {cartItems.length > 0 && (
                        <Pressable style={styles.paymentButton} onPress={handleNavigateToPayment}>
                        <Text style={styles.paymentButtonText}>Realizar Pago</Text>
                    </Pressable>
                    )}
                </View>
            </View>
        </View>
    );
};

export default ShoppingCar;
