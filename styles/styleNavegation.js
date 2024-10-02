import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container1: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    margin:50
  },
  boton1: {
    backgroundColor: '#4cad42',
    padding: 15,
    marginRight: 10,
    borderRadius: 0, 
    justifyContent: 'center',
    alignItems: 'center',
    width: 100, 
    height: 50, 
  },
  botonText1: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60, 
    backgroundColor: '#4cad42', 
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, 
  },
});