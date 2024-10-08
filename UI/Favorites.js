import React from 'react';
import { View, Text, Image, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/favoritesStyles';
import usersGroup from '../arrayData/usersGroup';
import itemGroup from '../arrayData/itemGroup';

const MyFavorites = () => {
    const navigation = useNavigation();


    const loggedInUser = usersGroup.find(user => user.isLoggedIn);

    if (!loggedInUser) {
        return (
            <View style={styles.container}>
                <Text style={styles.noUserText}>Por favor, inicia sesión para ver tus favoritos.</Text>
            </View>
        );
    }

    const favoriteItemIds = loggedInUser.favorites || [];

    const favoriteItems = favoriteItemIds.map((itemId) => {
        const itemDetails = itemGroup.find((item) => item.id === itemId);
        return {
            ...itemDetails,
            status: itemDetails ? 'Disponible' : 'No disponible',
        };
    });

    const renderFavoriteItem = ({ item }) => {
        const statusColor = {
            'Disponible': '#4cad42',
            'No disponible': '#D9534F', 
        }[item.status] || '#000'; 

        return (
            <View style={styles.favoriteItem}>
                <Image source={item.image} style={styles.thumbnail} />
                <View style={styles.itemDetails}>
                    <Text style={styles.nameItem}>{item.nameItem}</Text>
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

            <View style={styles.halfBackgroundLeft} />
            <View style={styles.halfBackgroundRight} />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Mis Favoritos</Text>
            </View>

            <FlatList
                data={favoriteItems}
                renderItem={renderFavoriteItem}
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

export default MyFavorites;
