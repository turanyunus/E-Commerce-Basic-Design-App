import React from 'react'
import { View } from 'react-native'
import HeaderComponent from '../../components/header'

const ProductListScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent handleNavigate={navigation} backButton={false} filterButton={true} title={'Ürünler'} />
    </View>
  )
}

export default ProductListScreen
