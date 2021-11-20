import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container:{
    paddingVertical: 20,
    marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
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
    width: 86,
    height: 76,
    objectFit: 'cover',
    borderRadius: 10,
  },
  textName:{
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#4F4F4F',
  },
  textBreed:{
    fontSize: 12,
    color: '#828282'
  },
  contents:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  viewLocation:{
    display: 'flex',
    flexDirection: 'row'
  },
  textLocationPet:{
    fontSize: 14,
    color: '#4f4f4f',
  },
  textLastSee:{
    fontSize: 12,
    color: '#828282'
  },
  textDescription:{
    fontSize: 12,
    color: '#828282',
  }
})