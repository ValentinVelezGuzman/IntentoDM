import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
      padding: 20,
    },
    card: {
      width: '90%',
      backgroundColor: '#ffffff',
      borderRadius: 15,
      elevation: 24,
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 12 }, 
      shadowOpacity: 0.58, 
      shadowRadius: 16.00,
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
    },
    userName: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#0c9942',
      marginBottom: 8,
    },
    userAge: {
      fontSize: 20,
      color: '#4cad42',
    },
  });

  export default styles;