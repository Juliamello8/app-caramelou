import React, { useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

import { MdOutlineCollectionsBookmark, MdPets, MdOutlineRemoveRedEye } from 'react-icons/md'
import { FaHandHoldingHeart } from 'react-icons/fa'
import { BiHomeHeart } from 'react-icons/bi'
import { IconContext } from "react-icons";

import { styles } from './styles'
import Footer from "~/components/Footer";

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
            <IconContext.Provider value={{ size: "18px", color: "#4F4F4F" }} >
              <MdOutlineCollectionsBookmark />
            </IconContext.Provider>
            <Text style={styles.textButtonsSettings}>Minhas Publicações</Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Botão para listar meus animais perdidos"
            style={styles.viewButtonsSettings}
          >
            <MdPets/>
            <Text style={styles.textButtonsSettings}>Meus animais perdidos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Botão para listar meus pedidos de ajuda"
            style={styles.viewButtonsSettings}
          >
            <FaHandHoldingHeart />
            <Text style={styles.textButtonsSettings}>Meus pedidos de ajuda</Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Botão para entrar na área da minha ONG/Petshop"
            style={styles.viewButtonsSettings}
          >
            <BiHomeHeart />
            <Text style={styles.textButtonsSettings}>Minha ONG/Petshop</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.settingsModeratorContents}>
          <TouchableOpacity
            accessibilityLabel="Botão para visualizar ONG/Petshop pendentes"
            style={styles.viewButtonsSettings}
          >
            <MdOutlineRemoveRedEye />
            <Text style={styles.textButtonsSettings}>ONG's pendentes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Botão para visualizar pedidos de ajuda pendentes"
            style={styles.viewButtonsSettings}
          >
            <MdOutlineRemoveRedEye />
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
