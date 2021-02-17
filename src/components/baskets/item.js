import React from 'react'
import { Text, View, FlatList, Image } from 'react-native'
import { Button, Icon } from 'native-base'
import { colors } from '../../utils/theme'
import { useDispatch } from 'react-redux'
import { addBasket } from '../../redux/indexAction'

const Item = ({ basketList }) => {
  const dispatch = useDispatch()
  const handleAmountIncrement = (item) => {
    let tempList = [...basketList]
    let filterTempList = tempList.find((i) => i.id === item.id)
    let tempAmount = Number(filterTempList.amount) + 1
    filterTempList.amount = tempAmount
    dispatch(addBasket(tempList))
  }

  const handleAmountDecrement = (item) => {
    let tempList = [...basketList]
    let filterTempList = tempList.find((i) => i.id === item.id)
    let tempAmount = Number(filterTempList.amount) - 1
    filterTempList.amount = tempAmount
    dispatch(addBasket(tempList))
  }

  const _renderItem = ({ item, index }) => {
    const {
      containerStyle,
      lastItemStyle,
      imageStyle,
      textStyle,
      counterStyle,
      priceStyle
    } = styles

    return (
      <View
        style={index + 1 === basketList.length ? lastItemStyle : containerStyle}
      >
        <Image source={{ uri: item.image }} style={imageStyle} />
        <View style={textStyle}>
          <Text style={{ color: '#2e2f30' }}>{item.name}</Text>
          <View style={priceStyle}>
            <Text style={{ color: '#2e2f30', fontSize: 12 }}>
              {item.price} TL
            </Text>
          </View>
        </View>
        <View style={counterStyle}>
          <Button transparent onPress={() => handleAmountDecrement(item)}>
            <Icon
              name={'ios-remove'}
              style={{ color: colors.ORANGE.default, fontSize: 23 }}
            />
          </Button>
          <Text>{item.amount}</Text>
          <Button transparent onPress={() => handleAmountIncrement(item)}>
            <Icon
              name={'ios-add'}
              style={{ color: colors.ORANGE.default, fontSize: 23 }}
            />
          </Button>
        </View>
      </View>
    )
  }

  return (
    <FlatList
      data={basketList}
      renderItem={_renderItem}
      keyExtractor={(item) => item.id}
    />
  )
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2',
    padding: 10,
    paddingLeft: 15,
    backgroundColor: '#fff'
  },
  lastItemStyle: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
    paddingLeft: 15,
    backgroundColor: '#fff'
  },
  imageStyle: {
    width: 50,
    height: 50,
    marginRight: 20
  },
  textStyle: {
    flex: 2,
    justifyContent: 'center'
  },
  priceStyle: {
    width: 50,
    alignItems: 'center',
    marginTop: 3,
    borderRadius: 3
  },
  counterStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}

export default Item
