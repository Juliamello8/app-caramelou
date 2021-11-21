import React, { useContext, useEffect } from "react";


import { styles } from './styles'
import Footer from "~/components/Footer";
import NavigationService from "~/services/NavigationService";
import api from "~/services/api";
import { AppContext } from "~/contexts/auth";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { View, Image, Text, TouchableOpacity, Alert, ScrollView, } from "react-native";

import lostpet1 from '~/assets/lost1.png'

const MyLostPet = (): JSX.Element => {
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

  function deleteLostPet(){
    Alert.alert("Públicação Removida!")
    context.petLost.map((pet:any) => {
      api.delete(`/lostPet/${pet.id}`)
    });   
  }

  return(
    <>
    <ScrollView style={styles.containerRegister}>
      <View style={styles.container}>
        {
          context.petLost.map((pet:any) =>
            <View key={pet.id}>
              <View style={styles.viewPhotoName}>
                  <Image
                    source={{ uri: `data:image/png;base64,${pet.image}`}}
                    style={styles.petImg}
                  />
                <Text style={styles.textName}>{pet.name}</Text>
                <Text style={styles.textBreed}>{pet.breed}</Text>
              </View>
                <View style={styles.contents}>
                  <View style={styles.viewLocation}>
                    <MaterialIcons name="location-on" color="#CE4A00" size={25}/>
                      <Text style={styles.textLocationPet}>
                        {pet.lastSee}
                      </Text>
                      <TouchableOpacity onPress={deleteLostPet}>
                        <MaterialIcons name="delete-outline" size={24} color="#EB5757" />
                      </TouchableOpacity>
                  </View>
                </View>
            </View>
          )}
      </View>
    </ScrollView>
    <Footer/>
    </>
  )
}

export default MyLostPet