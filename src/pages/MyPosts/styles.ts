import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 20,
    marginHorizontal: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomColor: '#bdbdbd',
    borderBottomWidth: 1,
    borderStyle: 'solid'
  },
  petImg:{
    width: 86,
    height: 76,
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