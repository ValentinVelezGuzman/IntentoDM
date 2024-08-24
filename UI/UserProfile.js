import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
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

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={user.imageUser} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.userName}>{user.nameUser}</Text>
          <Text style={styles.userAge}>{user.ageUser} años</Text>
        </View>
      </Card>
    </View>
  );
};

export default UserProfile;