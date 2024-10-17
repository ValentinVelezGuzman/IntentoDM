import React, { useReducer, useContext } from "react";
import { View, Text, Image, ScrollView, Alert, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';//to get navigation parameters.
import { Button, RadioButton } from 'react-native-paper';  
import styles from "../styles/styleItemDetails";
import StarsRating from "./StarsRating";
import { CartContext } from '../hook/CartContext';//context used to add items to the shopping cart.

const initialState = {
    raiting: 0,
    isFeaturesVisible: false,
    paymentMethod: '',
    showPaymentMethods: false,
    newComment: '',
    showCommentInput: false,
    question: '',
    showQuestionInput: false,
};

// current state and an action, and returns a new state depending on the action
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_RAITING': //updates the rating with the value provided in action.payload
            return { ...state, raiting: action.payload };
        case 'TOGGLE_FEATURES':
            return { ...state, isFeaturesVisible: !state.isFeaturesVisible };
        case 'TOGGLE_PAYMENT_METHODS':
            return {
                ...state,
                showPaymentMethods: !state.showPaymentMethods,
                paymentMethod: !state.showPaymentMethods ? '' : state.paymentMethod, //Ternary operator
            }; //state, showPyment es la condicion, entonces, si showpaymnet es True, la cambia a false, y si es false, cambia el estado (valor_si_verdadero : valor_si_falso)
        case 'SET_PAYMENT_METHOD':
            return { ...state, paymentMethod: action.payload };
        case 'SET_NEW_COMMENT':
            return { ...state, newComment: action.payload };
        case 'TOGGLE_COMMENT_INPUT':
            return { ...state, showCommentInput: !state.showCommentInput };
        case 'SET_QUESTION':
            return { ...state, question: action.payload };
        case 'TOGGLE_QUESTION_INPUT':
            return { ...state, showQuestionInput: !state.showQuestionInput };
        default:
            return state;
    }
};


const ItemDetails = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const route = useRoute();
    const { itemData } = route.params;
    const { addToCart } = useContext(CartContext);

    const handleCommentButtonClick = () => {
        let message = itemData.comments.length > 0
            ? itemData.comments.join('\n\n')
            : 'No hay comentarios para este artículo.';
        Alert.alert(
            "Comentarios",
            message,
            [
                { text: "Cerrar", style: "cancel" },
                { text: "+", onPress: () => dispatch({ type: 'TOGGLE_COMMENT_INPUT' }) },
            ],
            { cancelable: true }
        );
    };

    const handleAddComment = () => {
        if (state.newComment.length === 0) {
            Alert.alert("El comentario no puede estar vacío.");
            return;
        }
        if (state.newComment.length > 200) {
            Alert.alert("El comentario no puede tener más de 200 caracteres.");
            return;
        }
        itemData.comments.push(state.newComment);
        dispatch({ type: 'SET_NEW_COMMENT', payload: '' });
        dispatch({ type: 'TOGGLE_COMMENT_INPUT' });
        Alert.alert("Comentario agregado con éxito.");
    };

    const handleCancelComment = () => {
        dispatch({ type: 'SET_NEW_COMMENT', payload: '' });
        dispatch({ type: 'TOGGLE_COMMENT_INPUT' });
        Alert.alert("Creación de comentario cancelada.");
    };
//Question View
    const handleAskButtonClick = () => { //input visibility
        dispatch({ type: 'TOGGLE_QUESTION_INPUT' });
    };

    const handleSendQuestion = () => {
        if (state.question.length === 0) {
            Alert.alert("La pregunta no puede estar vacía.");
            return;
        }
        dispatch({ type: 'SET_QUESTION', payload: '' });
        dispatch({ type: 'TOGGLE_QUESTION_INPUT' });
        Alert.alert("Tu pregunta ha sido enviada.");
    };

    const handleCancelQuestion = () => {
        dispatch({ type: 'SET_QUESTION', payload: '' });
        dispatch({ type: 'TOGGLE_QUESTION_INPUT' });
        Alert.alert("Pregunta cancelada.");
    };

    const handleAddToCart = () => {
        if (!state.paymentMethod) {
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
                            onPress={() => dispatch({ type: 'TOGGLE_PAYMENT_METHODS' })}
                        >
                            <Text style={styles.TextButtonMenu}>
                                {state.showPaymentMethods ? "Ocultar" : "Comprar"}
                            </Text>
                        </Button>
                        <Button
                            mode="contained"
                            buttonColor="#4cad42"
                            style={styles.gridButton} 
                            onPress={() => dispatch({ type: 'TOGGLE_FEATURES' })}
                        >
                            {state.isFeaturesVisible ? "Ocultar" : "Características"} 
                        </Button>
                    </View>

                    {state.isFeaturesVisible && (
                        <Text style={styles.ProductFeaturesItem}>{itemData.ProductFeaturesItem}</Text>
                    )}

                    {state.showPaymentMethods && (
                        <View>
                            <View style={styles.paymentMethodsContainer}>
                                <Text style={styles.paymentMethodsTitle}>Selecciona tu método de pago:</Text>
                                <RadioButton.Group
                                    onValueChange={newValue => dispatch({ type: 'SET_PAYMENT_METHOD', payload: newValue })}
                                    value={state.paymentMethod}
                                >
                                    {itemData.paymentMethods.map((method, index) => (
                                        <View style={styles.paymentMethodOption} key={index}>
                                            <RadioButton value={method.toLowerCase()} color="#4cad42" />
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
                                    onPress={handleAddToCart}
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
                                    onPressFuntion={() => dispatch({ type: 'SET_RAITING', payload: starNumber })}
                                    star={state.raiting < starNumber ? "staro" : "star"}
                                />
                            ))}
                        </View>
                    </View>

                    {state.showCommentInput && (
                        <View>
                            <TextInput
                                style={styles.inputComment}
                                placeholder="Escribe tu comentario (máx. 200 caracteres)"
                                value={state.newComment}
                                onChangeText={(text) => dispatch({ type: 'SET_NEW_COMMENT', payload: text })}
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

                    {state.showQuestionInput && (
                        <View>
                            <TextInput
                                style={styles.inputComment}
                                placeholder="Escribe tu pregunta"
                                value={state.question}
                                onChangeText={(text) => dispatch({ type: 'SET_QUESTION', payload: text })}
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
