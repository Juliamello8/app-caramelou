import React, { useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles'
import Footer from "~/components/Footer";
import NavigationService from "~/services/NavigationService";

const ProfileSettings = (): JSX.Element => {
  const [userData, setUserData] = useState('');

  function toggleUpdateDataUser(){

  }

  return(
    <>
      <ScrollView style={styles.settingsUsersConteiner}>
        <View style={styles.settingsUsersContents}>
          <TouchableOpacity
            style={styles.buttonUpdateData}
            onPress={toggleUpdateDataUser}
            accessibilityLabel="Botão para atualizar dados do usuário"
          >
            <Text style={styles.textButtonUpdateData}>atualizar dados</Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Botão para listar minhas publicações"
            style={styles.viewButtonsSettings}
          >
            <MaterialIcons name="dynamic-feed" color="#4F4F4F" size={18} />
            <Text style={styles.textButtonsSettings}>Minhas Publicações</Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Botão para listar meus animais perdidos"
            style={styles.viewButtonsSettings}
          >
            <MaterialIcons name="pets" color="#4F4F4F" size={18} />
            <Text style={styles.textButtonsSettings}>Meus animais perdidos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Botão para listar meus pedidos de ajuda"
            style={styles.viewButtonsSettings}
          >
            <MaterialIcons name="volunteer-activism" color="#4F4F4F" size={18} />
            <Text style={styles.textButtonsSettings}>Meus pedidos de ajuda</Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Botão para entrar na área da minha ONG/Petshop"
            style={styles.viewButtonsSettings}
          >
            <MaterialIcons name="domain" color="#4F4F4F" size={24} />
            <Text style={styles.textButtonsSettings}>Minha ONG/Petshop</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.settingsModeratorContents}>
          <TouchableOpacity
            accessibilityLabel="Botão para visualizar ONG/Petshop pendentes"
            style={styles.viewButtonsSettings}
            onPress={() => NavigationService.navigate('PendingOngs')}
          >
            <MaterialIcons name="visibility" color="#CE4A00" size={24} />
            <Text style={styles.textButtonsSettings}>ONG's pendentes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Botão para visualizar pedidos de ajuda pendentes"
            style={styles.viewButtonsSettings}
            onPress={() => NavigationService.navigate('PendingHelpRequests')}
          >
            <MaterialIcons name="visibility" color="#CE4A00" size={24} />
            <Text style={styles.textButtonsSettings}>Pedidos de ajuda pendentes</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonAddModerator}
            onPress={toggleUpdateDataUser}
            accessibilityLabel="Botão para atualizar dados do usuário"
          >
            <Text style={styles.textButtonAddModerator}>atualizar dados</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer/>
    </>
  )
}

export default ProfileSettings;
