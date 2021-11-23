import React, { useState, useContext, useEffect } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, Alert } from 'react-native';

import { styles } from './styles'

import defaultProfile from '~/assets/iconUser.png'
import Footer from '~/components/Footer';
import NavigationService from '~/services/NavigationService';
import { AppContext } from '~/contexts/auth';
import api from '~/services/api';

const HelpRequests = (): JSX.Element => {
    const context = useContext(AppContext);

    //console.log("teste" , context.user)

    useEffect(()=> {
        api.setHeaders({Authorization: `Bearer ${context.store.token}`})
        getHelpRequests()
    },[]);

    const getHelpRequests = async () => {
        const requestsData = await api.get('/requestHelp')
        if(requestsData.ok){
            context.actions.setHelpRequests(requestsData.data)
            console.log("StraysData:", requestsData.data)
        } 
    };

    context.helpRequests.map((help:any) => { 
        return help
    })

    const [photoProfile, setPhotoProfile] = useState(defaultProfile)

    function toggleHelp() {
        context.helpRequests.map((help:any) =>
        Alert.alert(
            "Obrigado por ajudar!!!",
            `Telefone para contato: ${help.phone} Email para contato: ${help.mail}`,
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        ));
    }
    return (
        <View style={styles.contentsHelpRequests} >
            <TouchableOpacity
                style={styles.buttonNewHelp}
                onPress={() => NavigationService.navigate('RegisterHelp')}
                accessibilityLabel="Botão para cadastrar novo pedido de ajuda"
            >
                <Text style={styles.textButtonNewHelp}>cadastrar pedido</Text>
            </TouchableOpacity>
            {
                context.helpRequests.map((help:any) =>
                <View key={help.id}>
                    <View style={styles.header}>
                    {/* SE PESSOA, ENTÃO photoProfile SE NÃO photoOng */}
                    <Image
                        source={{ uri: `data:image/png;base64,${context.user?.image}`}}
                        style={styles.img}
                    />
                        <View
                            style={styles.helpInfos}
                        >
                            <Text style={styles.helpTitle}>{help.title}</Text>
                            <Text style={styles.helpName}>{help.user}</Text>
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
                        {help.description}
                        </Text>
                        <Text style={styles.descriptionTime}>{help.time}</Text>
                    </View>
                </View>
                )
            }
            <Footer />
        </View>

    )
    
}           

export default HelpRequests;