import React from 'react'
import { View, Image, Text } from 'react-native';

import { styles } from './styles';

import imgPet from "~/assets/photoWall.png";
import api from '~/services/api';

const PhotoWall = (): JSX.Element => {

    const dataPet = api.get('/strayPet').then(response => response.data).then(console.log)

    return (
        <View style={styles.containerPhoto}>
            <Image
                source={imgPet}
                style={styles.imgPetBig}
            />
            <Text style={styles.namePet}>
              Nome: Meg 
            </Text>
            <Text style={styles.namePerson}>
              Novo(a) dono(a): Valéria Rodrigues
            </Text>
            <Text style={styles.descriptionPhoto}>
              Encontrei a Meg através do Caramelou e estas são nossas caras de felicidade por termos nos encontrado 
            </Text>
            
            <Text style={styles.timePublished}>
                há 2 min.
            </Text>
        </View>
    )
};

export default PhotoWall;