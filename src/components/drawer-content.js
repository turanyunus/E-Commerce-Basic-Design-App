import React from 'react'
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { Icon, List, ListItem, Left, Right, Body } from 'native-base'

export default function DrawerContent(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        {/* Appname'nin oldugu kısım */}
        <View style={styles.drawerItemStyle}>
          <Image source={require('../assets/img/logo.png')} style={styles.appNameIcon} />
          <View style={styles.appNameText}>
            <Text style={styles.title}>E-Commerce</Text>
          </View>
        </View>
        {/* Kategori listesinin oldugu kısım */}
        <List>
          <ListItem
            style={styles.listItem}
            onPress={() => {
              props.navigation.navigate('SignInScreen')
            }}
          >
            <Left style={styles.leftStyle}>
              <Image source={require('../assets/img/login/login.png')} style={styles.listItemIcon} />
            </Left>
            <Body>
              <Text numberOfLines={2} style={styles.listItemText}>
                Kayıt Olunuz
              </Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem
            style={styles.listItem}
            onPress={() => {
              props.navigation.navigate('LogInScreen')
            }}
          >
            <Left style={styles.leftStyle}>
              <Image source={require('../assets/img/login/login.png')} style={styles.listItemIcon} />
            </Left>
            <Body>
              <Text numberOfLines={2} style={styles.listItemText}>
                Giriş Yapınız
              </Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem
            style={styles.listItem}
            onPress={() => {
              props.navigation.navigate('HomeScreen')
            }}
          >
            <Left style={styles.leftStyle}>
              <Image source={require('../assets/img/home.png')} style={styles.listItemIcon} />
            </Left>
            <Body>
              <Text numberOfLines={2} style={styles.listItemText}>
                Anasayfa
              </Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem
            style={styles.listItem}
            onPress={() => {
              props.navigation.navigate('ProfileScreen')
            }}
          >
            <Left style={styles.leftStyle}>
              <Image source={require('../assets/img/login/user.png')} style={styles.listItemIcon} />
            </Left>
            <Body>
              <Text numberOfLines={2} style={styles.listItemText}>
                Profil
              </Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </List>
      </DrawerContentScrollView>
    </View>
  )
}

const { height } = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255,254,252)'
  },
  drawerItemStyle: {
    flexDirection: 'row',
    marginLeft: height * 0.02,
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    marginBottom: 1,
    paddingBottom: height * 0.01
  },
  appNameIcon: {
    height: height * 0.08,
    width: height * 0.08,
    marginRight: height * 0.03
  },
  appNameText: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    color: '#666666',
    fontWeight: '700'
  },
  listItem: {
    flex: 1,
    height: height * 0.08,
    marginTop: height * 0.01
  },
  leftStyle: {
    flex: 0.4
  },
  listItemIcon: {
    height: height * 0.04,
    width: height * 0.04
  },
  listItemText: {
    fontSize: 17,
    color: '#666666',
    fontWeight: '600'
  }
})
