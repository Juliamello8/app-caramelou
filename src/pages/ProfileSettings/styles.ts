import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  settingsUsersConteiner: {
    width: 'auto',
    paddingBottom : 100,
    marginBottom: 85,
  },
  settingsUsersContents: {
    marginBottom: 40,
  },
  buttonUpdateData: {
    backgroundColor: 'transparent',
    borderRadius: 50,
    borderStyle: 'solid',
    borderColor: '#CE4A00',
    borderWidth: 2,
    padding: 15,
    marginHorizontal: 25,
    marginBottom: 60,
    marginTop: 25
  },
  textButtonUpdateData: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#CE4A00',
    fontSize: 18,
  },
  viewButtonsSettings: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 15,
    color: '#4F4F4F',
  },
  textButtonsSettings: {
    fontSize: 18,
    paddingLeft: 20,
    color: '#4F4F4F',
  },
  textButtonsExclude: {
    fontSize: 18,
    paddingLeft: 20,
    color: '#ce0000',
  },
  settingsModeratorContents: {
    borderTopWidth: 1,
    borderTopColor: '#BDBDBD',
    paddingTop: 40,
    color: '#CE4A00',
    fontWeight: 'bold'
  },
  buttonAddModerator: {
    backgroundColor: '#FEAE53',
    borderRadius: 50,
    padding: 15,
    marginHorizontal: 25,
    marginBottom: 30,
    marginTop: 30,
  },
  textButtonAddModerator: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#CE4A00',
    fontSize: 18,
  },
})