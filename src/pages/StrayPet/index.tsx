import React from 'react'
import { ScrollView, View } from 'react-native';
import Footer from '~/components/Footer';
import SearchAreaStrayPet from './components/SearchAreaStrayPet';
import StrayPetContent from './components/StrayPetContent';

import { styles } from './styles';

const StrayPet = (): JSX.Element => {

    return (
        <>
            <ScrollView style={styles.containerStray}>
                <View style={styles.contentsStray}>
                    {/* <SearchAreaStrayPet /> */}
                    <StrayPetContent />
                </View>
            </ScrollView>
            <Footer/>
        </>
    )
};

export default StrayPet;