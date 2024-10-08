import { Text, Pressable, ScrollView } from 'react-native';
import React from 'react';
import styles from '../styles/styleNavegation';

export default function Navigation({ navigation }) {
  return (
    <ScrollView style={styles.container1} horizontal>
      <Pressable 
        style={styles.boton1} 
        onPress={() => navigation.navigate('ItemList')}>
        <Text style={styles.botonText1}>Articulos</Text>
      </Pressable>
      <Pressable 
        style={styles.boton1} 
        onPress={() => navigation.navigate('Category')}>
        <Text style={styles.botonText1}>Categoria</Text>
      </Pressable>
      <Pressable 
        style={styles.boton1} 
        onPress={() => navigation.navigate('Offers')}>
        <Text style={styles.botonText1}>Ofertas</Text>
      </Pressable>
      <Pressable 
        style={styles.boton1} 
        onPress={() => navigation.navigate('ShoppingCar')}>
        <Text style={styles.botonText1}>Carrito</Text>
      </Pressable>
      <Pressable 
        style={styles.boton1} 
        onPress={() => navigation.navigate('PaymentBranch')}>
        <Text style={styles.botonText1}>Sucursal</Text>
      </Pressable>
      <Pressable 
        style={styles.boton1} 
        onPress={() => navigation.navigate('MyPurchases')}>
        <Text style={styles.botonText1}>Compras</Text>
      </Pressable>
      <Pressable 
        style={styles.boton1} 
        onPress={() => navigation.navigate('Favorites')}>
        <Text style={styles.botonText1}>Favoritos</Text>
      </Pressable>
      <Pressable 
        style={styles.boton1} 
        onPress={() => navigation.navigate('UserProfile')}>
        <Text style={styles.botonText1}>Perfil</Text>
      </Pressable>
      <Pressable 
        style={styles.boton1} 
        onPress={() => navigation.navigate('Help')}>
        <Text style={styles.botonText1}>PQRS</Text>
      </Pressable>

    </ScrollView>
  );
}