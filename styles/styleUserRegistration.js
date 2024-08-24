import { StyleSheet , Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
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
        alignItems: 'center',
      },
      container2UR: {
        justifyContent: 'center',
        alignItems: 'center', 
      },
      text: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      title1: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        fontFamily: 'Rockwell',
        fontWeight: '900',
      },
  });
  
  export default styles;