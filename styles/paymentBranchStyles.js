import { StyleSheet } from 'react-native';

const paymentBranchStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    appbar: {
        backgroundColor: '#0c9942', 
    },
    content: {
        margin: 16,
        flex: 1,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        padding: 8,
        backgroundColor: '#f5f5f5',
        borderRadius: 4,
    },
    itemImage: {
        width: 100,
        height: 100,
        marginRight: 16,
    },
    itemDetails: {
        flex: 1,
    },
    itemDescription: {
        fontSize: 16,
        marginBottom: 4,
    },
    itemText: {
        fontSize: 14,
        color: '#333',
    },
    itemList: {
        paddingBottom: 16,
    },
    summaryCard: {
        marginVertical: 16,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    paymentCard: {
        marginVertical: 16,
        padding: 16,
    },
    paymentTitle: {
        marginBottom: 8,
        fontSize: 18,
        fontWeight: 'bold',
    },
    inputField: {
        marginVertical: 8,
        padding: 8,
        backgroundColor: '#f5f5f5',
        borderRadius: 4,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    radioButtonText: {
        marginLeft: 8,
    },
    payButton: {
        backgroundColor: '#7DDA48',
        marginHorizontal: 16,
        marginBottom: 16, 
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
});

export default paymentBranchStyles;