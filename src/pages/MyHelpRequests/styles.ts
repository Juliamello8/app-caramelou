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
  viewContents:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: "90%"
  },
  viewId:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle:{
    fontSize: 18,
    color: '#4f4f4f',
    fontWeight: 'bold'
  },
  textDescription:{
    fontSize: 14,
    color: '#828282',
  }
})