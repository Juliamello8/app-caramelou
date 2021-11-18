import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';

import NavigationService from '~/services/NavigationService';

import Lost2 from "~/assets/lost2.png";

import { styles } from './styles';
import { AppContext } from '~/contexts/auth';
import api from '~/services/api';

const PetLostCarousel = (): JSX.Element => {
    const context = useContext(AppContext);

    function onPressAllLost() {
        NavigationService.navigate('PetLost');
    }

    useEffect(()=> {
        api.setHeaders({Authorization: `Bearer ${context.store.token}`})
        getPetLost()
    },[])

    const getPetLost = async () => {
        const lostsData = await api.get('/petPet')
        if(lostsData.ok){
            context.actions.setPetsLost(lostsData.data)
            console.log("LostsData:", lostsData.data)
        } 
    }

    context.petLost.map((pet:any) => {
        console.log("pet.name: ",pet.name);

        return pet;
    });

    return (
        <View style={styles.containerPetLost}>
            <View style={styles.petLostHeaderHome}>
                <Text style={styles.titlePetHome}>Animais Perdidos</Text>
                <TouchableOpacity
                    onPress={onPressAllLost}
                    accessibilityLabel="Botão para registro de animais de rua"
                >
                    <Text style={styles.seeMore}>+ ver todos</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.carrousselPetLost}>

            {
                context.petLost.map((pet:any) =>
                    <View key={pet.id}>
                        <Image
                        source={{ uri: `data:image/png;base64,${pet.image}`}}
                        style={styles.petLost}
                        />
                    </View>
                )
            }
                {/* <Image
                    source={Lost2}
                    style={styles.petLost}
                /> */}
            </View>
        </ View>
    )
};

export default PetLostCarousel;