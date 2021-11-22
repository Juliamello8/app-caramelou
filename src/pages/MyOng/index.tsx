import React, { useContext, useEffect } from "react";


import { styles } from './styles'
import Footer from "~/components/Footer";
import NavigationService from "~/services/NavigationService";
import api from "~/services/api";
import { AppContext } from "~/contexts/auth";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { View, Image, Text, TouchableOpacity, Alert, } from "react-native";

import lostpet1 from '~/assets/lost1.png'

const MyOng = (): JSX.Element => {
  const context = useContext(AppContext);

    useEffect(()=> {
        api.setHeaders({Authorization: `Bearer ${context.store.token}`})
        getOngPet()
    },[])

    const getOngPet = async () => {
        const ongsData = await api.get('/ongPet')
        if(ongsData.ok){
            context.actions.setOngPet(ongsData.data)
            console.log("OngsData:", ongsData.data)
        } 
    }

    context.ongPet.map((ong:any) => { 
        return ong
    })

  function deleteOng(){
    Alert.alert("Parceiro Removido!")
    context.ongPet.map((ong:any) => { 
      api.delete(`/ongPet/${ong.id}`)
  })
  }

  return(
    <>
      <View style={styles.container}>
        {
          context.ongPet.map((ong:any) =>
          <View key={ong.id}>
        <Image
          source={{ uri: `data:image/png;base64,${ong.image}`}}
          style={styles.ongImg}
        />
        <Text style={styles.textName}>{ong.name}</Text>
        <Text style={styles.textCNPJ}>CNPJ: {ong.CNPJ} </Text>
        <Text style={styles.textCNPJ}>Telefone: {ong.phone} </Text>
        <Text style={styles.textCNPJ}>E-mail: {ong.mail} </Text>
        <TouchableOpacity
          onPress={deleteOng}
          style={styles.buttonExclude}
        >
          <MaterialIcons name="delete-outline" size={24} color="#EB5757" />
          <Text style={styles.textExclude}>Excluir ONG</Text>
        </TouchableOpacity>
      </View>
          )}
          </View>
      <Footer/>
    </>
  )
}

export default MyOng