import React, { useContext, useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  Alert
} from "react-native";

import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles'
import Footer from "~/components/Footer";
import NavigationService from "~/services/NavigationService";
import api from "~/services/api";
import { AppContext } from "~/contexts/auth";

const ProfileSettings = (): JSX.Element => {
  const context = useContext(AppContext);
  const [userData, setUserData] = useState('');
  const authContext = useContext(AppContext);

  function toggleUpdateDataUser(){

  }

  function excludeUser(){
    api.delete(`/user/${context.user?.id}`)
    Alert.alert("Conta excluída!")
    NavigationService.navigate('Login')
  }
  function excludeAlert(){
    Alert.alert(
      "Excluir Conta",
      "Tem certeza que deseja excluir sua conta?",
      [
        {
          text: "Cancelar",
          onPress: () =>  NavigationService.navigate('ProfileSettings') ,
          style: "cancel"
        },
        { text: "Excluir!",
          onPress: () => excludeUser(),
        }
      ]
    );
   
  }

  function logoutUser(){
    Alert.alert('Até mais! :) ')
    authContext.actions.signOut();
  }

  function logoutAlert() {
      Alert.alert(
        "Realizar Logoff",
        "Tem certeza que deseja sair?",
        [
          {
            text: "Cancelar",
            onPress: () =>  NavigationService.navigate('ProfileSettings') ,
            style: "cancel"
          },
          { text: "Sair!",
            onPress: () => logoutUser(),
          }
        ]
      );
  }
  return(
    <>
      <ScrollView style={styles.settingsUsersConteiner}>
        <View style={styles.settingsUsersContents}>
          {/* <TouchableOpacity
            style={styles.buttonUpdateData}
            onPress={toggleUpdateDataUser}
            accessibilityLabel="Botão para atualizar dados do usuário"
          >
            <Text style={styles.textButtonUpdateData}>atualizar dados</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            accessibilityLabel="Botão para listar entrar no mural de fotos"
            style={styles.viewButtonsSettings}
            onPress={() =>  NavigationService.navigate('PhotoWall')}
          >
            <MaterialIcons name="camera-roll" color="#4F4F4F" size={18} />
            <Text style={styles.textButtonsSettings}>Mural de Fotos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Botão para listar minhas publicações"
            style={styles.viewButtonsSettings}
            onPress={() =>  NavigationService.navigate('MyPosts')}
          >
            <MaterialIcons name="dynamic-feed" color="#4F4F4F" size={18} />
            <Text style={styles.textButtonsSettings}>Minhas Publicações</Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Botão para listar meu animal perdido"
            style={styles.viewButtonsSettings}
            onPress={() =>  NavigationService.navigate('MyLostPet')}
          >
            <MaterialIcons name="pets" color="#4F4F4F" size={18} />
            <Text style={styles.textButtonsSettings}>Meu animal perdido</Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Botão para listar meus pedidos de ajuda"
            style={styles.viewButtonsSettings}
            onPress={() => NavigationService.navigate('MyHelpRequests')}
          >
            <MaterialIcons name="volunteer-activism" color="#4F4F4F" size={18} />
            <Text style={styles.textButtonsSettings}>Meus pedidos de ajuda</Text>
          </TouchableOpacity>
          { /* SE TIVER CADASTRO */}
          <TouchableOpacity
            onPress={() =>  NavigationService.navigate('MyOng')}
            accessibilityLabel="Botão para acessar dados da minha ONG"
            style={styles.viewButtonsSettings}
          >
            <MaterialIcons name="domain" color="#4F4F4F" size={24} />
            <Text style={styles.textButtonsSettings}>Minha ONG/Petshop</Text>
          </TouchableOpacity>
          { /* SE NÃO TIVER CADASTRO */}
          <TouchableOpacity
            accessibilityLabel="Botão para registrar minha ONG/Petshop"
            style={styles.viewButtonsSettings}
            onPress={() => NavigationService.navigate('RegisterOng')}
          >
            <MaterialIcons name="domain" color="#4F4F4F" size={24} />
            <Text style={styles.textButtonsSettings}>Cadastrar ONG/Petshop</Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Botão para listar ONG's e Petshops cadastrados"
            style={styles.viewButtonsSettings}
            onPress={() => NavigationService.navigate('ListOngs')}
          >
            <MaterialIcons name="stars" color="#4F4F4F" size={24} />
            <Text style={styles.textButtonsSettings}>Lista de Parceiros</Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Botão para fazer logoff"
            style={styles.viewButtonsSettings}
            onPress={logoutAlert}
          >
            <MaterialIcons name="logout" color="#4F4F4F" size={24} />
            <Text style={styles.textButtonsSettings}>Sair</Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Botão para excluir conta"
            style={styles.viewButtonsSettings}
            onPress={excludeAlert}
          >
            <MaterialIcons name="delete" color="#ce0000" size={24} />
            <Text style={styles.textButtonsExclude}>Excluir conta</Text>
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
        {/* <View>
          <TouchableOpacity
            style={styles.buttonAddModerator}
            onPress={toggleUpdateDataUser}
            accessibilityLabel="Botão para adicionar moderador"
          >
            <Text style={styles.textButtonAddModerator}>+ moderador</Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>
      <Footer/>
    </>
  )
}

export default ProfileSettings;
