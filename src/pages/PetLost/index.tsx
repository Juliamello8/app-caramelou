import React from 'react'
import { View, ScrollView } from 'react-native';
import SearchAreaPetLost from './components/SearchAreaPetLost';
import PetLostContent from './components/PetLostContent';

import { styles } from './styles';
import Footer from '~/components/Footer';

const PetLost = (): JSX.Element => {

    return (
        <>
            <ScrollView style={styles.containerLost}>
                <View style={styles.contentsLost}>
                    {/* <SearchAreaPetLost /> */}
                    <PetLostContent />
                </View>
            </ScrollView>
            <Footer />
        </>
    )
};

export default PetLost;