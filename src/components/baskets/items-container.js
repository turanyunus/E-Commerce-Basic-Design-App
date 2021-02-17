import React from 'react'
import { View } from 'react-native'
import Item from './item'

const ItemsContainer = ({ basketList }) => {
  return (
    <View style={styles.containerStyle}>
      <Item basketList={basketList} />
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
