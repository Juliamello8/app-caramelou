import React, { useContext, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


import { styles } from './styles';
import NavigationService from '~/services/NavigationService';
import { AppContext } from '~/contexts/auth';
import api from '~/services/api';
import Footer from '~/components/Footer';

const StrayPetContent = (): JSX.Element => {
    const context = useContext(AppContext);

    useEffect(()=> {
        api.setHeaders({Authorization: `Bearer ${context.store.token}`})
        getStrayPet()
    },[]);

    const getStrayPet = async () => {
        const straysData = await api.get('/strayPet')
        if(straysData.ok){
            context.actions.setStraysPet(straysData.data)
            console.log("StraysData:", straysData.data)
        } 
    };

    context.strayPet.map((pet:any) => { 
        return pet
    })

    return (
        <>
        <ScrollView style={styles.containerRegister}>
            <View style={styles.contentsStrayPet}>
                {
                    context.strayPet.map((pet:any) =>
                        <View key={pet.id}>
                    <Image
                    source={{ uri: `data:image/png;base64,${pet.image}`}}
                    style={styles.imgStrayBig}
                    />
                    <View style={styles.containerLocation} key={pet.id} >
                        <MaterialIcons name="location-on" color="#CE4A00" size={25}/>
                        <Text style={styles.locationPet}>
                            {pet.location}
                        </Text>
                    </View>
                    <View style={styles.viewAdopted}>
                        <View>
                            <View style={styles.typeAndDate}>
                                <Text style={styles.textType}>
                                    Data: {pet.date} 
                                </Text>
                                <Text style={styles.textDate}>
                                    Última vez visto às: {pet.hour} 
                                </Text>
                            </View>
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
                    </View>
                </View>
                )}
            </View>
        </ScrollView>
        </>
    )   
}

export default StrayPetContent;