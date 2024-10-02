import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { Button, TextInput, RadioButton, Text, Card } from 'react-native-paper';
import styles from '../styles/styleHelp';
import Navigation from './Navigation';
import styleNavegation from '../styles/styleNavegation';

const Help = (navigation) => {
    const [requestType, setRequestType] = useState('queja');

    return (
        <View style={styles.container}>
            <Card style={styles.card} elevation={5}>
                <Card.Content>
                    <Text style={styles.title}>Tipo de solicitud</Text>
                    <RadioButton.Group 
                        onValueChange={newValue => setRequestType(newValue)}
                        value={requestType}
                    >
                        <View style={styles.radioButtonContainer}>
                            <RadioButton value="queja" color='#4cad42'/>
                            <Text>Queja</Text>
                        </View>
                        <View style={styles.radioButtonContainer}>
                            <RadioButton value="petición" color='#4cad42' />
                            <Text>Petición</Text>
                        </View>
                        <View style={styles.radioButtonContainer}>
                            <RadioButton value="recurso" color='#4cad42' />
                            <Text>Recurso</Text>
                        </View>
                    </RadioButton.Group>

                    <TextInput
                        label="Descripción de la solicitud"
                        mode= "outlined"
                        multiline
                        maxLength={300}
                        theme={{ colors: { primary: '#4cad42' } }}
                        style={styles.textInput}
                    />                      

                    <Button 
                        mode="contained" 
                        onPress={() => Alert.alert('PQRS enviada')}
                        style={styles.button}>
                        Enviar
                    </Button>
                </Card.Content>
            </Card>
        </View>
    );
};

export default Help;
