import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerRegister: {
        paddingTop: 20,
        width: '100%',
    },
    contentsStrayPet: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 25,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 100,
    },
    imgStrayBig: {
        width: 360,
        height: 230,
        borderRadius: 10,
        marginBottom: 10,
        resizeMode:'cover',        
    },
    locationPet: {
        fontSize: 18,
        color: '#4f4f4f',
    },
    descriptionPet: {
        fontSize: 14,
        color: '#828282',
        marginBottom: 20,
    },
    containerLocation: {
        display: 'flex',
        flexDirection: 'row'
    },
    viewAdopted:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
    },
    buttonAdopted: {
        width: 100,
        height: 40,
        backgroundColor: '#FEAE53',
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButtonAdopted: {
        color: '#CE4A00',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    typeAndDate: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10,
    },
    textType: {
        color: '#4f4f4f',
        textAlign: 'left',
    },
    textDate: {
        color: '#4f4f4f',
        textAlign: 'center',
    },

});