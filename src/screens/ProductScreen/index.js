import React from 'react'
import { Image, View } from 'react-native'
import TabMenuComponent from '../../components/tabs/tab-menu'
import HeaderComponent from '../../components/header'

const ProductScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent handleNavigate={navigation} backButton={true} basketButton={false} title={'Ürünümüz'} />

      {/* Detail Top Side Start */}
      <View style={{ height: '30%' }}>
        <Image
          source={{ uri: 'https://cdn.britannica.com/700x450/72/186972-049-26ACDCBE.jpg' }}
          style={{ width: '100%', height: '100%' }}
        />
      </View>
      {/* Detail Top Side End */}

      {/* Detail Center End */}
      <TabMenuComponent navigation={navigation} />
      {/* Detail Center End */}
    </View>
  )
}

export default ProductScreen
