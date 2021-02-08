import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { colors } from '../../utils/theme'
import * as Animatable from 'react-native-animatable'
import HeaderNoBar from '../../components/header-no-bar'

export const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderNoBar handleNavigate={navigation} backButton={false} />
      <View style={styles.containerTop}>
        <Animatable.View style={styles.headerContent} animation="fadeInUp" duraton="1500">
          <Image style={styles.avatar} source={require('../../assets/img/profile.jpg')} />
          <Text style={styles.name}>Turan Yunus</Text>
          <Text style={styles.userInfo}>turan.celikel@gmail.com </Text>
          <Text style={styles.userInfo}>Istanbul</Text>
        </Animatable.View>
      </View>
      <Animatable.View style={styles.bodyContent} animation="bounceInDown" duraton="1500">
        <View style={styles.menuBox}>
          <Image
            style={styles.icon}
            source={{ uri: 'https://img.icons8.com/cute-clipart/64/000000/purchase-order.png' }}
          />
          <Text style={styles.info}>Siparişlerim</Text>
        </View>
        <View style={styles.menuBox}>
          <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/bubbles/50/000000/product.png' }} />
          <Text style={styles.info}>Taleplerim</Text>
        </View>

        <View style={styles.menuBox}>
          <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/color/70/000000/filled-like.png' }} />
          <Text style={styles.info}>Beğendiklerim</Text>
        </View>

        <View style={styles.menuBox}>
          <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/cute-clipart/64/000000/address.png' }} />
          <Text style={styles.info}>Adreslerim</Text>
        </View>

        <View style={styles.menuBox}>
          <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/cute-clipart/64/000000/wallet-app.png' }} />
          <Text style={styles.info}>Cüzdanım</Text>
        </View>

        <View style={styles.menuBox}>
          <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/color/70/000000/shutdown.png' }} />
          <Text style={styles.info}>Çıkış</Text>
        </View>
      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ORANGE.default
  },
  containerTop: {
    flex: 0.6
  },
  headerContent: {
    alignItems: 'center'
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10
  },
  name: {
    fontSize: 22,
    color: '#ffffff',
    fontWeight: '600'
  },
  userInfo: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600'
  },
  body: {
    backgroundColor: 'white'
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: '#696969'
  },
  bodyContent: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 50,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  menuBox: {
    backgroundColor: '#DCDCDC',
    width: '40%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 2,
      width: -2
    },
    elevation: 4
  },
  icon: {
    width: 50,
    height: 50
  },
  info: {
    fontSize: 18,
    color: '#000000'
  }
})
