import React from "react";
import { View, FlatList, Image, Text, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "../styles/styleItemList";
import itemGroup from "../arrayData/itemGroup";

const Offers = () => {

    const navigation = useNavigation();

    const offers = itemGroup.filter(item => item.discount && item.discount > 0);

    const ItemCard = ({ itemData }) => (
        <View style={styles.containerItem}>
            <Image style={styles.image} source={itemData.image} />
            <View style={styles.containerText}>
                <Text style={styles.nameItem}>{itemData.nameItem}</Text>
                <Text style={styles.descriptionItem}>{itemData.description}</Text>
                <Text style={styles.priceItem}>Precio: {itemData.price}</Text>
                {itemData.discount && (
                    <Text style={styles.discountItem}>Descuento: {itemData.discount}%</Text>
                )}
            </View>
            <View style={styles.containerButton}>
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
            <FlatList
                data={offers}
                renderItem={({ item }) => <ItemCard itemData={item} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default Offers;
