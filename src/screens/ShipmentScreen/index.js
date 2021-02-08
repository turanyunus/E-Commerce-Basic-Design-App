import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import HeaderComponent from '../../components/header'
import { Content, ListItem, Icon, CheckBox, Text, Body, Form, Switch, Item, Label, Input } from 'native-base'

const ShipmentScreen = ({ navigation }) => {
  const { containerStyle, buttonContainerStyle, checkoutTitleStyle, checkoutButtonStyle } = styles

  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent handleNavigate={navigation} backButton={true} profileButton={true} title={'Hesap bilgi'} />
      <Content style={{ margin: 20 }}>
        <Text style={{ margin: 10, fontSize: 17 }}>Adreslerim</Text>
        <ListItem>
          <CheckBox checked={true} />
          <Body>
            <Text>Adres 1</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox checked={false} />
          <Body>
            <Text>Adres 2</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox checked={false} color="green" />
          <Body>
            <Text>Adres 3</Text>
          </Body>
        </ListItem>
        <Text style={{ marginTop: 50, fontSize: 17 }}>Ödeme Bilgileri</Text>
        <Form>
          <Item floatingLabel>
            <Label>Kart numarası</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Kart üzerindeki isim</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Son kullanma tarihi</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Güvenlik kodu</Label>
            <Input />
          </Item>
          <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: 15 }}>
            <Text style={{ marginRight: 20, color: '#6d6d6d' }}>Kredi kartını kaydet</Text>
            <Switch value={false} />
          </View>
        </Form>
      </Content>
      <View style={containerStyle}>
        <View style={buttonContainerStyle}>
          <TouchableOpacity style={checkoutButtonStyle} onPress={() => navigation.navigate('CheckoutScreen')}>
            <Text style={checkoutTitleStyle}>Devam et</Text>
            <Icon active name="caret-forward" style={{ color: '#fff' }} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = {
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
}

export default ShipmentScreen
