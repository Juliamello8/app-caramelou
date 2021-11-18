import React, { useContext, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';


import { styles } from './styles';
import { AppContext } from '~/contexts/auth';
import api from '~/services/api';


const StrayPetContent = (): JSX.Element => {
    const context = useContext(AppContext);

    useEffect(()=> {
        api.setHeaders({Authorization: `Bearer ${context.store.token}`})
        getStrayPet()
    },[]);

    const getStrayPet = async () => {
        const strayData = await api.get('/strayPet')
        if(strayData.ok){
            context.actions.setStraysPet(strayData.data)
        } 
    };

    context.strayPet.map((pet:any) => {
        console.log("pet.name: ",pet.name);

        return pet;
    });

    return (
        <View style={styles.contentsStrayPet}>
            <Text>OOI</Text>
            {
                context.strayPet.map((pet:any) => {
                    <View key={pet.id}>
                        {console.log("Dentro do return: ", pet.name)}
                        <Text>PQP {pet.name}</Text>
                    </View>
                })
            }
        </View>
    )
};

export default StrayPetContent;


{/* <Image
    source={pet.image}
    style={styles.imgStrayBig}
/>
<View style={styles.containerLocation} >
    <MaterialIcons name="location-on" color="#CE4A00" size={25}/>
    <Text style={styles.locationPet}>
        pet.location
    </Text>
</View>
<View style={styles.viewAdopted}>
    <Text style={styles.descriptionPet}>
        pet.date
    </Text>
    <Text style={styles.descriptionPet}>
        pet.description
    </Text>
    <TouchableOpacity
        style={styles.buttonAdopted}
        onPress={()=>{NavigationService.navigate('RegisterAdopted')}}
    >
        <Text style={styles.textButtonAdopted}>adotei</Text>
    </TouchableOpacity>
</View> */}