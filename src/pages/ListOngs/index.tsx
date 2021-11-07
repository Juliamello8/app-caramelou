import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';

import { styles } from './styles'

import Footer from '~/components/Footer';

const ListOngs = (): JSX.Element => {

    return (
        <>
            <ScrollView style={styles.contentsListOngs} >
              <View style={styles.askContainer}>
                <View style={styles.header}>
                    <Text style={styles.ongName}>Ampara Animal</Text>
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

export default ListOngs;