import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerRegister: {
        width: '100%',
    },
    contentsRegister: {
        display: 'flex',
        alignItems: 'flex-start',
        height: 'auto',
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 100,
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
    cancelButton: {
        width: '100%',
        backgroundColor: 'transparent',
        padding: 14,
        borderRadius: 50,
        marginTop: 15,
    },
    cancelButtonText: {
        textAlign: 'center',
        color: '#BDBDBD',
        fontWeight: 'bold',
    },
    attPhoto: {
        color: '#ce4a00',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        paddingVertical: 10,
    },
    titleRegister: {
        color: '#4f4f4f',
        fontSize: 22,
        paddingBottom: 20,
        paddingTop: 20,
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
    containerTypeAndDate: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    typeAndDate: {
        justifyContent: 'space-between',
        marginRight: 20,
    },
    obs: {
        fontSize: 12,
        color: '#828282',
    }
});