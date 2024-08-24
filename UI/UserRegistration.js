import React from 'react';
import { View, Text, ScrollView, Alert, alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import styles from '../styles/styleUserRegistration';
import stylesG from '../styles/globalStyles';
import { validatePassword, validateEmail} from '../validations/validations';

const UserRegistration = () => {
  return (
    <View style={styles.containerPUR}>
      <View style={styles.container1UR}>
      <ScrollView>
      <Text style={styles.title1}>Formulario de Registro</Text>
        <View style={styles.container2UR}>
          
          <TextInput
            mode= "outlined"
            placeholder="Usuario - Max 10 caracteres"
            maxLength={10}
            style={[stylesG.input]}
          />

          <TextInput
            mode= "outlined"
            placeholder="Contraseña"
            maxLength={8}
            secureTextEntry={true}
            style={[stylesG.input]}
            onEndEditing={(e) => {
              const textInInput = e.nativeEvent.text;
              const message = validatePassword(textInInput);
              Alert.alert(message);
              console.log(textInInput)
            }}
          />

          <TextInput
            mode= "outlined"
            placeholder="Correo"
            style={[stylesG.input]}
            onEndEditing={(c) => {
              const textInInput = c.nativeEvent.text;
              const message = validateEmail(textInInput);
              Alert.alert(message);
              console.log(textInInput)
            }}
          />
          
          <TextInput
            mode= "outlined"
            placeholder="Direccion - Max 30 caracteres"
            maxLength={30}
            style={[stylesG.input]}
          />

          <Button
            mode='contained'
            buttonColor='#4cad42'
            onPress={() => Alert.alert('Usuario registrado exitosamente')}
          >
            <Text style={stylesG.textButton}>Registrarse</Text>
          </Button>
        </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default UserRegistration;
