import React from 'react';
import { Alert, Image, TouchableOpacity, View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles';

import NavigationService from '~/services/NavigationService';

const Footer = (): JSX.Element => {
    return (
        <View style={styles.containerFooter}>
            <TouchableOpacity
                onPress={() => NavigationService.navigate('PendingHelpRequests')}
            >
                <MaterialIcons name="home" color="#CE4A00" size={30} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => NavigationService.navigate('StrayPet')}
            >
                <MaterialIcons name="pets" color="#CE4A00" size={30} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => NavigationService.navigate('PetLost')}
            >
                <MaterialIcons name="gps-fixed" color="#CE4A00" size={30} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => NavigationService.navigate('HelpRequests')}
            >
                <MaterialIcons name="volunteer-activism" color="#CE4A00" size={30} />
            </TouchableOpacity>
            <TouchableOpacity
                // onPress={() => {
                //     Alert.alert("Poxa, volte logo! :( ", "Você realizou o logout e será redirecionado à tela de Login.", [{
                //         onPress: () => NavigationService.navigate('Login')
                //     }])
                // }}
                onPress={() => NavigationService.navigate('ProfileSettings')}
            >
                <MaterialIcons name="account-circle" color="#CE4A00" size={30} />
            </TouchableOpacity>
        </ View >
    )
};

export default Footer;