import React from 'react'

import { View, StyleSheet, FlatList } from 'react-native'

const HorizontalScrollView = ({ renderItem, keyExtractor, data }) => (
  <View>
    <FlatList
      style={styles.innerScroll}
      horizontal
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  </View>
)

const styles = StyleSheet.create({
  innerScroll: {
    padding: 15,
    flexDirection: 'row'
  }
})

export default HorizontalScrollView
