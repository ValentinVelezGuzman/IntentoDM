import React, { useState } from "react";
import { View, Text, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Button } from 'react-native-paper';  // Usar el botón de React Native Paper
import styles from "../styles/styleItemDetails";
import StarsRating from "./StarsRating";

const ItemDetails = () => {
    const [raiting, setRaiting] = useState(0);
    const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);  // Estado para controlar la visibilidad

    const route = useRoute();
    const { itemData } = route.params; // Datos del producto

    return (
        <View style={styles.backgroundContainer}>
            {/* Mitad izquierda del fondo */}
            <View style={styles.halfBackgroundLeft} />
            {/* Mitad derecha del fondo */}
            <View style={styles.halfBackgroundRight} />
            {/* Contenido dentro del ScrollView */}
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
                    <Button
                        mode="elevated"
                        onPress={() => setIsFeaturesVisible(!isFeaturesVisible)}
                        rippleColor='#4cad42'
                        buttonColor="#4cad4299"
                        style={styles.elevatedButton} 
                        labelStyle={styles.buttonLabel} 
                        contentStyle={styles.buttonContent}  
                    >
                        {isFeaturesVisible ? "Ocultar Características" : "Mostrar Características"}
                    </Button>

                    {isFeaturesVisible && ( 
                        <Text style={styles.ProductFeaturesItem}>{itemData.ProductFeaturesItem}</Text>
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
                </View>

                <View style={styles.card}>
                
                </View>
            </ScrollView>
        </View>
    );
};

export default ItemDetails;
