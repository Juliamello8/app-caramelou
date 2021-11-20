import React, { useState, useContext, useEffect } from 'react'
import { View, ScrollView, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import Footer from '~/components/Footer';
import * as ImagePicker from 'expo-image-picker';

import { styles } from './styles';

import api from '~/services/api';
import NavigationService from '~/services/NavigationService';
import { AppContext } from '~/contexts/auth';

const RegisterOng = (): JSX.Element => {
    const context = useContext(AppContext);
    const [nameONG, setNameONG] = useState('');
    const [cnpjONG, setCnpjONG] = useState('');
    const [onwerONG, setOwnerONG] = useState ('');
    const [imageONG, setImageONG] = useState('');
    const [phoneONG, setPhoneONG] = useState('');
    const [mailONG, setMailONG] = useState('');

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
        if (permissionResult.granted === false) {
          alert("Permissão de acesso ao rolo da camera é neceesário!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync({base64:true});
        // @ts-ignore
        setImageONG(pickerResult.base64)
      }
      
      useEffect(()=>{
        const data = api.get('/user')
        // console.log(data.then.)
    })

    const sendRegister = async () => {
        if (nameONG == ""  || cnpjONG == "") {
            Alert.alert('Campo obrigatório vazio, favor verificar!')
            return
        } else {
            const response = await api.post('/ongPet', {
                name: nameONG,
                owner: context.user?.name,
                CNPJ: cnpjONG,
                image: imageONG,
                phone: phoneONG,
                mail: mailONG,
            });
            Alert.alert('Registrado com sucesso! :D')
            NavigationService.navigate('Home')
            console.log("Response: ", response);
            const status = response.status
        } 
    }

    return (
        <>
            <ScrollView style={styles.containerRegister}>
                <View style={styles.contentsRegister}>
                    <Text style={styles.titleRegister}>Cadastro ONG/Petshop</Text>
                    <Text style={styles.label}>Responsável:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={context.user?.name}
                        editable={false}
                        selectTextOnFocus={false}
                        defaultValue={context.user?.name}
                    />
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
                        placeholder='XX.XXX.XXX/0001-XX'
                        onChangeText={cnpjONG => setCnpjONG(cnpjONG)}
                        defaultValue={cnpjONG}
                    />
                    <Text style={styles.label}>Telefone para Contato:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Ex.: (41)3333-3333'
                        onChangeText={phoneONG => setPhoneONG(phoneONG)}
                        defaultValue={phoneONG}
                    />
                    <Text style={styles.label}>Email para Contato:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Ex.: nomefantasia@emailcom'
                        onChangeText={mailONG => setMailONG(mailONG)}
                        defaultValue={mailONG}
                    />
                    <Text style={styles.label}>
                        Anexe uma foto do seu PetShop/ONG
                    </Text>
                    <TouchableOpacity
                        accessibilityLabel="Botão anexar certificado de comprovação da ONG/Petshop"
                        onPress={openImagePickerAsync}
                    >
                        <Text style={styles.attPhoto}>Anexar Foto</Text>
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