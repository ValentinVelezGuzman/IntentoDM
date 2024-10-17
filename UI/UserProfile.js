import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import styles from '../styles/styleUserProfile';

const usersGroup = [
    {
        idUser: 1,
        imageUser: require('../images/imgUsers/u1.png'),
        nameUser: 'Danilo Velez',
        ageUser: 21,
    },
];

const UserProfile = () => {
    const user = usersGroup[0];
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Background split */}
            <View style={styles.quarterBackgroundLeft} />
            <View style={styles.restBackgroundRight} />

            <Card style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image source={user.imageUser} style={styles.image} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.userName}>{user.nameUser}</Text>
                    <Text style={styles.userAge}>{user.ageUser} años</Text>
                </View>
                <Pressable 
                    style={styles.button}
                    onPress={() => navigation.navigate('MyPurchases')}
                >
                    <Text style={styles.buttonText}>Mis Compras</Text>
                </Pressable>
                <Pressable 
                    style={styles.button}
                    onPress={() => navigation.navigate('Favorites')}
                >
                    <Text style={styles.buttonText}>Mis Favoritos</Text>
                </Pressable>
            </Card>
        </View>
    );
};

export default UserProfile;
