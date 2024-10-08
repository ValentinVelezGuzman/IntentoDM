import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image, FlatList, Pressable } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { CartContext } from '../hook/CartContext';
import styles from '../styles/paymentBranchStyles';

const PaymentBranch = () => {
    const { cartItems } = useContext(CartContext);
    const [totalAmount, setTotalAmount] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState('PSE');

// Calculate the total whenever the items in the cart change
    useEffect(() => {
        const newTotal = cartItems.reduce((sum, item) => {
            const itemPrice = item.discount 
                ? item.price * (1 - item.discount / 100) 
                : item.price;
            return sum + itemPrice * item.quantity;
        }, 0);
        setTotalAmount(newTotal);
    }, [cartItems]);

    const renderCartItem = ({ item }) => {
        const finalPrice = item.discount
            ? item.price * (1 - item.discount / 100)
            : item.price;

        return (
            <View style={styles.cartItem}>
                <Image source={item.image} style={styles.thumbnail} />
                <View style={styles.itemDetails}>
                    <Text style={styles.itemName}>{item.nameItem}</Text>
                    <Text style={styles.itemPrice}>Precio Original: ${item.price}</Text>
                    {item.discount ? (
                        <Text style={styles.discountText}>Descuento: {item.discount}%</Text>
                    ) : null}
                    <Text style={styles.finalPriceText}>
                        Precio Final: ${finalPrice}
                    </Text>
                    <Text style={styles.quantityText}>Cantidad: {item.quantity}</Text>
                </View>
            </View>
        );
    };

    const handlePayment = () => {
        alert(`Procediendo con el pago mediante: ${paymentMethod}`);
    };

    return (
        <View style={styles.container}>
            
            <View style={styles.halfBackgroundLeft} />
            <View style={styles.halfBackgroundRight} />

            <FlatList
                data={cartItems}
                renderItem={renderCartItem}
                keyExtractor={(item) => item.id.toString()}
                style={styles.cartList}
                contentContainerStyle={styles.cartListContent}
            />

            <View style={styles.paymentSectionContainer}>
                <View style={styles.totalAmountContainer}>
                    <Text style={styles.totalAmountText}>Total a pagar: ${totalAmount}</Text>
                </View>

                <View style={styles.paymentMethodsContainer}>
                    <Text style={styles.paymentMethodsTitle}>Selecciona un método de pago:</Text>
                    <RadioButton.Group
                        onValueChange={(newValue) => setPaymentMethod(newValue)}
                        value={paymentMethod}
                    >
                        <View style={styles.paymentMethodOption}>
                            <RadioButton value="PSE" color="#4cad42" />
                            <Text style={styles.paymentMethodText}>PSE</Text>
                        </View>
                        <View style={styles.paymentMethodOption}>
                            <RadioButton value="CreditCard" color="#4cad42" />
                            <Text style={styles.paymentMethodText}>Tarjeta de Crédito</Text>
                        </View>
                        <View style={styles.paymentMethodOption}>
                            <RadioButton value="Efecty" color="#4cad42" />
                            <Text style={styles.paymentMethodText}>Efecty</Text>
                        </View>
                    </RadioButton.Group>
                </View>

                <Pressable style={styles.payButton} 
                onPress={handlePayment}>
                    <Text style={styles.payButtonText}>Pagar</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default PaymentBranch;
