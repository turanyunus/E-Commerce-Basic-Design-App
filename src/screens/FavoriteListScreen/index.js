import React from 'react'
import { View } from 'react-native'
import HeaderComponent from '../../components/header'

const FavoriteListScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent handleNavigate={navigation} backButton={false} filterButton={true} title={'Favori Listem'} />
    </View>
  )
}

export default FavoriteListScreen
