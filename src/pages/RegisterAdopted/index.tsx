import React, { useContext, useState } from 'react'
import { View, Image, Text, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';

import happyBig2 from "~/assets/happyBig2.png";
import NavigationService from '~/services/NavigationService';
import { styles } from './styles';
import * as ImagePicker from 'expo-image-picker';
import api from '~/services/api';
import { AppContext } from '~/contexts/auth';
import Footer from '~/components/Footer';

const RegisterAdopted = (): JSX.Element => {
  const context = useContext(AppContext);
  const [petName, setPetName] = useState('');
  const [imagePet, setImagePet] = useState('');
  const [descriptionPet, setDescriptionPet] = useState('');

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (permissionResult.granted === false) {
      alert("Permissão de acesso ao rolo da camera é neceesário!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({base64:true});
    // @ts-ignore
    setImagePet(pickerResult.base64)
  }

  const sendFotoToWall = async () => {
    if (petName == ""  || imagePet == ""  || descriptionPet == "") {
      Alert.alert('Campo obrigatório vazio, favor verificar!')
      return
    } else {
      const response = await api.post('/adotei', {
          name: petName,
          image: imagePet,
          description: descriptionPet,
          userName: context.user?.name,
          userId: context.user?.id,
          time: new Date(),
        },{maxContentLength: Infinity,
            maxBodyLength: Infinity});
        Alert.alert("Obrigado por adotar! Nossa família cresceu! <3")
        NavigationService.navigate('PhotoWall')
        console.log("Response: ", response);
      }
    }

  
  return(
    <>
    <ScrollView style={styles.contentsRegisterAdopted}>
      <View style={styles.contentsRegister}>
      <Image
        source={happyBig2}
        style={styles.imgStrayBig}
      />
      <Text style={styles.label}>Qual o nome escolhido para ele(a)?</Text>
      <TextInput
          style={styles.input}
          placeholder='Ex.: Fiona'
          onChangeText={petName => setPetName(petName)}
          defaultValue={petName}
      />
      <Text style={styles.label}>Descrição/Observação</Text>
        <TextInput
          style={styles.inputDescription}
          placeholder='Descreva como foi esta adoção para você! :D'
          onChangeText={descriptionPet => setDescriptionPet(descriptionPet)}
          defaultValue={descriptionPet}
          multiline= {true}
          maxLength= {255}
          numberOfLines = {5}
        />
      <Text>Compartilhe sua foto com o bixinho para o nosso mural de fotos!</Text>
      <TouchableOpacity
          accessibilityLabel="Botão anexar sua foto com o animal adotado "
          onPress={openImagePickerAsync}
      >
          <Text style={styles.attPhoto}>Anexar foto</Text>
      </TouchableOpacity>
      <Text style={styles.obs}>* Formatos suportados: .jpg, .jpeg, .png</Text>
      <TouchableOpacity
          accessibilityLabel="Botão para finalizar registro de adoção"
          style={styles.registerButton}
          onPress={sendFotoToWall}
      >
          <Text style={styles.registerButtonText}>finalizar adoção</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
    <Footer />
    </>
  )
}

export default RegisterAdopted