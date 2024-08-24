import * as React from 'react';
import { View, FlatList, Image, Text, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native';
import { Appbar, Card, Divider } from 'react-native-paper';
import favoritesStyles from '../styles/favoritesStyles';

const Favorites = ({ navigation }) => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(null);

    const favorites = [
        {
            id: '1',
            image: 'https://via.placeholder.com/80',
            description: 'Product 1 Description',
            status: 'Available',
        },
        {
            id: '2',
            image: 'https://via.placeholder.com/80',
            description: 'Product 2 Description',
            status: 'Unavailable',
        },
        {
            id: '3',
            image: 'https://via.placeholder.com/80',
            description: 'Product 3 Description',
            status: 'Available',
        },
    ];

    const handleItemPress = (item) => {
        setSelectedItem(item);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setSelectedItem(null);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleItemPress(item)}>
            <Card style={favoritesStyles.card}>
                <View style={favoritesStyles.cardContent}>
                    <Image source={{ uri: item.image }} style={favoritesStyles.cardImage} />
                    <View style={favoritesStyles.textContainer}>
                        <Text style={favoritesStyles.description}>{item.description}</Text>
                        <Text style={favoritesStyles.status}>{item.status}</Text>
                    </View>
                </View>
                <Divider />
            </Card>
        </TouchableOpacity>
    );

    return (
        <View style={favoritesStyles.container}>
            <Appbar.Header style={favoritesStyles.appbar}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="My Favorites" />
            </Appbar.Header>
            
            <FlatList
                data={favorites}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={favoritesStyles.listContainer}
            />

            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={handleCloseModal}
            >
                <View style={favoritesStyles.modalContainer}>
                    <View style={favoritesStyles.modalContent}>
                        {selectedItem && (
                            <>
                                <Image source={{ uri: selectedItem.image }} style={favoritesStyles.modalImage} />
                                <Text style={favoritesStyles.modalTitle}>{selectedItem.description}</Text>
                                <Text style={favoritesStyles.modalStatus}>Status: {selectedItem.status}</Text>
                                <Button title="Close" onPress={handleCloseModal} color="red" />
                            </>
                        )}
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Favorites;