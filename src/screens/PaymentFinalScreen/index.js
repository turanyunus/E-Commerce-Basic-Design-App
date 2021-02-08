import React from 'react'
import { View } from 'react-native'
import HeaderComponent from '../../components/header'

const PaymentFinalScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent
        handleNavigate={navigation}
        backButton={false}
        filterButton={true}
        title={'Ödeme Son Bilgileri'}
      />
    </View>
  )
}

export default PaymentFinalScreen
