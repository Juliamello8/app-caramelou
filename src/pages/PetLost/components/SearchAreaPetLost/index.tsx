import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles';


const SearchAreaPetLost = (): JSX.Element => {

    function onPressSearchPetLost() {

    }

    return (
        <View style={styles.contentsSearch}>
            <TouchableOpacity
                onPress={onPressSearchPetLost}
                accessibilityLabel="Botão para pesquisa de animais de rua"
                style={styles.searchLostPetButton}
            >
                <MaterialIcons name="search" color="#4F4F4F" size={25} style={styles.searchImg} />
            </TouchableOpacity>
            <TouchableOpacity>
            <MaterialIcons name="filter-alt" color="#4F4F4F" size={25} style={styles.filterIcon}/>

            </TouchableOpacity>
        </View>
    )
};

export default SearchAreaPetLost;