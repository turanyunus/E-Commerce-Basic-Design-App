import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Button, Container, Content, Icon } from 'native-base'
import { colors } from '../../utils/theme'
import { useDispatch, useSelector } from 'react-redux'
import { addBasket, addFavoriteList } from '../../redux/indexAction'

function DetailAboutComponent({ item }) {
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(1)
  const getIndexReducer = useSelector((state) => state.indexReducer)

  const handleAddBasket = (item) => {
    let tempList = item
    tempList.amount = amount
    dispatch(addBasket(getIndexReducer.basketList.concat(tempList)))
  }

  const handleAddFavorite = (item) => {
    console.log(item)
    let tempList = item
    tempList.amount = amount
    dispatch(addFavoriteList(getIndexReducer.favoriteList.concat(tempList)))
  }

  return (
    <Container>
      <Content>
        <View style={styles.container}>
          <View style={{ flex: 1, flexDirection: 'row', marginBottom: 30 }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.companyName}>{item.name}</Text>
              <Text style={styles.companyServiceType}>{item.category}</Text>
              <Text style={styles.productAmount}>{item.price} TL </Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 20 }}>
              <View style={{ flex: 1, marginTop: 20, flexDirection: 'row' }}>
                <Text style={styles.amount}>Adet</Text>
                <View style={styles.counterStyle}>
                  <Button transparent onPress={() => setAmount(amount - 1)}>
                    <Icon
                      name={'ios-remove'}
                      style={{ color: colors.ORANGE.default, fontSize: 23 }}
                    />
                  </Button>
                  <Text>{amount}</Text>
                  <Button transparent onPress={() => setAmount(amount + 1)}>
                    <Icon
                      name={'ios-add'}
                      style={{ color: colors.ORANGE.default, fontSize: 23 }}
                    />
                  </Button>
                </View>
              </View>
              <TouchableOpacity
                style={styles.addBasket}
                onPress={() => handleAddBasket(item)}
              >
                <Icon name="add" style={styles.addBasketImage} />
                <Text style={styles.addBasketText}>Sepete Ekle</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.companyServiceType}
                onPress={() => handleAddFavorite(item)}
              >
                <Text style={styles.companyServiceType}>
                  Alışveriş listeme ekle
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Rating oldugu kısım */}
          <View style={{ flex: 1, flexDirection: 'row', marginTop: 20 }}>
            <View
              style={{
                flex: 1,
                borderRightWidth: 1,
                borderRightColor: '#CCC',
                marginBottom: 5
              }}
            >
              <Text style={styles.ratingTitle}>PUAN</Text>
              <Text style={styles.ratingTitleValue}>9.0</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.commentTitleTop}>YORUM</Text>
              <Text style={styles.commentTitleTopValue}>121</Text>
            </View>
          </View>

          {/* Bilginin oldugu kısım */}
          <View style={styles.commentView}>
            <Text style={styles.commentTitle}>Bilgilendirme</Text>
            <Text style={styles.commentStyle}>Bilgi Açıklama</Text>
          </View>
        </View>
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  companyName: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginLeft: 20,
    color: '#545353'
  },
  addBasket: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    backgroundColor: colors.ORANGE.default,
    borderRadius: 10,
    padding: 2
  },
  addBasketText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    padding: 5
  },
  addBasketImage: {
    height: 25,
    width: 25,
    color: 'white'
  },
  companyServiceType: {
    fontSize: 15,
    fontWeight: '300',
    marginLeft: 20,
    color: '#545353'
  },
  productAmount: {
    fontSize: 17,
    fontWeight: '700',
    marginTop: 15,
    marginLeft: 20,
    color: '#11a711'
  },
  counterStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  ratingTitle: {
    color: '#9d9c9c',
    fontSize: 14,
    marginLeft: 20,
    fontWeight: '800',
    textAlign: 'center'
  },
  ratingTitleValue: {
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 10,
    fontWeight: '600',
    textAlign: 'center'
  },
  commentTitleTop: {
    color: '#9d9c9c',
    fontSize: 14,
    marginLeft: 20,
    fontWeight: '800',
    textAlign: 'center'
  },
  amount: {
    fontSize: 17,
    marginTop: 13,
    fontWeight: '500',
    color: '#393939',
    marginLeft: 60
  },
  commentTitleTopValue: {
    fontSize: 19,
    marginLeft: 20,
    marginBottom: 10,
    fontWeight: '600',
    textAlign: 'center'
  },
  drawerContent: {
    flex: 1,
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    marginTop: 30,
    paddingBottom: 15
  },
  drawerContentView: {
    flexDirection: 'row'
  },
  userInfoSection: {
    paddingLeft: 20
  },
  ratingPointStyle: {
    width: 30,
    borderRadius: 5,
    paddingLeft: 5,
    paddingBottom: 5
  },
  ratingPointRed: {
    backgroundColor: 'red'
  },
  ratingPointOrange: {
    backgroundColor: 'orange'
  },
  ratingPointLightGreen: {
    backgroundColor: '#72cb55'
  },
  ratingPointGreen: {
    backgroundColor: '#53923e'
  },
  ratingPointDarkGreen: {
    backgroundColor: 'green'
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    color: 'black'
  },
  pointSideStyle: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#faecdd',
    margin: '4%',
    padding: '2%',
    borderRadius: 5,
    shadowColor: '#ff7b23',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.4,
    shadowRadius: 2.22,
    elevation: 3,
    borderColor: '#d0c0b4',
    borderWidth: 1
  },
  commentView: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20
  },
  commentTitle: {
    flexWrap: 'wrap',
    color: 'gray',
    fontSize: 19,
    marginLeft: 20,
    marginBottom: 10,
    fontWeight: '600'
  },
  commentStyle: {
    fontSize: 16,
    fontWeight: '300',
    marginTop: 5,
    marginLeft: 20,
    color: '#545353'
  }
})

export default DetailAboutComponent
