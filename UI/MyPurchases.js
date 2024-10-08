import React, { useReducer } from 'react';
import { View, Text, Image, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styleMyPurchases';

const statusColorReducer = (status) => {
    switch (status) {
        case 'Entregado':
            return '#4cad42'; 
        case 'En tránsito':
            return '#FFCC00';
        case 'Cancelado':
            return '#D9534F';
        default:
            return '#000';
    }
};

const MyPurchases = () => {
    const navigation = useNavigation();
    const purchases = [
        {
            id: 1,
            image: require('../images/1.jpg'),
            description: 'Café 100% Colombiano',
            status: 'Entregado',
        },
        {
            id: 2,
            image: require('../images/2.jpg'),
            description: 'Audífonos inalámbricos',
            status: 'En tránsito',
        },
        {
            id: 3,
            image: require('../images/3.jpg'),
            description: 'Arroz Blanco Grano Largo',
            status: 'Cancelado',
        },
    ];

    const [_, dispatch] = useReducer(statusColorReducer, '#000');
//status: The current value of this _
//dispatch: A function used to send (or "dispatch") actions to the reducer to update the state.
    const renderPurchaseItem = ({ item }) => {
        const color = statusColorReducer(item.status);

        return (
            <View style={styles.purchaseItem}>
                <Image source={item.image} style={styles.thumbnail} />
                <View style={styles.itemDetails}>
                    <Text style={styles.itemDescription}>{item.description}</Text>
                    <Text style={styles.itemStatus}>
                        Estado: <Text style={[styles.statusText, { color }]}>{item.status}</Text>
                    </Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.halfBackgroundLeft} />
            <View style={styles.halfBackgroundRight} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Mis Compras</Text>
            </View>

            <FlatList
                data={purchases}
                renderItem={renderPurchaseItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContent}
            />

            <View style={styles.titleContainer2}>
                <Pressable
                    style={styles.buyMoreButton}
                    onPress={() => navigation.navigate('ItemList')}
                >
                    <Text style={styles.buyMoreButtonText}>Comprar más Productos</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default MyPurchases;
