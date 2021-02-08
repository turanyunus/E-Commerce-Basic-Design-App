import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import HeaderComponent from '../../components/header'
import { Content, Card, CardItem, Text, Icon, Body } from 'native-base'

const CheckoutScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent handleNavigate={navigation} backButton={true} filterButton={true} title={'Özet'} />
      <Content style={{ margin: 20 }}>
        <Text style={{ margin: 10, fontSize: 17 }}>Hesap bilgilerim</Text>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
              <Text>Turan Yunus</Text>
              <Text note>Kullanıcı</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Icon active name="person-outline" />
            <Text>Turan Yunus</Text>
          </CardItem>
          <CardItem>
            <Icon name="mail-outline" />
            <Text>turan.celikel@gmail.com</Text>
          </CardItem>
          <CardItem>
            <Icon name="phone-portrait-outline" />
            <Text>0534 873 9111</Text>
          </CardItem>
          <CardItem>
            <Icon name="location-outline" />
            <Text>Şişli / İstanbul</Text>
          </CardItem>
        </Card>

        <Text style={{ margin: 10, fontSize: 17, marginTop: 40 }}>Adres bilgisi</Text>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
              <Text>Aile Home</Text>
              <Text note>Şişli Esentepe</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Esentepe Mahallesi Nalan Sokak No:17 Daire:2 Esentepe / Şişli</Text>
            </Body>
          </CardItem>
        </Card>

        <Text style={{ margin: 10, fontSize: 17, marginTop: 40 }}>Ödeme bilgisi</Text>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
              <Text style={{ fontWeight: 'bold' }}>Kredi Kartı Bilgileri</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Icon name="card-outline" />
            <Text>1234 1234 1234 1234 1234</Text>
          </CardItem>
          <CardItem>
            <Icon active name="person-outline" />
            <Text>Turan Yunus</Text>
          </CardItem>
          <CardItem>
            <Icon type="MaterialIcons" name="date-range" />
            <Text>07/07/2027</Text>
          </CardItem>
          <CardItem>
            <Icon type="FontAwesome5" name="credit-card" style={{ fontSize: 23 }} />
            <Text>1234</Text>
          </CardItem>
        </Card>
      </Content>
      <View style={styles.containerStyle}>
        <View style={styles.buttonContainerStyle}>
          <TouchableOpacity style={styles.checkoutButtonStyle} onPress={() => navigation.navigate('CheckoutScreen')}>
            <Text style={styles.checkoutTitleStyle}>Devam et</Text>
            <Icon active name="caret-forward" style={{ color: '#fff' }} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#e2e2e2',
    backgroundColor: '#e3e3e3'
  },
  buttonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  checkoutTitleStyle: {
    color: '#fff',
    marginRight: 10,
    marginTop: 5,
    fontWeight: '700'
  },
  checkoutButtonStyle: {
    flexDirection: 'row',
    backgroundColor: '#f39c12',
    padding: 10,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 3
  }
})

export default CheckoutScreen
