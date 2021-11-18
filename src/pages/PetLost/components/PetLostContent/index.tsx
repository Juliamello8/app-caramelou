import React, { useContext, useEffect } from 'react'
import { View, Image, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles';
import { AppContext } from '~/contexts/auth';
import api from '~/services/api';

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
        console.log("pet.name: ",pet.name);

        return pet;
    });

    return (
        <View style={styles.contentsPetLost}>  
            {
                context.petLost.map((pet:any) => {
                    <View key={pet.id}>
                        {console.log("Dentro do return: ", pet.name)}
                        <Text>aaaaaaaa {pet.name}</Text>
                    </View>
                    {/* <Image
                    source={{ uri: `data:image/png;base64,${pet.image}`}}
                    style={styles.imgLostBig}
                    /> */}
                    // <Text style={styles.textType}>
                    //     Raça: {pet.breed} 
                    // </Text>
                    {/* <View style={styles.containerLocation}  >
                        <MaterialIcons name="location-on" color="#CE4A00" size={25}/>
                        <Text style={styles.locationPet}>
                            pet.lastSee
                        </Text>
                        <Text style={styles.textName}>pet.name</Text>
                    </View>
                    
                    <View style={styles.typeAndDate}>
                        <Text style={styles.textType}>
                            Raça: pet.breed 
                        </Text>
                        <Text style={styles.textDate}>
                            Data: pet.date 
                        </Text>
                    </View>
                    <Text style={styles.descriptionPet}>
                        pet.description
                    </Text> */}
                })
            }   
        </View>
    )
};

export default PetLostContent;