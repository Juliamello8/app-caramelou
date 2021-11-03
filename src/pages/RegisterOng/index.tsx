import React, { useState } from 'react'
import { View, ScrollView, TextInput, Text, TouchableOpacity } from 'react-native';
import Footer from '~/components/Footer';

import { styles } from './styles';

import api from '~/services/api';

const RegisterOng = (): JSX.Element => {
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
                    <Text style={styles.titleRegister}>Cadastro ONG/Petshop</Text>
                    <Text style={styles.label}>Nome da ONG/Petshop:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Ex.: Amigo dos Animais'
                        onChangeText={typePet => setTypePet(typePet)}
                        defaultValue={typePet}
                    />
                    <Text style={styles.label}>CNPJ:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='000.000.000-00'
                        onChangeText={adressPet => setAdressPet(adressPet)}
                        defaultValue={adressPet}
                    />
                    <Text style={styles.label}>
                        Anexe um documento que comprove que é dono desta ONG/Petshop:
                    </Text>
                    <TouchableOpacity
                        accessibilityLabel="Botão anexar certificado de comprovação da ONG/Petshop"
                    >
                        <Text style={styles.attPhoto}>Anexar certificado</Text>
                    </TouchableOpacity>
                    <Text style={styles.obs}>* Formatos suportados: .jpg, .jpeg, .png, .pdf</Text>
                    { }
                    <TouchableOpacity
                        accessibilityLabel="Botão para finalizar cadastro da ONG/Petshop"
                        style={styles.registerButton}
                        // onPress={() => NavigationService.navigate('StrayPet')}
                        onPress={sendRegister}
                    >
                        <Text style={styles.registerButtonText}>finalizar cadastro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        accessibilityLabel="Botão para cancelar cadastro da ONG/Petshop"
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

export default RegisterOng;