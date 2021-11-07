import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles'

import Footer from '~/components/Footer';
import NavigationService from '~/services/NavigationService';
import { MaterialIcons } from '@expo/vector-icons'

const PendingHelpRequests = (): JSX.Element => {
    const [isApproved, setIsApproved]  = useState(false)

    function approveHelp(){
      setIsApproved(!isApproved)
    }

    return (
        <>
            <ScrollView style={styles.contentsPendingHelps} >
              <TouchableOpacity
              style={styles.buttonShowList}
              onPress={()=>{NavigationService.navigate('HelpRequests');}}
              accessibilityLabel="Botão para listar pedidos de ajuda já aprovados"
              >
                <Text style={styles.textButtonShowList}>ver pedidos aprovados</Text>
              </TouchableOpacity>
              <View style={styles.askContainer}>
                <View style={styles.header}>
                    <Text style={styles.helpTitle}>Ração para Cachorros</Text>
                    <TouchableOpacity onPress={approveHelp}>
                      <MaterialIcons
                        name={isApproved ? "toggle-on"  : "toggle-off"}
                        color={isApproved ? "#CE4A00"  : "#C4C4C4"}
                        size={38}
                      />
                    </TouchableOpacity>
                </View>
                <View style={styles.details}>
                    <Text style={styles.createdBy}>Criado por Ampara Animal</Text>
                    <Text style={styles.createdBy}>
                      Descrição:
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, felis sed elementum vehicula, elit eros tincidunt urna, vel fringilla orci magna a sem.
                      </Text>
                </View>
              </View>
            </ScrollView>
            <Footer />
        </>
    )
}

export default PendingHelpRequests;