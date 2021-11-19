import React, { useContext, useEffect } from "react";


import { styles } from './styles'
import Footer from "~/components/Footer";
import NavigationService from "~/services/NavigationService";
import api from "~/services/api";
import { AppContext } from "~/contexts/auth";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { View, Image, Text, TouchableOpacity } from "react-native";

import stray1 from '~/assets/stray1.png'

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
      
    }

    return(
      <>
        <View style={styles.container}>
          <Image
            // source={{ uri: `data:image/png;base64,${pet.image}`}}
            source={stray1}
            style={styles.petImg}
          />
          <View style={styles.contents}>
            <View style={styles.containerLocation}>
              <MaterialIcons name="location-on" color="#CE4A00" size={25}/>
              <Text style={styles.textLocationPet}>
                  {/* {pet.location} */}
                  ~ localização ~
              </Text>
            </View>
            <Text style={styles.textDescriptionPet}> ~ descrição ~ </Text>
          </View>
          <TouchableOpacity onPress={deletePost}>
            <MaterialIcons name="delete-outline" size={24} color="#EB5757" />
          </TouchableOpacity>
        </View>
        <Footer/>
      </>
    )
}

export default MyPosts