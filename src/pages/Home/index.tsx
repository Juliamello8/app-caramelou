import React, { useContext, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';

import Buttons from './components/Buttons';

import PetLostCarousel from './components/PetLostCarousel';
import StrayPetCarousel from './components/StrayPetCarousel';


import { styles } from './styles';
import Footer from '~/components/Footer';
import { AppContext } from '~/contexts/auth';
import api from '~/services/api';


const Home = (): JSX.Element => {
  const context = useContext(AppContext);
  
  useEffect(()=>{
    api.setHeaders({Authorization: `Bearer ${context.store.token}`})
    getUsers()
  },[])
  
  const getUsers = async () => {
    const userData = await api.get('/user')
    console.log({userData})
    if(userData.ok && userData.data){
      context.actions.setCurrentUser(userData.data)
    }
  }

  return (
    <>
      <ScrollView style={styles.containerHome} >
        <View style={styles.contentsHome}>
          <Buttons />
          <StrayPetCarousel />
          <PetLostCarousel />
        </View>
      </ ScrollView >
      <Footer />
    </>
  )
};

export default Home;