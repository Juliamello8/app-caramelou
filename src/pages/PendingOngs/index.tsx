import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles'

import Footer from '~/components/Footer';
import { MaterialIcons } from '@expo/vector-icons'
import NavigationService from '~/services/NavigationService';

const PendingOngs = (): JSX.Element => {
    const [isApproved, setIsApproved]  = useState(false)

    function approveOng(){
      setIsApproved(!isApproved)
    }

    return (
        <>
            <ScrollView style={styles.contentsPendingOngs} >
              <TouchableOpacity
              style={styles.buttonShowList}
              onPress={()=>{NavigationService.navigate('ListOngs');}}
              accessibilityLabel="Botão para listar ONG's já aprovadas"
              >
                <Text style={styles.textButtonShowList}>ver ONG's aprovadas</Text>
              </TouchableOpacity>
              <View style={styles.askContainer}>
                <View style={styles.header}>
                    <Text style={styles.ongName}>Ampara Animal</Text>
                    <TouchableOpacity onPress={approveOng}>
                      <MaterialIcons
                        name={isApproved ? "toggle-on"  : "toggle-off"}
                        color={isApproved ? "#CE4A00"  : "#C4C4C4"}
                        size={38}
                      />
                    </TouchableOpacity>
                </View>
                <View style={styles.details}>
                    <Text style={styles.createdBy}>Criado por Ciclano Gomes</Text>
                    <Text style={styles.createdBy}>CNPJ: 0001/00000000-0</Text>
                </View>
              </View>
            </ScrollView>
            <Footer />
        </>
    )
}

export default PendingOngs;