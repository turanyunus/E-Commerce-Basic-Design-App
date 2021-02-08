import React from 'react'
import { View } from 'react-native'
import Item from './item'

const ItemsContainer = () => {
  return (
    <View style={styles.containerStyle}>
      <Item />
    </View>
  )
}

const styles = {
  containerStyle: {
    flex: 4,
    backgroundColor: '#e5e5e5'
  }
}

export default ItemsContainer
