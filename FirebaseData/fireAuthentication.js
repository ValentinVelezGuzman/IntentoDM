import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';

// Función para registrar un nuevo usuario en Firebase y guardar datos en Firestore
async function registerNewUser(userDetails) {
    if (await isUserUnique(userDetails.user)) {
        auth()
            .createUserWithEmailAndPassword(userDetails.email, userDetails.password)
            .then(userCredential => {
                const uid = userCredential.user.uid;
                return firestore()
                    .collection('users')
                    .doc(uid)
                    .set({
                        nameUser: userDetails.nameUser,
                        user: userDetails.user.toLowerCase(),
                        email: userDetails.email,
                        address: userDetails.address,
                        city: userDetails.city,
                        department: userDetails.department,
                        age: userDetails.age,
                    });
            })
            .then(() => {
                Alert.alert('Éxito', 'Usuario registrado con éxito.');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert('Correo en uso', 'Este correo ya está registrado.');
                } else if (error.code === 'auth/invalid-email') {
                    Alert.alert('Correo no válido', 'El formato del correo ingresado es incorrecto.');
                } else {
                    console.error(error);
                }
            });
    } else {
        Alert.alert('Nombre de usuario en uso', 'Por favor, elige otro nombre de usuario.');
    }
}

// Verificar si un usuario es único en Firestore
async function isUserUnique(username) {
    try {
        const querySnapshot = await firestore()
            .collection('users')
            .where('user', '==', username.toLowerCase())
            .get();

        return querySnapshot.empty;
    } catch (error) {
        console.error('Error en verificación de usuario:', error);
    }
}

// Autenticación de usuario en Firebase usando nombre de usuario y contraseña
async function loginUser(username, password, navigation) {
    try {
        const querySnapshot = await firestore()
            .collection('users')
            .where('user', '==', username.toLowerCase())
            .get();

        if (!querySnapshot.empty) {
            const email = querySnapshot.docs[0].data().email;
            const userCredential = await auth().signInWithEmailAndPassword(email, password);
            return navigation.navigate('ItemList');
        } else {
            Alert.alert('Acceso denegado', 'Nombre de usuario o contraseña incorrectos.');
        }
    } catch (error) {
        if (error.code === 'auth/user-not-found') {
            Alert.alert('Usuario no encontrado', 'No se encontró un usuario con ese nombre.');
        } else if (error.code === 'auth/wrong-password') {
            Alert.alert('Contraseña incorrecta', 'La contraseña ingresada no es correcta.');
        } else {
            Alert.alert('Error de autenticación', 'Hubo un problema al intentar iniciar sesión: ' + error.message);
        }
        return false;
    }
}

export { registerNewUser, isUserUnique, loginUser };
