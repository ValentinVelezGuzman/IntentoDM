import React, { useState } from "react";
import { View, Text, FlatList, Image, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "../styles/styleItemList";
import itemGroup from "../arrayData/itemGroup"
import Navigation from "./Navigation";

const ItemList = () => {

    const navigation = useNavigation();

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState(itemGroup);

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query.trim() === '') {
            setFilteredItems(itemGroup);
        } else {
            const filteredData = itemGroup.filter(item => 
                item.nameItem.toLowerCase().includes(query.toLowerCase()) || item.category.toLowerCase().includes(query.toLowerCase()) 
            );
            setFilteredItems(filteredData);
        }
    };

    const ItemCard = ({ itemData }) => (

        <View style={styles.containerItem}>
            <Image style={styles.image} source={itemData.image} />
            <View style={styles.containerText} >
                <Text style={styles.nameItem} >{itemData.nameItem}</Text>
                <Text style={styles.descriptionItem} >{itemData.description}</Text>
                <Text style={styles.priceItem}  >Precio: {itemData.price}</Text>
                {itemData.discount && (<Text style={styles.discountItem}>Descuento: {itemData.discount}%</Text>)}
            </View>
            <View style={styles.containerButton} >
                <Pressable
                    style={({ pressed }) => [
                        styles.button, 
                        { backgroundColor: pressed ? '#3b8a31' : '#4cad42' } 
                    ]}
                    onPress={() => navigation.navigate('ItemDetails', { itemData })}
                >
                    <Text style={styles.buttonText}>Detalles</Text>
                </Pressable>
            </View>
        </View>
    );


    return (
        <View style={styles.containerP}>
            <View style={styles.overlay}>
                <Navigation navigation={navigation} />
            </View>
            <TextInput
                style={styles.searchBar}
                placeholder="Buscar artículos..."
                value={searchQuery}
                onChangeText={handleSearch}
            />

            <View>
                <FlatList
                    data={filteredItems}
                    renderItem={({ item }) => <ItemCard itemData={item} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    );
};


export default ItemList;


