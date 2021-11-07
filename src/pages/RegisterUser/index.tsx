import React, { useState } from 'react'
import {
    View,
    ScrollView,
    TextInput,
    Text,
    TouchableOpacity,
    Alert
} from 'react-native';

import { styles } from './styles';

type Login = {
    email: string;
    senha: string;
}
interface UserProps {
    values: Login;
}

import NavigationService from '~/services/NavigationService';
import api from '~/services/api';

const RegisterUser = (): JSX.Element => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userAdress, setUserAdress] = useState('');
    const [adressNumber, setAdressNumber] = useState('');
    const [btdayUser, setBtdayUser] = useState('');
    const [stateUser, setStateUser] = useState('');
    const [cityUser, setCityUser] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [cpfUser, setCpfUser] = useState('');

    const sendRegisterUser = async () => {
        const response = await api.post('/user', {
            name: userName,
            mail: userEmail,
            password: password,
            adress: userAdress,
            number: adressNumber,
            state: stateUser,
            zip: zipCode,
            phone: phoneNumber,
            birthDate: btdayUser,
            cpf: cpfUser,
        });
        console.log("Response: ", response);
        if(response.status === 200) {
            Alert.alert("Cadastro efetuado com sucesso!");
            NavigationService.navigate('Login')
        } else {
            Alert.alert("Erro de cadastro!")
        }
    }

    return (
        <ScrollView style={styles.containerRegister}>
            <View style={styles.contentsRegister}>
                <Text style={styles.titleRegister}>Registre-se</Text>
                <Text style={styles.label}>Nome Completo:</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Ex.: João da Silva'
                    onChangeText={userName => setUserName(userName)}
                    defaultValue={userName}
                />
                <Text style={styles.label}>E-mail:</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Ex.: joao@email.com'
                    onChangeText={userEmail => setUserEmail(userEmail)}
                    defaultValue={userEmail}
                />
                <Text style={styles.label}>Endereço:</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Ex.: Rua Morretes'
                    onChangeText={userAdress => setUserAdress(userAdress)}
                    defaultValue={userAdress}
                />
                <View style={styles.containerTypeAndDate}>
                    <View style={styles.typeAndDate}>
                        <Text style={styles.label}>Número:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Ex.: 200'
                            onChangeText={adressNumber => setAdressNumber(adressNumber)}
                            defaultValue={adressNumber}
                        />
                    </View>
                    <View style={styles.typeAndDate}>
                        <Text style={styles.label}>Data de Nascimento:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Ex.: 08/03/1992'
                            onChangeText={btdayUser => setBtdayUser(btdayUser)}
                            defaultValue={btdayUser}
                        />
                    </View>

                </View>
                <View style={styles.containerTypeAndDate}>
                    <View style={styles.typeAndDate}>
                        <Text style={styles.label}>Estado:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Ex.: Paraná'
                            onChangeText={stateUser => setStateUser(stateUser)}
                            defaultValue={stateUser}
                        />
                    </View>
                    <View style={styles.typeAndDate}>
                        <Text style={styles.label}>Cidade:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Ex.: Curitiba'
                            onChangeText={cityUser => setCityUser(cityUser)}
                            defaultValue={cityUser}
                        />
                    </View>
                </View>
                <View style={styles.containerTypeAndDate}>
                    <View style={styles.typeAndDate}>
                        <Text style={styles.label}>CEP:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Ex.: 81110-110'
                            onChangeText={zipCode => setZipCode(zipCode)}
                            defaultValue={zipCode}
                        />
                    </View>
                    <View style={styles.typeAndDate}>
                        <Text style={styles.label}>Celular:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Ex.: (41) 9999-9999'
                            onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
                            defaultValue={phoneNumber}
                        />
                    </View>
                </View>
                <View style={styles.containerTypeAndDate}>
                    <View style={styles.typeAndDate}>
                        <Text style={styles.label}>Crie uma senha:</Text>
                        <TextInput
                            secureTextEntry={true}
                            style={styles.input}
                            placeholder='Sua senha'
                            onChangeText={password => setPassword(password)}
                            defaultValue={password}
                        />
                    </View>
                    <View style={styles.typeAndDate}>
                        <Text style={styles.label}>CPF:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Ex.: 100.000.000-00'
                            onChangeText={cpfUser => setCpfUser(cpfUser)}
                            defaultValue={cpfUser}
                        />
                    </View>
                </View>

                <TouchableOpacity
                    accessibilityLabel="Botão anexar foto de perfil"
                >
                    <Text style={styles.attPhoto}>Anexar foto de perfil</Text>
                </TouchableOpacity>
                <Text style={styles.obs}>* Formatos suportados: .jpg, .jpeg, .png</Text>
                <TouchableOpacity
                    accessibilityLabel="Botão para finalizar cadastro"
                    style={styles.registerButton}
                    onPress={sendRegisterUser}
                >
                    <Text style={styles.registerButtonText}>finalizar cadastro</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    accessibilityLabel="Botão para cancelar cadastro"
                    style={styles.cancelButton}
                    onPress={() => NavigationService.navigate('Login')}
                >
                    <Text style={styles.cancelButtonText}>cancelar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
    )
};

export default RegisterUser;