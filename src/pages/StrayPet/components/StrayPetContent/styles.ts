import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    contentsStrayPet: {
        width: '100%',
        padding: 20,
        display: 'flex',
        justifyContent: 'center'
    },
    imgStrayBig: {
        width: 360,
        height: 230,
        borderRadius: 10,
        marginBottom: 10,
    },
    locationPet: {
        fontSize: 18,
        color: '#4f4f4f',
        paddingLeft: 15,
    },
    descriptionPet: {
        fontSize: 14,
        color: '#828282',
        marginBottom: 10,
        width: '70%',
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

});