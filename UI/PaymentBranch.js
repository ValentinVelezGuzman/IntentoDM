import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image, FlatList, Pressable, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { CartContext } from '../hook/CartContext';
import styles from '../styles/paymentBranchStyles';
import { handleAPI } from '../api/mercadoPagoAPI';
import InAppBrowser from 'react-native-inappbrowser-reborn';

const PaymentBranch = () => {
    const { cartItems } = useContext(CartContext);
    const [totalAmount, setTotalAmount] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState('PSE');

    const handleBuyItems = async (items) => {
        if (items.length === 0) {
            Alert.alert("Carrito vacío", "No hay artículos en el carrito para proceder al pago.");
            return;
        }
        try {
            const data = await handleAPI(items);
            if (!data) {
                console.log("Error en la obtención del enlace de pago.");
                Alert.alert("Error", "Hubo un problema al procesar el pago.");
                return;
            }
            InAppBrowser.open(data);
        } catch (error) {
            console.error("Error al iniciar el proceso de pago:", error);
            Alert.alert("Error", "Ocurrió un problema al conectar con el servicio de pago.");
        }
    };

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
                <Image source={{ uri: item.image }} style={styles.thumbnail} />
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

                <Pressable 
                    style={styles.payButton} 
                    onPress={async () => await handleBuyItems(cartItems)}
                >
                    <Text style={styles.payButtonText}>Pagar MercadoPago</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default PaymentBranch;
