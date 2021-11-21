import React, { useContext, useEffect } from "react";


import { styles } from './styles'
import Footer from "~/components/Footer";
import NavigationService from "~/services/NavigationService";
import api from "~/services/api";
import { AppContext } from "~/contexts/auth";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { View, Image, Text, TouchableOpacity, Alert, } from "react-native";

import lostpet1 from '~/assets/lost1.png'

const MyHelpRequests = (): JSX.Element => {
  const context = useContext(AppContext);

  useEffect(()=> {
    api.setHeaders({Authorization: `Bearer ${context.store.token}`})
    getHelpRequests()
  },[]);

  const getHelpRequests = async () => {
    const requestsData = await api.get('/requestHelp')
    if(requestsData.ok){
        context.actions.setHelpRequests(requestsData.data)
    } 
  };

  context.helpRequests.map((help:any) => { 
    return help
  })

  function deleteHelp(){
    Alert.alert("Pedido de Ajuda Removido!")
    context.helpRequests.map((help:any) => { 
      api.delete(`/requestHelp/${help.id}`)
    })
  }

  return(
    <>
      <View style={styles.container}>
        {
          context.helpRequests.map((help:any) =>
          <View key={help.id}>
            <View style={styles.viewContents}>
          <Text style={styles.textTitle}>{help.title}</Text>
          <Text style={styles.textDescription}>{help.description}</Text>
        </View>
        <TouchableOpacity
          onPress={deleteHelp}
        >
          <MaterialIcons name="delete-outline" size={24} color="#EB5757" />
        </TouchableOpacity>
      </View>
          )}
          </View>
      <Footer/>
    </>
  )
}

export default MyHelpRequests