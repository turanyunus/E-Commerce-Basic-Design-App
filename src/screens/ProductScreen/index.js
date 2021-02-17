import React from 'react'
import { Image, View } from 'react-native'
import TabMenuComponent from '../../components/tabs/tab-menu'
import HeaderComponent from '../../components/header'

const ProductScreen = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent handleNavigate={props.navigation} backButton={true} basketButton={false} title={'Ürünümüz'} />

      {/* Detail Top Side Start */}
      <View style={{ height: '30%' }}>
        <Image source={{ uri: props.route.params.item.image }} style={{ width: '100%', height: '100%' }} />
      </View>
      {/* Detail Top Side End */}

      {/* Detail Center End */}
      <TabMenuComponent navigation={props.navigation} item={props.route.params.item} />
      {/* Detail Center End */}
    </View>
  )
}

export default ProductScreen
