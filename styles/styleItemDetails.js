import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

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
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 20,
        width: width * 0.9,
        minHeight: height * 0.6,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        marginVertical: 10,
        alignItems: 'flex-start',
    },
    tonalButton: {
        marginVertical: 10,
        borderRadius: 10, // Estilo del botón
        backgroundColor: '#4cad42',
    },
    buttonLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black', // Cambiar el color del texto si es necesario
    },
    productInfoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        marginVertical: 20,
        alignSelf: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 10,
    },
    nameItem: {
        fontSize: 25,
        color: 'black',
        fontWeight: '900',
        textAlign: 'center',
    },
    categoryItem: {
        fontSize: 18,
        color: 'gray',
        fontWeight: '400',
        textAlign: 'center',
        marginBottom: 5,
    },
    starsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        marginVertical: 10,
        alignSelf: 'center',
    },
    elevatedButton: {
        marginVertical:5,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    starsRow: {
        flexDirection: 'row',
    },
    ratingText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'black',
        textAlign: 'center',
    },
    priceItem: {
        fontSize: 20,
        color: 'black',
        textAlign: 'left',
        marginBottom: 10,
        fontFamily: 'Helvetica',
    },
    ProductFeaturesItem: {
        fontSize: 20,
        color: 'black',
        fontWeight: '400',
        textAlign: 'justify',
        fontFamily: 'Helvetica',
    },
    descriptionItem: {
        fontSize: 20,
        color: 'black',
        textAlign: 'left',
        fontFamily: 'Helvetica',
        marginBottom: 15,
    },
    discountItem: {
        fontSize: 22,
        color: '#99c454',
        fontWeight: '900',
        textAlign: 'left',
        marginBottom: 10,
    },
});

export default styles;
