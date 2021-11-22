import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    contentsRegisterAdopted: {
        width: '100%',
    },
    contentsRegister: {
      display: 'flex',
      alignItems: 'flex-start',
      height: 'auto',
      backgroundColor: '#fff',
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
    },
    label: {
      fontSize: 12,
      color: '#828282',
      paddingBottom: 5,
      textAlign: 'left',
    },
    input: {
        backgroundColor: '#f2f2f2',
        padding: 14,
        color: '#828282',
        width: '100%',
        minWidth: 145,
        marginBottom: 10,
    },
    inputDescription: {
      backgroundColor: '#f2f2f2',
      padding: 14,
      color: '#828282',
      width: '100%',
      height: 150,
      textAlign: 'left',
      textAlignVertical: 'top',
      marginBottom: 10,
      maxWidth: 350,
    },
    obs: {
      fontSize: 12,
      color: '#828282',
    },
    attPhoto: {
      color: '#ce4a00',
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      paddingVertical: 10,
    },
    registerButton: {
      width: '100%',
      backgroundColor: '#FEAE53',
      padding: 14,
      borderRadius: 50,
      marginTop: 15,
    },
    registerButtonText: {
        textAlign: 'center',
        color: '#CE4A00',
        fontWeight: 'bold',
    },
  })