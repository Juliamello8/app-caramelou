import React, { useContext, useEffect } from "react";


import { styles } from './styles'
import Footer from "~/components/Footer";
import NavigationService from "~/services/NavigationService";
import api from "~/services/api";
import { AppContext } from "~/contexts/auth";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { View, Image, Text, TouchableOpacity, } from "react-native";

import lostpet1 from '~/assets/lost1.png'

const MyHelpRequests = (): JSX.Element => {
  const context = useContext(AppContext);

  useEffect(()=> {
      api.setHeaders({Authorization: `Bearer ${context.store.token}`})
      getPetLost()
  },[])

  const getPetLost = async () => {
      const lostsData = await api.get('/lostPet')
      if(lostsData.ok){
          context.actions.setPetsLost(lostsData.data)
      } 
  }

  context.petLost.map((pet:any) => {
      return pet;
  });

  function deleteHelp(){
    
  }

  return(
    <>
      <View style={styles.container}>
        <View style={styles.viewContents}>
          <Text style={styles.textTitle}>Título</Text>
          <Text style={styles.textDescription}>Descrição</Text>
        </View>
        <TouchableOpacity
          onPress={deleteHelp}
        >
          <MaterialIcons name="delete-outline" size={24} color="#EB5757" />
        </TouchableOpacity>
      </View>
      <Footer/>
    </>
  )
}

export default MyHelpRequests