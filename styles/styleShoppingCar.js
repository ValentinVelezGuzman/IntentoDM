import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    backgroundContainer: {
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
    container: {
        flex: 1,

    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#ffffff',
        borderEndEndRadius: 5,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        marginTop: 15,
        width: '100%',
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    paymentButton: {
        backgroundColor: '#4cad42',
        padding: 10,
        borderRadius: 5,
    },
    paymentButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    cartList: {
        flex: 1,
    },
    cartItem: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        padding: 15,
        marginHorizontal:20,
        marginVertical:1,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    imageContainer: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    thumbnail: {
        width: 100,
        height: 100,
    },
    itemDetails: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'center',
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'black'
    },
    itemPrice: {
        fontSize: 16,
        color: '#333',
    },
    discountText: {
        fontSize: 14,
        color: '#99c454',
        fontWeight: 'bold',
    },
    finalPriceText: {
        fontSize: 16,
        color: '#4cad42',
        fontWeight: 'bold',
    },
    quantityContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantityContainer2: {
        flexDirection: 'row',
    },
    quantityButton: {
        backgroundColor: '#4cad42',
        padding: 5,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    quantityButtonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    quantityText: {
        fontSize: 16,
        marginHorizontal: 2,
    },
    deleteButton: {
        backgroundColor: '#d9534f',
        padding: 5,
        borderRadius: 5,
        marginTop: 5,
    },
    deleteButtonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    addMoreProductsContainer: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 0,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        marginBottom: 15,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    addMoreButton: {
        backgroundColor: '#4cad42',
        padding: 15,
        borderRadius: 5,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addMoreButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
    },
});

export default styles;
