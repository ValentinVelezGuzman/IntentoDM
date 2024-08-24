import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    //componentes de ItemCard
    discountItem: {
        fontSize: 15,
        color: 'red',
        fontFamily: 'Rockwell',
        fontWeight: '900',
        textAlign: 'left',
    },    
    containerItem: {
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 10, 
        backgroundColor: 'white',
        borderRadius: 10,
        marginHorizontal: 10,
        marginTop: 5,
        marginBottom: 5,
        elevation: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1, 
    },
    containerButton: {
        flex: 0.7,
        padding: 2,
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 5,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
      },
    containerText: {
        flex: 1, 
    },
    image: {
        width:100,
        height:100,
        marginRight: 10,
        alignSelf:'center'
    },
    nameItem: {
        fontSize: 18,
        color: 'black',
        fontFamily: 'Rockwell',
        fontWeight: '900',
        textAlign: 'left',
    },
    descriptionItem: {
        fontSize: 15,
        color: 'black',
        fontFamily: 'Rockwell',
        fontWeight: '100',
        textAlign: 'left'
    },
    priceItem:{
        fontSize: 15,
        color: 'black',
        fontFamily: 'Rockwell',
        fontWeight: '900',
        textAlign: 'left'
    },
    //componentes de ItemList
    containerP: {
        flex: 1,
        backgroundColor: '#eeeeee'
    },
    searchBar: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        margin: 10,
        backgroundColor: '#fff',
    },
  });
  
  export default styles;