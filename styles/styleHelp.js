import { StyleSheet, Dimensions } from "react-native";

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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent', // To keep it transparent and show the background colors
    },
    card: {
        width: '90%',
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    title: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    textInput: {
        marginBottom: 20,
        backgroundColor: '#ffffff',
    },
    button: {
        marginTop: 10,
        backgroundColor: '#4cad42',
    },
});

export default styles;
