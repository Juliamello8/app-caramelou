import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container:{
    paddingVertical: 20,
    marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  ongImg:{
    width: 123,
    height: 123,
    borderRadius: 100,
    marginBottom: 20,
  },
  textName:{
    fontSize: 18,
    color: '#4f4f4f',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textCNPJ:{
    fontSize: 14,
    color: '#BDBDBD',
    marginBottom: 50,
  },
  buttonExclude:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  textExclude:{
    fontSize: 14,
    color: '#EB5757',
    marginLeft: 10,
  }
})