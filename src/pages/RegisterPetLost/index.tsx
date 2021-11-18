import React, { useState } from 'react'
import { View, ScrollView, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import Footer from '~/components/Footer';

import { styles } from './styles';

import NavigationService from '~/services/NavigationService';
import api from '~/services/api';

type Login = {
    email: string;
    senha: string;
}
interface PetLostProps {
    values: Login;
}

const RegisterPetLost = (): JSX.Element => {
    const [namePet, setNamePet] = useState('');
    const [typePet, setTypePet] = useState('');
    const [dateLost, setDateLost] = useState('');
    const [breedPet, setBreedPet] = useState(''); //raça
    const [descriptionPet, setDescriptionPet] = useState('');
    const [lastLocation, setLastLocation] = useState('');

    const sendRegister = async () => {
        if (namePet == ""  || typePet == ""  || lastLocation == ""  || dateLost == ""  || descriptionPet == "" || breedPet == "") {
            Alert.alert('Campo obrigatório vazio, favor verificar!')
            return
        } else {
            const response = await api.post('/lostPet', {
                name: namePet,
                type: typePet,
                lastSee: lastLocation,
                date: dateLost,
                description: descriptionPet,
                breed: breedPet,
            });
            Alert.alert('Registrado com sucesso! :D')
            NavigationService.navigate('Home')
            console.log("Response: ", response);
        }
    }

    return (
        <>
            <ScrollView style={styles.containerRegister}>
                <View style={styles.contentsRegister}>
                    <Text style={styles.titleRegister}>Perda de animal</Text>
                    <Text style={styles.label}>Nome do Animal:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Ex.: Fiona'
                        onChangeText={namePet => setNamePet(namePet)}
                        defaultValue={namePet}
                    />
                    <Text style={styles.label}>Selecione o tipo do Animal:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Ex.: Cachorro'
                        onChangeText={typePet => setTypePet(typePet)}
                        defaultValue={typePet}
                    />
                    <View style={styles.containerTypeAndDate}>
                        <View style={styles.typeAndDate}>
                            <Text style={styles.label}>Data do Sumiço:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Ex.: 10/03/2021'
                                onChangeText={dateLost => setDateLost(dateLost)}
                                defaultValue={dateLost}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>Raça do Animal</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Ex.: Pinscher'
                                onChangeText={breedPet => setBreedPet(breedPet)}
                                defaultValue={breedPet}
                            />
                        </View>
                    </View>
                    <Text style={styles.label}>Descrição/Observação</Text>
                    <TextInput
                        style={styles.inputDescription}
                        placeholder='Descreva características e detalhes'
                        onChangeText={descriptionPet => setDescriptionPet(descriptionPet)}
                        defaultValue={descriptionPet}
                    />
                    <Text style={styles.label}>Último local que foi visto</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Ex.: Rua Arthur Bernardes, 250'
                        onChangeText={lastLocation => setLastLocation(lastLocation)}
                        defaultValue={lastLocation}
                    />
                    <TouchableOpacity
                        accessibilityLabel="Botão para anexar foto do animal perdido"
                    >
                        <Text style={styles.attPhoto}>Anexar foto do animal</Text>
                    </TouchableOpacity>
                    <Text style={styles.obs}>* Formatos suportados: .jpg, .jpeg, .png</Text>
                    <TouchableOpacity
                        accessibilityLabel="Botão para finalizar cadastro do animal perdido"
                        style={styles.registerButton}
                        // onPress={() => NavigationService.navigate('PetLost')}
                        onPress={sendRegister}
                    >
                        <Text style={styles.registerButtonText}>registrar sumiço</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        accessibilityLabel="Botão para cancelar cadastro do animal perdido"
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

export default RegisterPetLost;