import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#0c9942', // Default background color for the right side
        justifyContent: 'center',
        alignItems: 'center',
    },
    quarterBackgroundLeft: {
        backgroundColor: '#4cad42',
        position: 'absolute',
        left: 0,
        width: '25%',
        height: '100%',
    },
    restBackgroundRight: {
        backgroundColor: '#0c9942',
        position: 'absolute',
        left: '25%',
        width: '75%',
        height: '100%',
    },
    card: {
        width: '90%',
        backgroundColor: '#ffffff',
        borderRadius: 15,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        alignItems: 'center',
        padding: 20,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 4,
        borderColor: '#4cad42',
    },
    textContainer: {
        alignItems: 'center',
        marginBottom: 15,
    },
    userName: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0c9942',
    },
    userAge: {
        fontSize: 20,
        color: '#4cad42',
    },
    button: {
        backgroundColor: '#4cad42',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
    },
});

export default styles;
