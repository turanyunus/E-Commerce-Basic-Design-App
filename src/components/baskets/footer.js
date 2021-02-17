import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import TotalComp from './total-component'

const Footer = ({ navigation, basketList }) => {
  const { containerStyle, buttonContainerStyle, closeButtonStyle, checkoutButtonStyle } = styles
  return (
    <View style={containerStyle}>
      <TotalComp basketList={basketList} />
      <View style={buttonContainerStyle}>
        <View style={closeButtonStyle}>
          <Text style={{ color: '#fff' }}>Kapat</Text>
        </View>

        <TouchableOpacity style={checkoutButtonStyle} onPress={() => navigation.navigate('ShipmentScreen')}>
          <Text style={{ color: '#fff' }}>Alışverişi Tamamla</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = {
  containerStyle: {
    flex: 1,
    paddingRight: 15,
    paddingLeft: 15,
    borderTopWidth: 1,
    borderColor: '#e2e2e2'
  },
  buttonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15
  },
  closeButtonStyle: {
    backgroundColor: '#7f8c8d',
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
    borderRadius: 3
  },
  checkoutButtonStyle: {
    backgroundColor: '#f39c12',
    padding: 10,
    paddingRight: 60,
    paddingLeft: 60,
    borderRadius: 3
  }
}

export default Footer
