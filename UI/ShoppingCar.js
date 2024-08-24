import * as React from "react";
import { View, FlatList, Dimensions } from "react-native";
import { Appbar, Button, Card, Text, RadioButton, IconButton, TextInput } from 'react-native-paper';
import styles from '../styles/shoppinStyles';

const { width } = Dimensions.get('window');

const ShoppingCar = ({ navigation }) => {
    const [paymentMethod, setPaymentMethod] = React.useState('PSE');
    const [items, setItems] = React.useState([
        {
            id: '1',
            title: 'Artículo 1',
            description: 'Descripción breve del artículo 1',
            price: 200, // Aquí el precio debe ser numérico
            quantity: 1,
            image: 'https://via.placeholder.com/100'
        },
        // Puedes agregar más ítems aquí
    ]);

    const [additionalFields, setAdditionalFields] = React.useState({
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        pseId: '',
        pseToken: ''
    });

    const calculateTotal = () => {
        return items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
    };

    const handleQuantityChange = (id, quantity) => {
        setItems(items.map(item =>
            item.id === id
                ? { ...item, quantity: Math.min(Math.max(parseInt(quantity) || 1, 1), 99) }
                : item
        ));
    };

    const handleRemoveItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const handleInputChange = (field, value) => {
        setAdditionalFields(prevState => ({ ...prevState, [field]: value }));
    };

    const handlePayment = () => {
        navigation.navigate('PaymentBranch');
    };

    const renderItem = ({ item }) => {
        // Limita el precio a un máximo de 8 dígitos
        const formattedPrice = item.price.toString().slice(0, 8);

        return (
            <Card style={styles.card}>
                <Card.Cover source={{ uri: item.image }} style={styles.cardImage} />
                <Card.Content>
                    <Text variant="titleLarge">{item.title}</Text>
                    <Text>{item.description}</Text>
                    <View style={styles.row}>
                        <Text>Valor:</Text>
                        <Text>${formattedPrice}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text>Cantidad:</Text>
                        <TextInput
                            style={styles.quantityInput}
                            keyboardType="numeric"
                            value={item.quantity.toString()}
                            onChangeText={(text) => handleQuantityChange(item.id, text)}
                        />
                        <IconButton
                            icon="delete"
                            color="red"
                            size={20}
                            onPress={() => handleRemoveItem(item.id)}
                        />
                    </View>
                </Card.Content>
            </Card>
        );
    };

    return (
        <View style={styles.container}>
            <Appbar.Header style={styles.appbar}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Shopping Cart" />
            </Appbar.Header>
            <FlatList
                data={items}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.flatListContent}
            />
            <View style={styles.additionalContent}>
                <Card style={styles.paymentCard}>
                    <Card.Content>
                        <Text style={styles.paymentTitle}>Payment Method:</Text>
                        <RadioButton.Group onValueChange={value => setPaymentMethod(value)} value={paymentMethod}>
                            <View style={styles.radioButton}>
                                <RadioButton
                                    value="PSE"
                                    status={paymentMethod === 'PSE' ? 'checked' : 'unchecked'}
                                    color="#0c9942"
                                />
                                <Text style={styles.radioButtonText}>PSE</Text>
                            </View>
                            <View style={styles.radioButton}>
                                <RadioButton
                                    value="Card"
                                    status={paymentMethod === 'Card' ? 'checked' : 'unchecked'}
                                    color="#0c9942"
                                />
                                <Text style={styles.radioButtonText}>Card</Text>
                            </View>
                        </RadioButton.Group>
                        {paymentMethod === 'Card' && (
                            <View style={styles.additionalFields}>
                                <TextInput
                                    label="Card Number"
                                    value={additionalFields.cardNumber}
                                    onChangeText={(text) => handleInputChange('cardNumber', text)}
                                    style={styles.inputField}
                                    keyboardType="numeric"
                                />
                                <TextInput
                                    label="Expiration Date"
                                    value={additionalFields.expirationDate}
                                    onChangeText={(text) => handleInputChange('expirationDate', text)}
                                    style={styles.inputField}
                                    keyboardType="numeric"
                                />
                                <TextInput
                                    label="CVV"
                                    value={additionalFields.cvv}
                                    onChangeText={(text) => handleInputChange('cvv', text)}
                                    style={styles.inputField}
                                    keyboardType="numeric"
                                />
                            </View>
                        )}
                        {paymentMethod === 'PSE' && (
                            <View style={styles.additionalFields}>
                                <TextInput
                                    label="PSE ID"
                                    value={additionalFields.pseId}
                                    onChangeText={(text) => handleInputChange('pseId', text)}
                                    style={styles.inputField}
                                    keyboardType="numeric"
                                />
                                <TextInput
                                    label="PSE Token"
                                    value={additionalFields.pseToken}
                                    onChangeText={(text) => handleInputChange('pseToken', text)}
                                    style={styles.inputField}
                                />
                            </View>
                        )}
                    </Card.Content>
                </Card>

                <Card style={styles.summaryCard}>
                    <Card.Content>
                        <Text style={styles.summaryTitle}>Summary</Text>
                        <View style={styles.summaryRow}>
                            <Text>Total</Text>
                            <Text style={styles.summaryText}>${calculateTotal()}</Text>
                        </View>
                    </Card.Content>
                </Card>

                <Button
                    mode="contained"
                    style={styles.payButton}
                    onPress={handlePayment}
                >
                    Make Payment
                </Button>
            </View>
        </View>
    );
};

export default ShoppingCar;