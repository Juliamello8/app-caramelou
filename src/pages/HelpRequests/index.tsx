import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles'

import defaultProfile from '~/assets/iconUser.png'
import Footer from '~/components/Footer';
import NavigationService from '~/services/NavigationService';
const HelpRequests = (): JSX.Element => {
    const [photoProfile, setPhotoProfile] = useState(defaultProfile)
    function toggleHelp() {

    }
    return (
        <>
            <ScrollView style={styles.contentsHelpRequests} >
                <TouchableOpacity
                    style={styles.buttonNewHelp}
                    onPress={() => NavigationService.navigate('RegisterHelp')}
                    accessibilityLabel="Botão para cadastrar novo pedido de ajuda"
                >
                    <Text style={styles.textButtonNewHelp}>cadastrar pedido</Text>
                </TouchableOpacity>
                <View style={styles.header}>
                    {/* SE PESSOA, ENTÃO photoProfile SE NÃO photoOng */}
                    <Image
                        source={photoProfile}
                        style={styles.img}
                    />
                    <View
                        style={styles.helpInfos}
                    >
                        <Text style={styles.helpTitle}>Ajuda com ração</Text>
                        <Text style={styles.helpName}>Ampara Animal</Text>
                    </View>
                    <TouchableOpacity
                        accessibilityLabel="Botão caso queira ajudar este pedido"
                        onPress={toggleHelp}
                        style={styles.buttonHelp}
                    >
                        <Text style={styles.textButton}>ajudar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.descriptions}>
                    <Text style={styles.descriptionText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, felis sed elementum vehicula, elit eros tincidunt urna, vel fringilla orci magna a sem.
                    </Text>
                    <Text style={styles.descriptionTime}>há 2 horas</Text>
                </View>
            </ScrollView>
            <Footer />
        </>
    )
}

export default HelpRequests;