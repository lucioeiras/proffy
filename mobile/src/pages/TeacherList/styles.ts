import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7',
  },

  teacherList: {
    marginTop: -40,
  },

  searchForm: {
    paddingHorizontal: 40,
    paddingBottom: 40,
    marginBottom: 24,
  },

  label: {
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular',
  },

  input: {
    height: 54,
    justifyContent: 'center',

    borderRadius: 8,
    backgroundColor: '#fff',

    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputBlock: {
    width: '48%',
  },

  submitButton: {
    height: 56,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 8,
    backgroundColor: '#04d361',
  },

  submitButtonText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  },

  endText: {
    color: '#6A6180',
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 22,
    textAlign: 'center',

    marginVertical: 16,
  },
})

export default styles
