import React from 'react'
import { View } from 'react-native'
import HeaderComponent from '../../components/header'
import Footer from '../../components/baskets/footer'
import BasketComponent from '../../components/baskets/basket-component'
import ItemsContainer from '../../components/baskets/items-container'

const BasketScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent handleNavigate={navigation} backButton={false} filterButton={true} title={'Sepetim'} />
      <View style={{ flex: 1 }}>
        <ItemsContainer />
        <BasketComponent />
        <Footer navigation={navigation} />
      </View>
    </View>
  )
}

export default BasketScreen
