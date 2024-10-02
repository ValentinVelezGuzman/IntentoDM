import { StyleSheet , Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

    input: {
        marginBottom: 10,
    },
    inputFullWidth: {
      width: '100%', // Ocupar todo el ancho disponible
      marginVertical: 8, // Añadir espacio vertical entre inputs
    },
    containerPUR: {
        flex: 1,
        backgroundColor: '#0c9942',
        justifyContent: 'center', 
        alignItems: 'center', 
      },
      container1UR: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: width * 0.9, 
        height: height * 0.8, 
        justifyContent: 'center',
        elevation: 3,
      },
      text: {
        fontSize: 15,
      },
      title1: {
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
        fontFamily: 'Rockwell',
        fontWeight: '900',
      },
  });
  
  export default styles;