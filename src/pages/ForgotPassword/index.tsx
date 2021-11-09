import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, Alert } from 'react-native';

import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons'

import icon from "../../../assets/icon.png";
import back from "~/assets/chevron-left.png";
import imgHeader from "~/assets/login-pets.png";

import NavigationService from '~/services/NavigationService';
import api from '~/services/api';

const ForgotPassword = (): JSX.Element => {
    const [userEmail, setUserEmail] = useState('');
    
    const sendEmail = async () => {
        if (userEmail == "" ) {
            Alert.alert('Campo obrigatório vazio, favor verificar!')
            return
        }
        
        const response = await api.post<{token:string}>('/login', {
            mail: userEmail,
        });
        
        if(!response.ok){
            Alert.alert('Erro de conexão')
            return;
        }
        if(!response.data?.token){
            Alert.alert('Email incorreto, favor verificar!')
            return;
        }
        Alert.alert('Email de recuperação de senha enviado!')
    }
    return (
        <View style={styles.container}>
            <Image
                source={imgHeader}
                style={styles.imgHeader}
            >
            </Image>
            <View style={styles.contentsLogin}>
                <View style={styles.login}>
                    <Image
                        source={icon}
                        style={styles.icon}
                    />
                    <View style={styles.form}>
                        <Text style={styles.labelText}>Digite seu e-mail</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Ex.: seuemail@email.com'
                            onChangeText={userEmail => setUserEmail(userEmail)}
                            defaultValue={userEmail}
                        />
                        <TouchableOpacity
                            accessibilityLabel="Botão para recuperar a senha"
                            onPress={sendEmail}
                        >
                            <Text style={styles.buttonLogin}>Recuperar Senha</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={styles.divBack}
                        accessibilityLabel="Botão para voltar a tela de login"
                        onPress={() => NavigationService.navigate('Login')}
                    >
                       <MaterialIcons name="chevron-left" color="#BDBDBD" size={24} />
                        <Text style={styles.backText}>voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

export default ForgotPassword;