import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8257E5',
  },

  topBar: {
    backgroundColor: '#774DD6',

    borderBottomWidth: 1,
    borderBottomColor: '#6842C2',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingTop: 48,
    paddingBottom: 16,
    paddingHorizontal: 40,
  },

  topBarText: {
    color: '#D4C2FF',
    fontFamily: 'Archivo_400Regular',
  },

  header: {
    backgroundColor: '#8257E5',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: 40,
    paddingBottom: 40,
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 40,
  },
})

export default styles
