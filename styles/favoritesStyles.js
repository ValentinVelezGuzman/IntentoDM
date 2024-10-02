import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const favoritesStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    appbar: {
        backgroundColor: '#0c9942',
    },
    listContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    card: {
        marginVertical: 8,
        padding: 8,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: '#f9f9f9',
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    status: {
        fontSize: 14,
        color: '#888888',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: width * 0.9,
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    modalImage: {
        width: 120,
        height: 120,
        borderRadius: 8,
        marginBottom: 16,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    modalStatus: {
        fontSize: 16,
        color: '#666666',
        marginBottom: 16,
    },
});

export default favoritesStyles;