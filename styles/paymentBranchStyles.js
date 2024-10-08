import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    halfBackgroundLeft: {
        position: 'absolute',
        left: 0,
        width: '50%',
        height: '100%',
        backgroundColor: '#4cad42',
        zIndex: -1,
    },
    halfBackgroundRight: {
        position: 'absolute',
        right: 0,
        width: '50%',
        height: '100%',
        backgroundColor: '#0c9942',
        zIndex: -1,
    },
    cartList: {
        flex: 1,
    },
    cartListContent: {
        paddingHorizontal: 15,
        paddingBottom: 10,
        paddingTop:10,
    },
    cartItem: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    thumbnail: {
        width: 100,
        height: 120,
        marginRight: 10,
    },
    itemDetails: {
        flex: 1,
        justifyContent: 'center',
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'black'
    },
    itemPrice: {
        fontSize: 14,
        color: '#555',
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
        marginTop: 5,
    },
    quantityText: {
        fontSize: 14,
        color: 'black',
        marginTop: 5,
        fontWeight: 'bold',
    },
    paymentSectionContainer: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 5,
        marginTop: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    totalAmountContainer: {
        backgroundColor: '#4cad42',
        padding: 15,
        borderRadius: 5,
        marginVertical: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        alignItems: 'center',
    },
    totalAmountText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    paymentMethodsContainer: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 5,
        marginVertical: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    paymentMethodsTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    paymentMethodOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    paymentMethodText: {
        fontSize: 16,
        color: '#555',
    },
    payButton: {
        backgroundColor: '#4cad42',
        padding: 15,
        marginHorizontal: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    payButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
    },
});

export default styles;
