import React, { useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/styleUserRegistration';
import stylesG from '../styles/globalStyles';
import usersGroup from '../arrayData/usersGroup';

const UserRegistration = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [birthDate, setBirthDate] = useState('');
  const [birthDateError, setBirthDateError] = useState('');

  const [user, setUser] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [department, setDepartment] = useState('');

  const validateEmail = () => {
    if (!email.includes('@')) {
      setEmailError('Debe escribir un correo válido, utilice @');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[0-9]).{1,8}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('Contraseña debe contener 1 Mayúscula 1 carácter especial, letras y números');
    } else {
      setPasswordError('');
    }
  };

  const validateBirthDate = () => {
    if (birthDate.length !== 8) {
      setBirthDateError('Debe ingresar una fecha de nacimiento en el formato correcto ddmmaaaa');
      return;
    }
    const day = parseInt(birthDate.slice(0, 2));
    const month = parseInt(birthDate.slice(2, 4)) - 1;
    const year = parseInt(birthDate.slice(4, 8));

    const today = new Date();
    const birth = new Date(year, month, day);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    if (age < 18 || age > 50) {
      setBirthDateError('No está en rango de edad para crear la cuenta');
    } else {
      setBirthDateError('');
    }
    return age;
  };

  const checkFieldsEmpty = () => {
    return !user || !email || !password || !birthDate || !address || !city || !department;
  };

  const handleRegister = () => {
    validateEmail();
    validatePassword();
    const age = validateBirthDate();
    if (checkFieldsEmpty() || emailError || passwordError || birthDateError) {
      Alert.alert('Debe completar correctamente todo el formulario');
    } else {
      // Crear el nuevo usuario
      const newUser = {
        id: usersGroup.length + 1, 
        image: require('../images/imgUsers/u1.png'), 
        nameUser: user,
        age: age, 
        user: user,
        password: password, 
      };
    
      usersGroup.push(newUser);
      console.log(usersGroup);
      Alert.alert('Usuario registrado exitosamente');
    }
  };

  return (
    <View style={styles.containerPUR}>
      <View style={[styles.container1UR, { paddingHorizontal: 20 }]}>
        <ScrollView>
          <Text style={styles.title1}>Formulario de Registro</Text>
          <View>

            <TextInput
              label="Usuario - Max 10 caracteres"
              mode="outlined"
              multiline
              maxLength={10}
              value={user}
              onChangeText={(text) => setUser(text)}
              theme={{ colors: { primary: '#4cad42' } }}
              style={styles.inputFullWidth}
            />

            <View style={{ position: 'relative' }}>
              <TextInput
                label="Contraseña - Max 8 caracteres"
                mode="outlined"
                secureTextEntry={!passwordVisible}
                value={password}
                onChangeText={(text) => setPassword(text)}
                onBlur={validatePassword}
                maxLength={8}
                theme={{ colors: { primary: '#4cad42' } }}
                style={styles.inputFullWidth}
              />
              <Button
                mode="text"
                onPress={() => setPasswordVisible(!passwordVisible)}
                style={{ position: 'absolute', right: 0, top: 10 }}
                icon={passwordVisible ? "eye-off" : "eye"}
                compact
              />
            </View>
            {passwordError ? (<Text style={{ color: 'red', fontSize: 12, textAlign: 'left' }}>{passwordError}</Text>) : null}

            <TextInput
              label="Correo"
              mode="outlined"
              multiline
              value={email}
              onChangeText={(text) => setEmail(text)}
              onBlur={validateEmail}
              theme={{ colors: { primary: '#4cad42' } }}
              style={styles.inputFullWidth}
            />
            {emailError ? (<Text style={{ color: 'red', fontSize: 12, textAlign: 'left' }}>{emailError}</Text>) : null}

            <TextInput
              label="Direccion - Max 30 caracteres"
              mode="outlined"
              multiline
              maxLength={30}
              value={address}
              onChangeText={(text) => setAddress(text)}
              theme={{ colors: { primary: '#4cad42' } }}
              style={styles.inputFullWidth}
            />

            <TextInput
              label="Ciudad"
              mode="outlined"
              multiline
              value={city}
              onChangeText={(text) => setCity(text)}
              theme={{ colors: { primary: '#4cad42' } }}
              style={styles.inputFullWidth}
            />

            <TextInput
              label="Departamento"
              mode="outlined"
              multiline
              value={department}
              onChangeText={(text) => setDepartment(text)}
              theme={{ colors: { primary: '#4cad42' } }}
              style={styles.inputFullWidth}
            />

            <TextInput
              label="Fecha de Nacimiento ddmmaaaa"
              mode="outlined"
              value={birthDate}
              onChangeText={(text) => setBirthDate(text)}
              onBlur={validateBirthDate}
              maxLength={8}
              theme={{ colors: { primary: '#4cad42' } }}
              style={styles.inputFullWidth}
            />
            {birthDateError ? (<Text style={{ color: 'red', fontSize: 12, textAlign: 'left' }}>{birthDateError}</Text>) : null}

            <Button
              mode='contained'
              buttonColor='#4cad42'
              onPress={handleRegister}
              style={{ marginTop: 20 }}
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
