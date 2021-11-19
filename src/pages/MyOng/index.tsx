import React, { useContext, useEffect } from "react";


import { styles } from './styles'
import Footer from "~/components/Footer";
import NavigationService from "~/services/NavigationService";
import api from "~/services/api";
import { AppContext } from "~/contexts/auth";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { View, Image, Text, TouchableOpacity, } from "react-native";

import lostpet1 from '~/assets/lost1.png'

const MyOng = (): JSX.Element => {

  function deleteOng(){
    
  }

  return(
    <>
      <View style={styles.container}>
        <Image
          // source={{ uri: `data:image/png;base64,${pet.image}`}}
          source={lostpet1}
          style={styles.ongImg}
        />
        <Text style={styles.textName}>Ampara Animal</Text>
        <Text style={styles.textCNPJ}>CNPJ: 1000-1000/0001-10 </Text>
        <TouchableOpacity
          onPress={deleteOng}
          style={styles.buttonExclude}
        >
          <MaterialIcons name="delete-outline" size={24} color="#EB5757" />
          <Text style={styles.textExclude}>Excluir ONG</Text>
        </TouchableOpacity>
      </View>
      <Footer/>
    </>
  )
}

export default MyOng