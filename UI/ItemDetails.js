import React, { useState }from "react";
import { View, Text, Image, TextInput, Button, ScrollView, Alert} from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from "../styles/styleItemDetails";


const ItemDetails = () => {

    const route = useRoute();
    const { itemData } = route.params;

    const [question, setQuestion] = useState('');

    const handleSendQuestion = () => {
        if (question.length > 0 && question.length <= 100) {

            Alert.alert('Pregunta enviada', 'Tu pregunta ha sido enviada al vendedor.');
            setQuestion('');
        } else {
            Alert.alert('Error', 'La pregunta debe tener entre 1 y 100 caracteres.');
        }
    };

    return (
        <ScrollView>
        <View style={styles.containerP} >
            <View style={styles.container1}>
                <Image style={styles.image} source={itemData.image} />
            </View>
            <View style={styles.container1} >
                <Text style={styles.nameItem}  >{itemData.nameItem}</Text>
                <Text style={styles.categoryItem}>{itemData.category}</Text>
                <Text style={styles.priceItem}  >Precio: {itemData.price}</Text>
                {itemData.discount && (
                    <Text style={styles.discountItem}>Descuento: {itemData.discount}%</Text>
                )}
                <Text style={styles.descriptionItem} >{itemData.description}</Text>
                <Text style={styles.ProductFeaturesItem}>{itemData.ProductFeaturesItem}</Text>
                <Text style={styles.paymentMethodsTitle}>Métodos de Pago:</Text>
                <View style={styles.paymentMethodsContainer}>
                    {itemData.paymentMethods && itemData.paymentMethods.length > 0 ? (
                        itemData.paymentMethods.map((method, index) => (
                            <Text key={index} style={styles.paymentMethod}>{method}</Text>
                        ))
                    ) : (
                        <Text style={styles.paymentMethod}>No disponibles</Text>
                    )}
                </View>
                <View style={styles.questionContainer}>
                    <TextInput
                        style={styles.questionInput}
                        placeholder="Pregunta al vendedor (máx. 100 caracteres)"
                        maxLength={100}
                        value={question}
                        onChangeText={setQuestion}
                    />
                    <Button title="Enviar" onPress={handleSendQuestion} />
                </View>
            </View>
        </View>
        </ScrollView>
    );
};

export default ItemDetails;