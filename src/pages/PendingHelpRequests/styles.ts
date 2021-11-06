import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    contentsPendingHelps: {
        height: '100%',
        fontFamily: 'Montserrat',
        marginHorizontal: 20,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
        justifyContent: 'space-between',
    },
    askContainer:{
      marginBottom: 25,
      borderBottomWidth: 2,
      borderBottomColor: '#E0E0E0',
      borderStyle: 'solid',
    },
    ongName: {
      fontSize: 18,
      color: '#4f4f4f'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 25,
    },
    createdBy: {
        color: '#828282',
        paddingTop: 15,
        fontSize: 14,
    },
    buttonShowList: {
      backgroundColor: 'transparent',
      borderRadius: 50,
      borderStyle: 'solid',
      borderColor: '#CE4A00',
      borderWidth: 2,
      padding: 15,
      margin: 25,
    },
    textButtonShowList: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#CE4A00',
      fontSize: 18,
    },
})