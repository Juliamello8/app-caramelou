import React, { useState } from 'react'
import { View, ScrollView, TextInput, Text, TouchableOpacity } from 'react-native';
import Footer from '~/components/Footer';

import { styles } from './styles';

import api from '~/services/api';

const RegisterHelp = (): JSX.Element => {
    const [typePet, setTypePet] = useState('');
    const [adressPet, setAdressPet] = useState('');
    const [dateFind, setDateFind] = useState('');
    const [hourFind, setHourFind] = useState('');
    const [descriptionPet, setDescriptionPet] = useState('');

    const sendRegister = async () => {
        const response = await api.post('/strayPet', {
            type: typePet,
            location: adressPet,
            date: dateFind,
            description: descriptionPet,
        });
        console.log("Response: ", response);
        const status = response.status
    }

    return (
        <>
            <ScrollView style={styles.containerRegister}>
                <View style={styles.contentsRegister}>
                    <Text style={styles.titleRegister}>Cadastro Pedido de ajuda</Text>
                    <Text style={styles.label}>Pedido de ajuda para:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Selecione uma opção'
                        onChangeText={typePet => setTypePet(typePet)}
                        defaultValue={typePet}
                    />
                    <Text style={styles.label}>Título do pedido:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Descreva em poucas palavras'
                        onChangeText={adressPet => setAdressPet(adressPet)}
                        defaultValue={adressPet}
                    />
                    <Text style={styles.label}>Descrição do pedido:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Descreva sobre seu pedido com mais detalhes.'
                        onChangeText={adressPet => setAdressPet(adressPet)}
                        defaultValue={adressPet}
                    />
                    <TouchableOpacity
                        accessibilityLabel="Botão para finalizar cadastro do Pedido de Ajuda"
                        style={styles.registerButton}
                        // onPress={() => NavigationService.navigate('StrayPet')}
                        onPress={sendRegister}
                    >
                        <Text style={styles.registerButtonText}>finalizar cadastro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        accessibilityLabel="Botão para cancelar cadastro do Pedido de Ajuda"
                        style={styles.cancelButton}
                    >
                        <Text style={styles.cancelButtonText}>cancelar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Footer />
        </>

    )
};

export default RegisterHelp;