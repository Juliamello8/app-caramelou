import React, { useContext, useEffect } from 'react'
import { View, Image, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles';

import api from '~/services/api';
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
        } 
    }

    context.petLost.map((pet:any) => {
        return pet;
    });

    return (
        <View style={styles.contentsPetLost}>  
            {
                context.petLost.map((pet:any) => {
                    <>
                        <Image
                            source={pet.image}
                            style={styles.imgLostBig}
                        />
                        <View style={styles.containerLocation} key={pet.id} >
                            <MaterialIcons name="location-on" color="#CE4A00" size={25}/>
                            <Text style={styles.locationPet}>
                                {pet.lastSee}
                            </Text>
                            <Text style={styles.textName}>{pet.name}</Text>
                        </View>
                        
                        <View style={styles.typeAndDate}>
                            <Text style={styles.textType}>
                                Raça: {pet.breed} 
                            </Text>
                            <Text style={styles.textDate}>
                                Data: {pet.date} 
                            </Text>
                        </View>
                        <Text style={styles.descriptionPet}>
                            {pet.description}
                        </Text>
                    </>
                })
            }   
        </View>
    )
};

export default PetLostContent;