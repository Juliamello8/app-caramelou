import React, { useContext, useEffect } from 'react'
import { View, Image, Text, ScrollView } from 'react-native';

import { styles } from './styles';

import imgPet from "~/assets/photoWall.png";
import api from '~/services/api';
import Footer from '~/components/Footer';
import { AppContext } from '~/contexts/auth';

const PhotoWall = (): JSX.Element => {

  const context = useContext(AppContext);

  useEffect(()=> {
      api.setHeaders({Authorization: `Bearer ${context.store.token}`})
      getPhotoWall()
  },[]);

  const getPhotoWall = async () => {
      const photosData = await api.get('/adotei')
      if(photosData.ok){
          context.actions.setPhotoWall(photosData.data)
          console.log("photosData:", photosData.data)
      } 
  };

  context.photoWall.map((photo:any) => { 
      return photo
  })


    return (
      <>
      <ScrollView style={styles.containerPhoto}>
        {
          context.photoWall.map((photo:any) =>
            <View key={photo.id}>
              <View style={styles.contentsPhoto}>
                  <Image
                    source={{ uri: `data:image/png;base64,${photo.image}`}}
                    style={styles.imgPetBig}
                  />
                <Text style={styles.namePet} key={photo.id}>
                  Nome: {photo.name} 
                </Text>
                <Text style={styles.namePerson}>
                  Novo(a) dono(a): {photo.userName}
                </Text>
                <Text style={styles.descriptionPhoto}>
                  {photo.description}
                </Text>
                <Text style={styles.timePublished}>
                  {photo.time}
                </Text>
              </View>
            </View>
          )}
      </ScrollView>
    <Footer/>
      </>
    )
};

export default PhotoWall;