import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerRegister: {
        width: '100%',
    },
    contentsPetLost: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 25,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 100,
    },
    imgLostBig: {
        width: 360,
        height: 230,
        borderRadius: 10,
        marginBottom: 10,
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
    textName: {
        fontSize: 18,
        color: '#4f4f4f',
        paddingTop: 10,
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
    },
    textDate: {
        color: '#4f4f4f',
    }


});