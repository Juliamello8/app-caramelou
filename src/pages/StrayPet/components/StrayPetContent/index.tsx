import React from 'react'
import { View, Image, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles';

import strayBig1 from "~/assets/strayBig1.png";
import strayBig2 from "~/assets/strayBig2.png";
import api from '~/services/api';

const StrayPetContent = (): JSX.Element => {

    const dataPet = api.get('/strayPet').then(response => response.data).then(console.log)

    return (
        <View style={styles.contentsStrayPet}>
            <Image
                source={strayBig1}
                style={styles.imgStrayBig}
            />
            <View style={styles.containerLocation}>
                <MaterialIcons name="location-on" color="#CE4A00" size={25}/>
                <Text style={styles.locationPet}>
                    Rua Arthur Manoel Iwersen, 570
                </Text>
            </View>
            <Text style={styles.descriptionPet}>
                Visto por último próximo à panificadora Anjos Pães,
                está mancando e assustado.
            </Text>
            <Image
                source={strayBig2}
                style={styles.imgStrayBig}
            />
            <View style={styles.containerLocation}>
                <MaterialIcons name="location-on" color="#CE4A00" size={25}/>
                <Text style={styles.locationPet}>
                    Rua Billy, 100
                </Text>
            </View>
            <Text style={styles.descriptionPet}>
                Visto por último próximo à panificadora Anjos Pães,
                está mancando e assustado.
            </Text>
        </View>
    )
};

export default StrayPetContent;