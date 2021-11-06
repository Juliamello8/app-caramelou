import React, { useState } from 'react'
import { View, Image, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';

import strayBig1 from "~/assets/strayBig1.png";
import NavigationService from '~/services/NavigationService';
import { styles } from './styles';

const RegisterAdopted = (): JSX.Element => {
  const [petName, setPetName] = useState('');

  function sendFotoToWall(){
    NavigationService.navigate('PhotoWall')
    window.alert("Registro efetuado, assim que aprovado será enviado ao mural")
  }
  
  return(
    <ScrollView style={styles.contentsRegisterAdopted}>
      <Image
        source={strayBig1}
        style={styles.imgStrayBig}
      />
      <Text style={styles.label}>Qual o nome que escolheu para ele(a)?</Text>
      <TextInput
          style={styles.input}
          placeholder='Ex.: Fiona'
          onChangeText={userPetName => setPetName(petName)}
          defaultValue={petName}
      />
      <Text>Compartilhe sua foto com o bixinho para o nosso mural de fotos!</Text>
      <TouchableOpacity
          accessibilityLabel="Botão anexar sua foto com o animal adotado "
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
    </ScrollView>

  )
}

export default RegisterAdopted