import * as React from "react";
import { View, TextInput, Text, FlatList, Alert, Image } from "react-native";
import { Appbar, Button, Card, RadioButton, Divider } from 'react-native-paper';
import paymentBranchStyles from '../styles/paymentBranchStyles';

const PaymentBranch = ({ navigation }) => {
    const [deliveryAddress, setDeliveryAddress] = React.useState('');
    const [paymentMethod, setPaymentMethod] = React.useState('PSE');

    const items = [
        {
            id: '1',
            image: 'https://via.placeholder.com/100',
            description: 'High-quality phone case with floral design',
            price: 15.00,
            quantity: 2
        },
        {
            id: '2',
            image: 'https://via.placeholder.com/100',
            description: 'Stylish leather wallet with multiple compartments',
            price: 45.00,
            quantity: 1
        },
        {
            id: '3',
            image: 'https://via.placeholder.com/100',
            description: 'Durable backpack with laptop compartment',
            price: 60.00,
            quantity: 1
        }
    ];

    const calculateTotal = () => {
        return items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
    };

    const renderItem = ({ item }) => (
        <View style={paymentBranchStyles.itemContainer}>
            <Image source={{ uri: item.image }} style={paymentBranchStyles.itemImage} />
            <View style={paymentBranchStyles.itemDetails}>
                <Text style={paymentBranchStyles.itemDescription}>{item.description}</Text>
                <Text style={paymentBranchStyles.itemText}>${item.price.toFixed(2)}</Text>
                <Text style={paymentBranchStyles.itemText}>Qty: {item.quantity}</Text>
            </View>
        </View>
    );

    const handlePayment = () => {
        Alert.alert(
            "Payment Simulation",
            "Payment has been successfully processed!",
            [{ text: "OK", onPress: () => navigation.navigate('PaymentConfirmation') }]
        );
    };

    return (
        <View style={paymentBranchStyles.container}>
            <Appbar.Header style={paymentBranchStyles.appbar}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Payment Branch" />
            </Appbar.Header>

            <View style={paymentBranchStyles.content}>
                <FlatList
                    data={items}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={paymentBranchStyles.itemList}
                />

                <Card style={paymentBranchStyles.summaryCard}>
                    <Card.Content>
                        <Text style={paymentBranchStyles.summaryTitle}>Total:</Text>
                        <Text style={paymentBranchStyles.summaryText}>${calculateTotal()}</Text>
                    </Card.Content>
                </Card>

                <Card style={paymentBranchStyles.paymentCard}>
                    <Card.Content>
                        <Text style={paymentBranchStyles.paymentTitle}>Delivery Address:</Text>
                        <TextInput
                            style={paymentBranchStyles.inputField}
                            value={deliveryAddress}
                            onChangeText={setDeliveryAddress}
                            maxLength={30}
                            placeholder="Enter delivery address"
                        />
                        <Text style={paymentBranchStyles.paymentTitle}>Payment Method:</Text>
                        <RadioButton.Group onValueChange={value => setPaymentMethod(value)} value={paymentMethod}>
                            <View style={paymentBranchStyles.radioButton}>
                                <RadioButton
                                    value="PSE"
                                    status={paymentMethod === 'PSE' ? 'checked' : 'unchecked'}
                                    color="#0c9942"
                                />
                                <Text style={paymentBranchStyles.radioButtonText}>PSE</Text>
                            </View>
                            <View style={paymentBranchStyles.radioButton}>
                                <RadioButton
                                    value="Card"
                                    status={paymentMethod === 'Card' ? 'checked' : 'unchecked'}
                                    color="#0c9942"
                                />
                                <Text style={paymentBranchStyles.radioButtonText}>Credit Card</Text>
                            </View>
                            <View style={paymentBranchStyles.radioButton}>
                                <RadioButton
                                    value="Efecty"
                                    status={paymentMethod === 'Efecty' ? 'checked' : 'unchecked'}
                                    color="#0c9942"
                                />
                                <Text style={paymentBranchStyles.radioButtonText}>Efecty</Text>
                            </View>
                        </RadioButton.Group>
                    </Card.Content>
                </Card>

                <Button
                    mode="contained"
                    style={paymentBranchStyles.payButton}
                    onPress={handlePayment}
                >
                    Proceed to Payment
                </Button>
            </View>
        </View>
    );
};

export default PaymentBranch;