import React, { useContext, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import NavigationService from '~/services/NavigationService';

import { styles } from './styles';

import api from '~/services/api';
import { AppContext } from '~/contexts/auth';

const StrayPetCarousel = (): JSX.Element => {
    function onPressAllStray() {
        NavigationService.navigate("StrayPet")
    }

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
        console.log("pet.name: ",pet.name);

        return pet;
    });

    return (
        <View style={styles.containerStrayPet}>
            <View style={styles.strayPetHeaderHome}>
                <Text style={styles.titlePetHome}>Animais na Rua</Text>
                <TouchableOpacity
                    onPress={() => onPressAllStray()}
                    accessibilityLabel="Botão para registro de animais de rua"
                >
                    <Text style={styles.seeMore}>+ ver todos</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.carrousselStrayPet}>
            {
                context.strayPet.map((pet:any) =>
                    <View key={pet.id}>
                        <Image
                        source={{ uri: `data:image/png;base64,${pet.image}`}}
                        style={styles.strayPet}
                        />
                    </View>
                )
            }
            </View>
        </ View>
    )
};

export default StrayPetCarousel;

