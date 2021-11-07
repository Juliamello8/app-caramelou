import React, { useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Text,
    Alert
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles';

import icon from "../../../assets/icon.png";
import imgHeader from "~/assets/login-pets.png";
import checkboxCheck from '~/assets/checkbox-marked.png'

import NavigationService from '~/services/NavigationService';
import api from '~/services/api';
import { AppContext } from '~/contexts/auth';


const Login = (): JSX.Element => {
    const context = useContext(AppContext);
    
    const [manterLogado, setManterLogado] = useState(true);
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [logado, setLogado] = useState(false)
    const [errorMessage, setErrorMessage] = useState({});
    
    function toggleManterLogado(){
        setManterLogado(!manterLogado);
    }

    const singIn = async () => {
        try {
            const response = await api.post<{token:string}>('/login', {
                mail: userEmail,
                password: password,
            });
    
            // const { user, token } = response.data;
    
            // await AsyncStorage.multiSet([
            //     ['@Caramelou:token', token],
            //     ['@Caramelou:user', JSON.stringify(user)],
            // ])
            console.log("Response: ", response);
            context.actions.setToken(response.data?.token)
            Alert.alert("Login efetuado com sucesso!")

            // setLogado({user})

        } catch(response) {
        //     setErrorMessage({ response.data.error });
        }
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
                                secureTextEntry={true}
                                style={styles.input}
                                placeholder='sua senha'
                                onChangeText={password => setPassword(password)}
                                defaultValue={password}
                            />
                            <TouchableOpacity
                                accessibilityLabel="Botão para entrar no sistema"
                                onPress={singIn}
                                // onPress={singIn}
                                // onPress={() => NavigationService.navigate('Home')}
                            
                            >
                                { !!logado && <Text> { logado} </Text>}
                                { !!errorMessage && <Text> { errorMessage }</Text>}
                                <Text style={styles.buttonLogin}>Entrar</Text>
                            </TouchableOpacity>
                            <View style={styles.bottomForm}>
                                <View style={styles.keepLoggedContainer}>
                                    <TouchableOpacity onPress={toggleManterLogado}>
                                        <MaterialIcons
                                            name={manterLogado
                                                ? "check-box"
                                                : "check-box-outline-blank"
                                            }
                                            color="#BDBDBD" size={16}/>
                                    </TouchableOpacity>

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