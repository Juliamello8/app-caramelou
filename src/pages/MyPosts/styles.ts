import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerRegister: {
    width: '100%',
  },
  container:{
    paddingVertical: 20,
    marginHorizontal: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomColor: '#bdbdbd',
    borderBottomWidth: 1,
    borderStyle: 'solid'
  },
  viewPhotoName:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  petImg:{
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  contents:{
    display: 'flex',
    flexDirection: 'column'
  },
  containerLocation:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textLocationPet:{
    fontSize: 14,
    color: '#4F4F4F',
  },
  textDescriptionPet:{
    fontSize: 12,
    color: '#828282',
  },
})