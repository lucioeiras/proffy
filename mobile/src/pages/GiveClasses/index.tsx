import React from 'react'
import { View, ImageBackground, Text, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

import giveCLassesBgImage from '../../assets/images/give-classes-background.png'
import rocketIcon from '../../assets/images/rocket.png'

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation()

  function handleNavigateBack() {
    goBack()
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveCLassesBgImage}
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Text>

        <View style={styles.boostContainer}>
          <Image source={rocketIcon} />
          <Text style={styles.boostText}>
            Preparare-se! {'  '} Vai ser o máximo.
          </Text>
        </View>
      </ImageBackground>

      <RectButton style={styles.okButton} onPress={handleNavigateBack}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  )
}

export default GiveClasses
