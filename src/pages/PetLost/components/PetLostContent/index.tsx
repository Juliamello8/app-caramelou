import React, { useContext, useEffect, useState } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles';

import lostBig1 from "~/assets/lostBig1.png";
import lostBig2 from "~/assets/lostBig2.png";
import api from '~/services/api';
import NavigationService from '~/services/NavigationService';
import { AppContext } from '~/contexts/auth';

const PetLostContent = (): JSX.Element => {
    const context = useContext(AppContext);

    useEffect(()=> {
        api.setHeaders({Authorization: `Bearer ${context.store.token}`})
        getPetLost()
    },[])

    const getPetLost = async () => {
        const lostsData = await api.get('/lostPet')
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
        <View style={styles.contentsPetLost}>  
            <Image
                source={lostBig1}
                style={styles.imgLostBig}
            />
            <View style={styles.containerLocation} >
                <MaterialIcons name="location-on" color="#CE4A00" size={25}/>
                <Text style={styles.locationPet}>
                    {
                        context.petLost.map((pet:any) => {
                            `${pet.breed}`
                        })
                    }
                </Text>
            </View>
            <View style={styles.typeAndDate}>
                <Text style={styles.textType}>
                    {
                        context.petLost.map((pet:any) => {
                            <p>Raça: pet.breed </p>
                        })
                    }
                </Text>
                <Text style={styles.textDate}>
                    {
                        context.petLost.map((pet:any) => {
                            <p>Data: pet.date </p>
                        })
                    }
                </Text>
            </View>
            <Text style={styles.descriptionPet}>
                {
                    context.petLost.map((pet:any) => {
                        <p>pet.description</p>
                    })
                }
            </Text>
        </View>
    )
};

export default PetLostContent;