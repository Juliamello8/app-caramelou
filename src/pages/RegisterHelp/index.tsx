import React, { useContext, useEffect, useState } from 'react'
import { View, ScrollView, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import Footer from '~/components/Footer';

import { styles } from './styles';

import api from '~/services/api';
import { AppContext } from '~/contexts/auth';
import NavigationService from '~/services/NavigationService';
import { getEnvironmentData } from 'worker_threads';

const RegisterHelp = (): JSX.Element => {
    const context = useContext(AppContext);
    const [titleHelp, setTitleHelp] = useState('');
    const [descriptionHelp, setDescriptionHelp] = useState('');
    const [mailHelp, setMailHelp] = useState('');
    const [phoneHelp, setPhoneHelp] = useState('');


    useEffect(()=>{
        const data = api.get('/user')
        // console.log(data.then.)
    })

    const sendRegister = async () => {
        if (/*nameUser == "" || */ titleHelp == ""  || descriptionHelp == "") {
            Alert.alert('Campo obrigatório vazio, favor verificar!')
            return
        } else {

            const response = await api.post('/requestHelp', {
                user: context.user?.name,
                title: titleHelp,
                phone: phoneHelp,
                mail: mailHelp,
                description: descriptionHelp,
                time: new Date(),
            });
            Alert.alert('Registrado com sucesso! :D')
            NavigationService.navigate('Home')
            const status = response.status
        }
    }  

    return (
        <>
            <ScrollView style={styles.containerRegister}>
                <View style={styles.contentsRegister}>
                    <Text style={styles.titleRegister}>Cadastro Pedido de ajuda</Text>
                    <Text style={styles.label}>Pedido de ajuda para:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={context.user?.name}
                        editable={false}
                        selectTextOnFocus={false}
                        defaultValue={context.user?.name}
                    />
                    <Text style={styles.label}>Título do pedido:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Descreva em poucas palavras'
                        onChangeText={titleHelp => setTitleHelp(titleHelp)}
                        defaultValue={titleHelp}
                    />
                    <Text style={styles.label}>Telefone para Contato:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Ex: (41)99999-9999'
                        onChangeText={phoneHelp => setPhoneHelp(phoneHelp)}
                        defaultValue={phoneHelp}
                    />
                    <Text style={styles.label}>E-mail para Contato:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Ex: seuemail@email.com'
                        onChangeText={mailHelp => setMailHelp(mailHelp)}
                        defaultValue={mailHelp}
                    />
                    <Text style={styles.label}>Descrição do pedido:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Descreva sobre seu pedido com mais detalhes.'
                        onChangeText={descriptionHelp => setDescriptionHelp(descriptionHelp)}
                        defaultValue={descriptionHelp}
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

export default RegisterHelp;