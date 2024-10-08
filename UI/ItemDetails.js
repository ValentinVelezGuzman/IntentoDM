import React, { useState, useContext } from "react";
import { View, Text, Image, ScrollView, Alert, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Button, RadioButton } from 'react-native-paper';  
import styles from "../styles/styleItemDetails";
import StarsRating from "./StarsRating";
import { CartContext } from '../hook/CartContext';

const ItemDetails = () => {
    const [raiting, setRaiting] = useState(0);
    const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);  
    const [paymentMethod, setPaymentMethod] = useState(''); 
    const [showPaymentMethods, setShowPaymentMethods] = useState(false); 
    const [newComment, setNewComment] = useState(''); 
    const [showCommentInput, setShowCommentInput] = useState(false); 
    const [question, setQuestion] = useState(''); 
    const [showQuestionInput, setShowQuestionInput] = useState(false);

    const route = useRoute();
    const { itemData } = route.params;
    const { addToCart } = useContext(CartContext);

    const handleCommentButtonClick = () => {
        let message = '';
        if (itemData.comments.length === 0) {
            message = 'No hay comentarios para este artículo.';
        } else {
            message = itemData.comments.join('\n\n');
        }

        Alert.alert(
            "Comentarios",
            message,
            [
                {
                    text: "Cerrar",
                    style: "cancel",
                },
                {
                    text: "+",
                    onPress: () => setShowCommentInput(true),
                }
            ],
            { cancelable: true }
        );
    };

    const handleAddComment = () => {
        if (newComment.length === 0) {
            Alert.alert("El comentario no puede estar vacío.");
            return;
        }
        if (newComment.length > 200) {
            Alert.alert("El comentario no puede tener más de 200 caracteres.");
            return;
        }
        itemData.comments.push(newComment);
        setNewComment('');
        setShowCommentInput(false);
        Alert.alert("Comentario agregado con éxito.");
    };

    const handleCancelComment = () => {
        setNewComment('');
        setShowCommentInput(false);
        Alert.alert("Creación de comentario cancelada.");
    };

    const handleTogglePaymentMethods = () => {
        if (showPaymentMethods) {
            setPaymentMethod('');
        }
        setShowPaymentMethods(!showPaymentMethods);
    };

    const handleAskButtonClick = () => {
        setShowQuestionInput(true); 
    };

    const handleSendQuestion = () => {
        if (question.length === 0) {
            Alert.alert("La pregunta no puede estar vacía.");
            return;
        }
        setQuestion(''); 
        setShowQuestionInput(false);
        Alert.alert("Tu pregunta ha sido enviada.");
    };

    const handleCancelQuestion = () => {
        setQuestion(''); 
        setShowQuestionInput(false);
        Alert.alert("Pregunta cancelada.");
    };

    const handleAddToCart = () => {
        if (!paymentMethod) {
            Alert.alert("Debes seleccionar un metodo de pago");
            return;
        }
        addToCart(itemData);
        Alert.alert("Articulo enviado a Carrito de compras");
    };
    

    return (
        <View style={styles.backgroundContainer}>
            <View style={styles.halfBackgroundLeft} />
            <View style={styles.halfBackgroundRight} />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.card}>
                    <View style={styles.starsContainer}>
                        <Image style={styles.image} source={itemData.image} />
                    </View>
                    <Text style={styles.nameItem}>{itemData.nameItem}</Text>
                    <Text style={styles.categoryItem}>{itemData.category}</Text>
                    <Text style={styles.priceItem}>
                        <Text style={{ fontWeight: 'bold' }}>Precio: </Text>
                        {itemData.price} 
                        <Text style={{ fontWeight: 'bold' }}>$</Text>
                        {itemData.discount && (
                            <Text style={styles.discountItem}> Ahora -{itemData.discount}%</Text>
                        )}
                    </Text>
                    <Text style={styles.ProductFeaturesItem}>
                        <Text style={{ fontWeight: 'bold' }}>Descripción: </Text>
                        {itemData.description}
                    </Text>

                    <View style={styles.buttonsGridContainer}>
                        <Button
                            mode="contained"
                            buttonColor="#4cad42"
                            style={styles.gridButton}
                            onPress={handleCommentButtonClick} 
                        >
                            <Text style={styles.TextButtonMenu}>Comentarios</Text>
                        </Button>

                        <Button
                            mode="contained"
                            buttonColor="#4cad42"
                            style={styles.gridButton}
                            onPress={handleAskButtonClick}
                        >
                            <Text style={styles.TextButtonMenu}>Preguntar</Text>
                        </Button>

                        <Button
                            mode="contained"
                            buttonColor='#99c454'
                            style={styles.gridButton}
                            onPress={handleTogglePaymentMethods}
                        >
                            <Text style={styles.TextButtonMenu}>
                                {showPaymentMethods ? "Ocultar" : "Comprar"}
                            </Text>
                        </Button>
                        
                        <Button
                            mode="contained"
                            buttonColor="#4cad42"
                            style={styles.gridButton} 
                            labelStyle={styles.TextButtonMenu}                       
                            onPress={() => setIsFeaturesVisible(!isFeaturesVisible)}
                        >
                            {isFeaturesVisible ? "Ocultar" : "Características"} 
                        </Button>
                    </View>

                    {isFeaturesVisible && ( 
                        <Text style={styles.ProductFeaturesItem}>{itemData.ProductFeaturesItem}</Text>
                    )}

                    {showPaymentMethods && (
                        <View>
                            <View style={styles.paymentMethodsContainer}>
                                <Text style={styles.paymentMethodsTitle}>Selecciona tu método de pago:</Text>
                                <RadioButton.Group
                                    onValueChange={newValue => setPaymentMethod(newValue)}
                                    value={paymentMethod}
                                >
                                    {itemData.paymentMethods.map((method, index) => (
                                        <View style={styles.paymentMethodOption} key={index}>
                                            <RadioButton value={method.toLowerCase()} color="#4cad42"/>
                                            <Text style={styles.categoryItem}>{method}</Text>
                                        </View>
                                    ))}
                                </RadioButton.Group>
                            </View>
                            <View style={styles.ButtonCar}> 
                                <Button
                                    mode="contained"
                                    buttonColor="#4cad42"
                                    style={styles.gridButton} 
                                    onPress={handleAddToCart} // Use the new function
                                >
                                    <Text style={styles.TextButtonMenu}>Enviar al Carrito</Text>
                                </Button>
                            </View> 
                        </View>
                    )}

                    <View style={styles.starsContainer}>
                        <Text style={styles.ratingText}>Puntúa este producto</Text>
                        <View style={styles.starsRow}>
                            {[1, 2, 3, 4, 5].map((starNumber) => (
                                <StarsRating
                                    key={starNumber}
                                    onPressFuntion={() => { setRaiting(starNumber) }}
                                    star={raiting < starNumber ? "staro" : "star"}
                                />
                            ))}
                        </View>
                    </View>

                    {showCommentInput && (
                        <View>
                            <TextInput
                                style={styles.inputComment}
                                placeholder="Escribe tu comentario (máx. 200 caracteres)"
                                value={newComment}
                                onChangeText={setNewComment}
                                maxLength={200}
                            />
                            <View style={styles.commentButtonContainer}>
                                <Button
                                    mode="contained"
                                    buttonColor="#4cad42"
                                    onPress={handleAddComment}
                                >
                                    Enviar
                                </Button>
                                <Button
                                    mode="contained"
                                    buttonColor="#d9534f"
                                    onPress={handleCancelComment}
                                    style={styles.cancelButton}
                                >
                                    Cancelar
                                </Button>
                            </View>
                        </View>
                    )}

                    {showQuestionInput && (
                        <View>
                            <TextInput
                                style={styles.inputComment}
                                placeholder="Escribe tu pregunta"
                                value={question}
                                onChangeText={setQuestion}
                            />
                            <View style={styles.commentButtonContainer}>
                                <Button
                                    mode="contained"
                                    buttonColor="#4cad42"
                                    onPress={handleSendQuestion}
                                >
                                    Enviar Pregunta
                                </Button>
                                <Button
                                    mode="contained"
                                    buttonColor="#d9534f"
                                    onPress={handleCancelQuestion}
                                    style={styles.cancelButton}
                                >
                                    Cancelar Pregunta
                                </Button>
                            </View>
                        </View>
                    )}
                </View>        
            </ScrollView>
        </View>
    );
};

export default ItemDetails;
