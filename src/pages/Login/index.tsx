import React, { useContext, useState } from 'react';
import {
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Text,
    Alert,
} from 'react-native';

import { styles } from './styles';

import icon from "../../../assets/icon.png";
import imgHeader from "~/assets/login-pets.png";
import checkboxCheck from '~/assets/checkbox-marked.png'

import NavigationService from '~/services/NavigationService';
import api from '~/services/api';
import { AppContext } from '~/contexts/auth';


const Login = (): JSX.Element => {
    const context = useContext(AppContext);
    
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [logado, setLogado] = useState(false);

    const singIn = async () => {
        if (userEmail == ""  || password == "") {
            Alert.alert('Campo obrigatório vazio, favor verificar!')
            return
        }
        
        const response = await api.post<{token:string}>('/login', {
            mail: userEmail,
            password: password,
        });
        console.log({data: response.data, ok: response.ok, status: response.status});
        if(!response.ok){
            Alert.alert('Erro de conexão')
            return;
        }
        if(!response.data?.token){
            Alert.alert('Usuário ou senha incorretos')
            return;
        }
        context.actions.setToken(response.data?.token)

    }

    const dataUser = api.get('/user').then(response => response.data).then(console.log)

    return (
        <>
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
                            <TextInput
                                style={styles.input}
                                placeholder='seu email'
                                onChangeText={userEmail => setUserEmail(userEmail)}
                                defaultValue={userEmail}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder='sua senha'
                                secureTextEntry={true}
                                onChangeText={password => setPassword(password)}
                                defaultValue={password}
                            />
                            <TouchableOpacity
                                accessibilityLabel="Botão para entrar no sistema"
                                onPress={singIn}
                            >
                                <Text style={styles.buttonLogin}>Entrar</Text>
                            </TouchableOpacity>
                            <View style={styles.bottomForm}>
                                <View style={styles.keepLoggedContainer}>
                                    <Image
                                        source={checkboxCheck}
                                    />
                                    <Text style={styles.keepLogged}> Manter logado</Text>
                                </View>
                                <TouchableOpacity
                                    accessibilityLabel="Botão caso tenha esquecido sua senha"
                                    onPress={() => NavigationService.navigate('ForgotPassword')}
                                >
                                    <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View
                            style={styles.hr}
                        />
                        <View style={styles.registerView}>
                            <Text style={styles.registerText}>Não possui cadastro?</Text>
                            <TouchableOpacity
                                accessibilityLabel="Criar cadastro"
                                onPress={() => NavigationService.navigate('RegisterUser')}
                            >
                                <Text style={styles.buttonRegister}>cadastrar</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </View>
        </>
    )
};

export default Login;