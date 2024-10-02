import React from "react";
import { View, Text, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from "../styles/styleItemDetails";

const ItemDetails = () => {
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
                    <Image style={styles.image} source={itemData.image} />
                    <Text style={styles.nameItem}>{itemData.nameItem}</Text>
                    <Text style={styles.categoryItem}>{itemData.category}</Text>
                    <Text style={styles.priceItem}>Precio: {itemData.price} {itemData.discount && (<Text style={styles.discountItem}> Ahora -{itemData.discount}%</Text>)}</Text>
                    
                    <Text style={styles.ProductFeaturesItem}>Descripción: {itemData.description}</Text>
                    <Text style={styles.ProductFeaturesItem}>{itemData.ProductFeaturesItem}</Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default ItemDetails;
