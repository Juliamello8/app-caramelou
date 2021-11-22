import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, View, Text } from 'react-native';

import { styles } from './styles'

import Footer from '~/components/Footer';
import { AppContext } from '~/contexts/auth';
import api from '~/services/api';


const ListOngs = (): JSX.Element => {
    const context = useContext(AppContext);

    useEffect(()=> {
        api.setHeaders({Authorization: `Bearer ${context.store.token}`})
        getOngPet()
    },[])

    const getOngPet = async () => {
        const ongsData = await api.get('/ongPet')
        if(ongsData.ok){
            context.actions.setOngPet(ongsData.data)
            console.log("OngsData:", ongsData.data)
        } 
    }

    context.ongPet.map((ong:any) => { 
        return ong
    })

    return (
        <>
            <ScrollView style={styles.contentsListOngs} >
                {
            context.ongPet.map((ong:any) =>
             <View key={ong.id}>
              <View style={styles.askContainer}>
                <View style={styles.header}>
                    <Text style={styles.ongName}>{ong.name}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.createdBy}>Responsável: {ong.owner}</Text>
                    <Text style={styles.createdBy}>CNPJ: {ong.CNPJ}</Text>
                    <Text style={styles.createdBy}>Telefone: {ong.phone}</Text>
                    <Text style={styles.createdBy}>Email: {ong.mail}</Text>
                </View>
              </View>
            </View>
            )}
            </ScrollView>
            <Footer />
        </>
    )
}

export default ListOngs;