import React, { useEffect, useState } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles';

import lostBig1 from "~/assets/lostBig1.png";
import lostBig2 from "~/assets/lostBig2.png";
import api from '~/services/api';
import NavigationService from '~/services/NavigationService';

const PetLostContent = (): JSX.Element => {
    const [pets, setPets] = useState([])

    useEffect(() => {
        const dataPet = async () => await api.get('/lostPet').then(response => response.data)
        setPets(dataPet.arguments)

    }, [])

    // pets.map(pet => {
    //     console.log(pet.name);

    //     return pet;
    // });
    return (
        <View style={styles.contentsPetLost}>
            {/* {
                pets.map(pet => {
                    console.log(pet.name);

                    return pet;
                })
            } */}
            <Image
                source={lostBig1}
                style={styles.imgLostBig}
            />
            <View style={styles.containerLocation} >
                <MaterialIcons name="location-on" color="#CE4A00" size={25}/>
                <Text style={styles.locationPet}>
                    Pinheirinho, Curitiba-PR
                </Text>
            </View>
            <View style={styles.typeAndDate}>
                <Text style={styles.textType}>
                    <strong>Raça:</strong> Vira-lata
                </Text>
                <Text style={styles.textDate}>
                    <strong>Sumiu:</strong> 03/03/2021
                </Text>
            </View>
            <Text style={styles.descriptionPet}>
                Fugiu de casa, ela é dócil e possui uma coleira azul com o nome Meg. Sumiu na região do Pinheirinho em Curitiba-PR.
            </Text>
        </View>
    )
};

export default PetLostContent;