import React from "react";
import { View, Text, SectionList, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import stylesC from "../styles/stylesCategory";
import styles from "../styles/styleItemList";
import itemGroup from "../arrayData/itemGroup";
import Navigation from "./Navigation";

const CategoryList = () => {

    const navigation = useNavigation();

    const categories = itemGroup.reduce((sections, item) => {
        const section = sections.find(sec => sec.title === item.category);
        if (section) {
            section.data.push(item);
        } else {
            sections.push({ title: item.category, data: [item] });
        }
        return sections;
    }, []);

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
            <View style={styles.overlay}>
                <Navigation navigation={navigation} />
            </View>
            <SectionList
                sections={categories}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <ItemCard itemData={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={stylesC.sectionHeader}>{title}</Text>
                )}
            />
        </View>
    );
};

export default CategoryList;
