import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333',
        textAlign: 'center',
    },
    listContent: {
        paddingBottom: 20,
    },
    purchaseItem: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    thumbnail: {
        width: 80,
        height: 80,
        marginRight: 10,
    },
    itemDetails: {
        flex: 1,
        justifyContent: 'center',
    },
    itemDescription: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
    },
    itemStatus: {
        fontSize: 14,
        color: '#666',
    },
    statusText: {
        fontWeight: 'bold',
    },
});

export default styles;
