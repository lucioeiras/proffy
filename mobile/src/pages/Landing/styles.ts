import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',

    backgroundColor: '#F0F0F7',
  },

  bannerContainer: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: '#8257E5',
  },

  banner: {
    width: '100%',
    resizeMode: 'contain',
  },

  contentContainer: {
    flex: 1,

    padding: 40,
  },

  title: {
    color: '#6A6180',
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    lineHeight: 30,
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },

  button: {
    height: 158,
    width: '48%',

    justifyContent: 'space-between',

    borderRadius: 8,
    backgroundColor: '#333',

    padding: 24,
  },

  buttonText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 20,
  },

  buttonPrimary: {
    backgroundColor: '#8257E5',
  },

  buttonSecondary: {
    backgroundColor: '#04D361',
  },

  totalConnections: {
    maxWidth: 140,

    color: '#9C98A6',
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 20,

    marginTop: 40,
  },
})

export default styles
