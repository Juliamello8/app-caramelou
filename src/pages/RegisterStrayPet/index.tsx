import React, { useContext, useState } from 'react'
import { View, ScrollView, TextInput, Text, TouchableOpacity, Alert, PanResponder } from 'react-native';
import Footer from '~/components/Footer';
import * as ImagePicker from 'expo-image-picker';

import { styles } from './styles';

import NavigationService from '~/services/NavigationService';
import api from '~/services/api';
import { AppContext } from '~/contexts/auth';

type Login = {
    email: string;
    senha: string;
}
interface StrayPetProps {
    values: Login;
}

const RegisterStrayPet = (): JSX.Element => {
    const context = useContext(AppContext);
    const [typePet, setTypePet] = useState('');
    const [adressPet, setAdressPet] = useState('');
    const [dateFind, setDateFind] = useState('');
    const [hourFind, setHourFind] = useState('');
    const [descriptionPet, setDescriptionPet] = useState('');
    const [imageStray, setImageStray] = useState('');

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
        if (permissionResult.granted === false) {
          alert("Permissão de acesso ao rolo da camera é neceesário!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync({base64:true});
        // @ts-ignore
        setImageStray(pickerResult.base64)
        console.log(pickerResult);
      }

    const sendRegister = async () => {
        if (typePet == ""  || adressPet == ""  || dateFind == ""  || hourFind == ""  || descriptionPet == "" ) {
            Alert.alert('Campo obrigatório vazio, favor verificar!')
            return
        } else {
            const response = await api.post('/strayPet', {
                type: typePet,
                location: adressPet,
                date: dateFind,
                hour: hourFind,
                description: descriptionPet,
                image: imageStray,
                userId: context.user?.id,
            },{maxContentLength: Infinity,
                maxBodyLength: Infinity});
            Alert.alert('Registrado com sucesso! :D')
            NavigationService.navigate('Home')
            console.log("Response: ", response);
        }
        
    }

    return (
        <>
            <ScrollView style={styles.containerRegister}>
                <View style={styles.contentsRegister}>
                    <Text style={styles.titleRegister}>Animal Abandonado</Text>
                    <Text style={styles.label}>Espécie do Animal:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Ex.: Cachorro'
                        onChangeText={typePet => setTypePet(typePet)}
                        defaultValue={typePet}
                    />
                    <Text style={styles.label}>Endereço encontrado:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Ex.: Rua Arthur Bernardes, 250'
                        onChangeText={adressPet => setAdressPet(adressPet)}
                        defaultValue={adressPet}
                    />
                    <View style={styles.containerTypeAndDate}>
                        <View style={styles.typeAndDate}>
                            <Text style={styles.label}>Data que foi visto:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Ex.: 10/03/2021'
                                onChangeText={dateFind => setDateFind(dateFind)}
                                defaultValue={dateFind}
                            />
                        </View>
                        <View style={styles.typeAndDate}>
                            <Text style={styles.label}>Horário que foi visto:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Ex.: 14:30'
                                onChangeText={hourFind => setHourFind(hourFind)}
                                defaultValue={hourFind}
                            />
                        </View>

                    </View>
                    <Text style={styles.label}>Descrição/Observação</Text>
                    <TextInput
                        style={styles.inputDescription}
                        placeholder='Descreva características e detalhes.'
                        onChangeText={descriptionPet => setDescriptionPet(descriptionPet)}
                        defaultValue={descriptionPet}
                    />

                    <TouchableOpacity
                        accessibilityLabel="Botão anexar foto animal de rua"
                        onPress={openImagePickerAsync}
                    >
                        <Text style={styles.attPhoto}>Anexar foto do animal</Text>
                    </TouchableOpacity>
                    <Text style={styles.obs}>* Formatos suportados: .jpg, .jpeg, .png</Text>
                    { }
                    <TouchableOpacity
                        accessibilityLabel="Botão para finalizar cadastro do animal abandonado"
                        style={styles.registerButton}
                        onPress={sendRegister}
                    >
                        <Text style={styles.registerButtonText}>registrar abandono</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        accessibilityLabel="Botão para cancelar cadastro do animal abandonado"
                        style={styles.cancelButton}
                        onPress={() => NavigationService.goBack()}
                    >
                        <Text style={styles.cancelButtonText}>cancelar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Footer />
        </>

    )
};

export default RegisterStrayPet;