import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    categoryItem: {
        fontSize: 15,
        color: 'gray',
        fontFamily: 'Rockwell',
        fontWeight: '400',
        textAlign: 'left',
    },
    discountItem:{
        fontSize: 20,
        color: 'red',
        fontFamily: 'Rockwell',
        fontWeight: '900',
    },
    questionContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        alignItems: 'center',
    },
    questionInput: {
        width: '100%',
        height: 80,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    paymentMethodsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        color: 'black',
    },
    paymentMethodsContainer: {
        marginVertical: 5,
    },
    paymentMethod: {
        fontSize: 20,
        color: '#333',
        textAlign: 'left',
        color: 'black',
    },
    containerP: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
    },
    containerItem: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal:35,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10, 
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 5,
        elevation: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
    },
    image: {
        width:300,
        height:300,
    },
    container1: {
        margin: 5,
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 15,
    },
    nameItem: {
        fontSize: 30,
        color: 'black',
        fontFamily: 'Rockwell',
        fontWeight: '900',
        textAlign: 'center',
    },
    descriptionItem: {
        fontSize: 20,
        color: 'black',
        fontFamily: 'Rockwell',
        fontWeight: '100',
        textAlign: 'center'
    },
    priceItem:{
        fontSize: 20,
        color: 'black',
        fontFamily: 'Rockwell',
        fontWeight: '900',
    },
    ProductFeaturesItem:{
        fontSize: 20,
        color: 'black',
        fontFamily: 'Rockwell',
        fontWeight: '100',
        textAlign: 'justify'
    }
  });
  
  export default styles;