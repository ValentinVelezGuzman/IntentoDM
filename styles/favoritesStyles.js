import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    halfBackgroundLeft: {
        backgroundColor: '#4cad42',
        position: 'absolute',
        left: 0,
        width: '50%',
        height: '100%',
        zIndex: -1,
    },
    halfBackgroundRight: {
        backgroundColor: '#0c9942',
        position: 'absolute',
        right: 0,
        width: '50%',
        height: '100%',
        zIndex: -1,
    },
    titleContainer: {
        backgroundColor: '#ffffff',
        padding: 15,
        marginHorizontal: 15,
        marginTop: 10,
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        marginBottom: 15,
        alignItems: 'center',
    },
    titleContainer2: {
        backgroundColor: '#ffffff',
        padding: 15,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    listContent: {
        paddingBottom: 20,
        paddingHorizontal: 15,
    },
    favoriteItem: {
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
    nameItem: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    },
    statusText: {
        fontWeight: 'bold',
    },
    buyMoreButton: {
        backgroundColor: '#4cad42',
        padding: 15,
        borderRadius: 5,
        marginHorizontal: 15,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buyMoreButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    noUserText: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default styles;
