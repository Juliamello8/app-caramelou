import React, { useContext, useEffect } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles';

import strayBig1 from "~/assets/strayBig1.png";
import api from '~/services/api';
import NavigationService from '~/services/NavigationService';
import { AppContext } from '~/contexts/auth';

const StrayPetContent = (): JSX.Element => {

    const context = useContext(AppContext);

    useEffect(()=> {
        api.setHeaders({Authorization: `Bearer ${context.store.token}`})
        getStrayPet()
    },[])

    const getStrayPet = async () => {
        const straysData = await api.get('/strayPet')
        if(straysData.ok){
            context.actions.setStrayPet(straysData.data)
        } 
    }

    context.strayPet.map((pet:any) => {
        return pet;
    });

    return (
        <View style={styles.contentsStrayPet}>
            {
                context.strayPet.map((pet:any) => {
                    <>
                        <Image
                            source={pet.image}
                            style={styles.imgStrayBig}
                        />
                        <View style={styles.containerLocation} key={pet.id}>
                            <MaterialIcons name="location-on" color="#CE4A00" size={25}/>
                            <Text style={styles.locationPet}>
                                {pet.location}
                            </Text>
                        </View>
                        <View style={styles.viewAdopted}>
                            <Text style={styles.descriptionPet}>
                                {pet.date}
                            </Text>
                            <Text style={styles.descriptionPet}>
                                {pet.description}
                            </Text>
                            <TouchableOpacity
                                style={styles.buttonAdopted}
                                onPress={()=>{NavigationService.navigate('RegisterAdopted')}}
                            >
                                <Text style={styles.textButtonAdopted}>adotei</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                })
            };
        </View>
    )
};

export default StrayPetContent;