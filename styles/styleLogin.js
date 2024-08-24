import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerP: {
    flex: 1,
    backgroundColor: '#0c9942',
  },
  container1: {
    flex: 0.1,
  },
  container2: {
    flex: 0.2,
  },
  container3: {
    flex: 0.7,
    backgroundColor: 'white',
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: 'gray',
    shadowOffset: { width: 5, height: 20 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10
  },
  logo: {
    fontSize: 100,
    color: 'white',
    fontFamily: 'Rockwell',
    fontWeight: '900',
    textAlign: 'center',
  },
  slogan: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Rockwell',
    fontWeight: '900',
  },
  separator: {
    height: 100, 
    justifyContent: "space-between"
  },
  button: {
    margin: 10,
  },
});

export default styles;
