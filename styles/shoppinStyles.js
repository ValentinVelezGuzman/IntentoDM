import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    appbar: {
        backgroundColor: '#0c9942',
    },
    flatListContent: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        paddingBottom: 80, 
    },
    card: {
        marginVertical: 8,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        width: width - 32, 
        alignSelf: 'center', 
    },
    cardImage: {
        width: 100,
        height: 100,
        marginRight: 16,
    },
    quantityInput: {
        width: 60,
        marginHorizontal: 8,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    paymentCard: {
        marginVertical: 16,
    },
    summaryCard: {
        marginVertical: 16,
        padding: 16,
    },
    paymentTitle: {
        marginBottom: 8,
        fontSize: 18,
        fontWeight: 'bold',
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    radioButtonText: {
        marginLeft: 8,
    },
    summaryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 4,
    },
    summaryText: {
        fontWeight: 'bold',
    },
    additionalContent: {
        marginVertical: 16,
    },
    payButton: {
        marginTop: 16,
        marginHorizontal: 16,
        backgroundColor: '#0c9942', 
        color: '#ffffff', 
    },
    additionalFields: {
        marginTop: 16,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    inputField: {
        marginBottom: 12,
    },
});

export default styles;