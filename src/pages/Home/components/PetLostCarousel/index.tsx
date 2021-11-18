import React, { useContext, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import NavigationService from '~/services/NavigationService';

import { styles } from './styles';
import { AppContext } from '~/contexts/auth';
import api from '~/services/api';

const PetLostCarousel = (): JSX.Element => {
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
        <View style={styles.containerPetLost}>
            <View style={styles.petLostHeaderHome}>
                <Text style={styles.titlePetHome}>Animais Perdidos</Text>
                <TouchableOpacity
                    onPress={() => NavigationService.navigate('PetLost')}
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
            </View>
        </ View>
    )
};

export default PetLostCarousel;