import React from 'react'
import { View, Image, Text } from 'react-native';

import { styles } from './styles';

const PetLostContent = (): JSX.Element => {
    const lostBig1 = require('../../../../assets/lostBig1.png')
    const lostBig2 = require('../../../../assets/lostBig2.png')
    const pinMap = require('../../../../assets/iconPinMap.png')

    return (
        <View style={styles.contentsPetLost}>
            <Image
                source={lostBig1}
                style={styles.imgLostBig}
            />
            <View style={styles.containerLocation}>
                <Image source={pinMap} />
                <Text style={styles.locationPet}>
                    Pinheirinho, Curitiba-PR
                </Text>
            </View>
            <Text style={styles.textName}>Nome: Fiona</Text>
            <View style={styles.typeAndDate}>
                <Text style={styles.textType}>Raça: Vira-lata</Text>
                <Text style={styles.textDate}>Sumiu: 03/03/2021</Text>
            </View>
            <Text style={styles.descriptionPet}>
                Fugiu de casa, ela é dócil e possui uma coleira azul com o nome Fiona, atende também por fi ou fifi.
                Sumiu na região do Pinheirinho em Curitiba-PR.
            </Text>
            <Image
                source={lostBig2}
                style={styles.imgLostBig}
            />
            <View style={styles.containerLocation}>
                <Image source={pinMap} />
                <Text style={styles.locationPet}>
                    Rua Arthur Manoel Iwersen, 570
                </Text>
            </View>
            <Text style={styles.descriptionPet}>
                Visto por último próximo à panificadora Anjos Pães, está mancando e assustado.
            </Text>
        </View>
    )
};

export default PetLostContent;