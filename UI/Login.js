import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import styles from '../styles/styleLogin';
import stylesG from '../styles/globalStyles';
import usersGroup from '../arrayData/usersGroup';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 

  const handleLogin = () => {
    // Search if a user exists
    const user = usersGroup.find(
      (u) => u.user === username && u.password === password
    );
    if (user) {
      navigation.navigate('ItemList');
    } else {
      Alert.alert('Error', 'Usuario o Contraseña no registrados');
    }
  };

  return (
    <View style={styles.containerP}>
      <View style={styles.container1}>
        <View style={{ flexDirection: 'row', height: 100, padding: 20 }}>
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
          label="Ingrese su Usuario"
          mode="outlined"
          multiline
          maxLength={10}
          value={username}
          onChangeText={(text) => setUsername(text)}
          theme={{ colors: { primary: '#4cad42' } }}
          style={styles.textInput}
        />

        <TextInput
          label="Ingrese su Contraseña"
          mode="outlined"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)} 
          theme={{ colors: { primary: '#4cad42' } }}
          style={styles.textInput}
        />

        <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 20 }}>
          <Button
            mode="contained"
            buttonColor="#4cad42"
            onPress={handleLogin}
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
