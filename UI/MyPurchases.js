import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import styles from '../styles/styleMyPurchases';

const MyPurchases = () => {
    // Sample data for purchases
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

    const renderPurchaseItem = ({ item }) => {
        // Define the color based on the status
        const statusColor = {
            'Entregado': '#4cad42', // Green
            'En tránsito': '#FFCC00', // Yellow
            'Cancelado': '#D9534F', // Red
        }[item.status] || '#000'; // Default to black if status is unknown

        return (
            <View style={styles.purchaseItem}>
                <Image source={item.image} style={styles.thumbnail} />
                <View style={styles.itemDetails}>
                    <Text style={styles.itemDescription}>{item.description}</Text>
                    <Text style={styles.itemStatus}>
                        Estado: <Text style={[styles.statusText, { color: statusColor }]}>{item.status}</Text>
                    </Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mis Compras</Text>
            <FlatList
                data={purchases}
                renderItem={renderPurchaseItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
};

export default MyPurchases;
