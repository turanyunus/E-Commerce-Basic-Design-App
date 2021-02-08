import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'native-base'
import { colors } from '../../utils/theme'

const TotalComponent = () => {
  const { containerStyle, goodsStyle, totalStyle } = styles
  return (
    <View style={containerStyle}>
      <View style={goodsStyle}>
        <Icon name={'basket'} size={20} style={{ marginRight: 8, color: colors.ORANGE.default }} />
        <Text style={{ marginTop: 10, color: colors.ORANGE.default }}>8 ürün</Text>
      </View>

      <View style={totalStyle}>
        <Text style={{ marginTop: 10 }}>Total - </Text>
        <Text style={{ marginTop: 10 }}>300 TL </Text>
      </View>
    </View>
  )
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15
  },
  goodsStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  totalStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}

export default TotalComponent
