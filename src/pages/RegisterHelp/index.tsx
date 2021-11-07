import React, { useContext, useEffect, useState } from 'react'
import { View, ScrollView, TextInput, Text, TouchableOpacity } from 'react-native';
import Footer from '~/components/Footer';

import { styles } from './styles';

import api from '~/services/api';
import { AppContext } from '~/contexts/auth';

const RegisterHelp = (): JSX.Element => {
    const context = useContext(AppContext);
    const [nameUser, setNameUser] = useState('');
    const [titleHelp, setTitleHelp] = useState('');
    const [descriptionHelp, setDescriptionHelp] = useState('');


    useEffect(()=>{
        const data = api.get('/user')
        // console.log(data.then.)
    })

    const sendRegister = async () => {
        const response = await api.post('/requestHelp', {
            user: nameUser,
            title: titleHelp,
            description: descriptionHelp,
        });
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
                        placeholder='Nome aqui'
                        editable={false}
                        selectTextOnFocus={false}
                        defaultValue={nameUser}
                    />
                    <Text style={styles.label}>Título do pedido:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Descreva em poucas palavras'
                        onChangeText={titleHelp => setTitleHelp(titleHelp)}
                        defaultValue={titleHelp}
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