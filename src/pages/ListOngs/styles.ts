import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  contentsListOngs: {
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
    }
})