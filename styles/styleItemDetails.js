import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        position: 'relative',
    },
    halfBackgroundLeft: {
        backgroundColor: '#99c454',
        position: 'absolute',
        left: 0,
        width: '50%',
        height: '100%',
        zIndex: -1, // Dejarlo detrás del contenido
    },
    halfBackgroundRight: {
        backgroundColor: '#4cad42',
        position: 'absolute',
        right: 0,
        width: '50%',
        height: '100%',
        zIndex: -1, // Dejarlo detrás del contenido
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20, // Espacio para desplazarse
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 15, // Bordes redondeados de la tarjeta
        padding: 20,
        width: width * 0.9, // 90% del ancho de la pantalla
        minHeight: height * 0.6, // 60% de la altura de la pantalla
        elevation: 5, // Sombra para Android
        shadowColor: '#000', // Sombra para iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        marginVertical: 10, // Espacio entre la tarjeta y los bordes
        alignItems: 'flex-start', // Alinear todo el contenido a la izquierda
    },
    image: {
        width: 200, // Tamaño mediano para la imagen
        height: 200,
        alignSelf: 'center', // Centrar la imagen dentro de la tarjeta
        marginBottom: 20,
    },
    nameItem: {
        fontSize: 30,
        color: 'black',
        fontWeight: '900',
        textAlign: 'left',

    },
    priceItem: {
        fontSize: 20,
        color: 'black',
        fontWeight: '900',
        textAlign: 'left',
        marginBottom: 10,
    },
    categoryItem: {
        fontSize: 18,
        color: 'gray',
        fontWeight: '400',
        textAlign: 'left',
    },
    discountItem: {
        fontSize: 22,
        color: '#33d4ff',
        fontWeight: '900',
        textAlign: 'left',
    },
});

export default styles;
