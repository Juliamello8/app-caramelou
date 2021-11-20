import React, { useContext, useEffect } from "react";


import { styles } from './styles'
import Footer from "~/components/Footer";
import NavigationService from "~/services/NavigationService";
import api from "~/services/api";
import { AppContext } from "~/contexts/auth";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { View, Image, Text, TouchableOpacity, Alert } from "react-native";

import stray1 from '~/assets/stray1.png'
import PetLost from "../PetLost";

const MyPosts = (): JSX.Element => {
  const context = useContext(AppContext);

    useEffect(()=> {
        api.setHeaders({Authorization: `Bearer ${context.store.token}`})
        getStrayPet()
    },[])

    const getStrayPet = async () => {
        const straysData = await api.get('/strayPet')
        if(straysData.ok){
            context.actions.setStraysPet(straysData.data)
            console.log("StraysData:", straysData.data)
        } 
    }

    context.strayPet.map((pet:any) => { 
        return pet
    })

    function deletePost(){
      Alert.alert("Públicação Removida!")
      api.delete(`/strayPet/${context.strayPet.id}`)
    }

    return(
      <>
    <View style={styles.container}>
      {
          context.strayPet.map((pet:any) =>
              <View key={pet.id}>
                  <Image
              source={{ uri: `data:image/png;base64,${pet.image}`}}
              style={styles.petImg}
              />
              <View style={styles.containerLocation} key={pet.id} >
                  <MaterialIcons name="location-on" color="#CE4A00" size={25}/>
                  <Text style={styles.textLocationPet}>
                    {pet.location}
                  </Text>
                  <Text style={styles.textDescriptionPet}>
                    {pet.description}
                  </Text>
              </View>
              <TouchableOpacity onPress={deletePost}>
                <MaterialIcons name="delete-outline" size={24} color="#EB5757" />
              </TouchableOpacity>
              </View>
          )
      }

    </View>
    <Footer/>
    </>
    )

}
        
export default MyPosts