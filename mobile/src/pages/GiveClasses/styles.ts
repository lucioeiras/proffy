import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: '#8257e5',

    padding: 40,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#FFF',
    fontFamily: 'Archivo_700Bold',
    fontSize: 32,
    lineHeight: 37,

    maxWidth: 180,
  },

  description: {
    maxWidth: 240,

    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    lineHeight: 26,

    marginTop: 24,
  },

  boostContainer: {
    width: 151,

    flexDirection: 'row',
    justifyContent: 'center',

    paddingLeft: 16,
    marginTop: 72,
  },

  boostText: {
    color: '#24EF7F',
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 20,

    marginLeft: 24,
  },

  okButton: {
    height: 58,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 8,
    backgroundColor: '#04d361',

    marginVertical: 40,
  },

  okButtonText: {
    color: '#FFF',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  },
})

export default styles
