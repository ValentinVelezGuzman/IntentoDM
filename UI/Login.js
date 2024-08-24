import React from 'react';
import { View, Text, Alert} from 'react-native';
import { TextInput, Button} from 'react-native-paper';
import styles from '../styles/styleLogin';
import stylesG from '../styles/globalStyles';
import { validatePassword, validateEmail} from '../validations/validations';

const Login = ({navigation}) => {
  return (
    <View style={styles.containerP}>
      <View style={styles.container1}>
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 20,
          }}
        >
          <View style={{ backgroundColor: '#99c454', flex: 0.3 }} />
          <View style={{ backgroundColor: '#4cad42', flex: 0.5 }} />
          <View>
            <Text style={styles.slogan}> Supermercado </Text>
            <Text style={styles.slogan}> Digital </Text>
          </View>
        </View>
      </View>

      <View style={styles.container2}>
        <Text style={styles.logo}>Verde</Text>
      </View>

      <View style={styles.container3}>

        <TextInput
            mode= "outlined"
            placeholder="Correo"
            style={[stylesG.input, { width: 340, height: 20 }]}
            onEndEditing={(c) => {
              const textInInput = c.nativeEvent.text;
              const message = validateEmail(textInInput);
              Alert.alert(message);
              console.log(textInInput)
            }}
          />

        <TextInput
            mode= "outlined"
            placeholder="Contraseña"
            maxLength={8}
            secureTextEntry={true}
            style={[stylesG.input, { width: 340, height: 20 }]}
            onEndEditing={(e) => {
              const textInInput = e.nativeEvent.text;
              const message = validatePassword(textInInput);
              Alert.alert(message);
              console.log(textInInput)
            }}
          />  

          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Button
              mode="contained"
              buttonColor="#4cad42"
              onPress={() => navigation.navigate('ItemList')}
              style={{ width: 340, height: 40, marginBottom: 20, borderRadius: 0 }}
            >
              <Text style={stylesG.textButton}>Inicio de sesión</Text>
            </Button>

            <Button
              mode="contained"
              buttonColor="#4cad42"
              onPress={() => navigation.navigate('UserRegistration')}
              style={{ width: 340, height: 40, marginBottom: 20, borderRadius: 0 }}
            >
              <Text style={stylesG.textButton}>Registrarse</Text>
            </Button>
          </View>
      </View>
    </View>
  );
};

export default Login;