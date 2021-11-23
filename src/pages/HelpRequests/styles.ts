import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    contentsHelpRequests: {
        height: '100%',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
    },
    img: {
        borderRadius: 20,
        width: 42,
        height: 42,
        marginLeft: 25,
        marginRight: 15,
    },
    helpInfos: {
        maxWidth: 200,
        width: '40%',
    },
    helpTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#828282',
    },
    helpName: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        color: '#4f4f4f'
    },
    buttonHelp: {
        backgroundColor: '#FEAE53',
        borderRadius: 50,
        width: 80,
        height: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 45,
    },
    textButton: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 17,

        color: '#CE4A00',
    },
    descriptions: {
        borderBottomWidth: 2,
        borderBottomColor: '#E0E0E0',
        borderStyle: 'solid',
        marginHorizontal: 25,
    },
    descriptionText: {
        color: '#828282',
        paddingTop: 15,
    },
    descriptionTime: {
        color: '#CE4A00',
        textAlign: 'right',
        paddingBottom: 10,
        fontSize: 12,
    },
    buttonNewHelp: {
        backgroundColor: 'transparent',
        borderRadius: 50,
        borderStyle: 'solid',
        borderColor: '#CE4A00',
        borderWidth: 2,
        padding: 15,
        margin: 10,
    },
    textButtonNewHelp: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#CE4A00',
        fontSize: 18,
        fontFamily: 'Montserrat_400Regular',
    }
})