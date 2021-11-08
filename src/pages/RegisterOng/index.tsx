import React, { useState } from 'react'
import { View, ScrollView, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import Footer from '~/components/Footer';

import { styles } from './styles';

import api from '~/services/api';
import NavigationService from '~/services/NavigationService';

const RegisterOng = (): JSX.Element => {
    const [nameONG, setNameONG] = useState('');
    const [cnpjONG, setCnpjONG] = useState('');

    const sendRegister = async () => {
        const response = await api.post('/ongPet', {
            name: nameONG,
            cnpj: cnpjONG,
        });
        if (nameONG == ""  || cnpjONG == "") {
            Alert.alert('Campo obrigatório vazio, favor verificar!')
            return
        }
        Alert.alert('Registrado com sucesso! :D')
        NavigationService.navigate('Home')
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
                        onChangeText={nameONG => setNameONG(nameONG)}
                        defaultValue={nameONG}
                    />
                    <Text style={styles.label}>CNPJ:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='000.000.000-00'
                        onChangeText={cnpjONG => setCnpjONG(cnpjONG)}
                        defaultValue={cnpjONG}
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
                        onPress={() => NavigationService.navigate('Home')}
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