import React from 'react'
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('screen')

const GroupCard = ({ item }) => {
  const { image, icon, name } = item
  return (
    <View style={styles.container}>
      <Image
        source={image ? { uri: image } : require('../assets/img/placeholder.png')}
        style={styles.background}
        resizeMode="cover"
      />
      <View style={styles.overlay} />
      <Image source={icon ? { uri: icon } : require('../assets/img/icon_placeholder.png')} style={styles.icon} />
      <Text style={styles.name}>{name ? name : 'Name'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: height / 8.2,
    height: width / 4,
    borderRadius: 6,
    backgroundColor: '#ccc',
    overflow: 'hidden',
    padding: 15,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  background: {
    width: height / 8.2,
    height: width / 4,
    position: 'absolute'
  },
  overlay: {
    width: height / 8.2,
    height: width / 4,
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'absolute'
  },
  name: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 7
  },
  icon: {
    width: 25,
    height: 25
  }
})

export default GroupCard
