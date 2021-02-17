import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'native-base'
import { colors } from '../../utils/theme'

const TotalComponent = ({ basketList }) => {
  const { containerStyle, goodsStyle, totalStyle } = styles
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    const totalAmountCheck = basketList.reduce(
      (totalItem, item) =>
        totalItem +
        Number(item.price === undefined ? null : item.price * item.amount),
      0
    )
    setTotalAmount(totalAmountCheck)
  }, [basketList])

  return (
    <View style={containerStyle}>
      <View style={goodsStyle}>
        <Icon
          name={'basket'}
          size={20}
          style={{ marginRight: 8, color: colors.ORANGE.default }}
        />
        <Text style={{ marginTop: 10, color: colors.ORANGE.default }}>
          {basketList.length} ürün
        </Text>
      </View>

      <View style={totalStyle}>
        <Text style={{ marginTop: 10 }}>Toplam Tutar - </Text>
        <Text style={{ marginTop: 10 }}>{totalAmount} TL</Text>
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
