import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Content, Form, Item, Input, Button, Textarea, Text, View, Spinner } from 'native-base'
import { ratingOpacityFunction } from '../../utils/ratingOpacityFunction'
import HeaderComponent from '../header'
let maxLength = 200

function ProductCommentAddComponent(props) {
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')
  const [rating, setRating] = useState('')
  const [spinner, setSpinner] = useState(false)
  const [ratingOpacity, setRatingOpacity] = useState('')
  const [commentLength, setCommentLength] = useState(maxLength)

  function onPressRating(point) {
    setRating(point)
    setRatingOpacity(ratingOpacityFunction(point))
  }

  let filterButtonSpinner = !spinner ? (
    <View style={{ flex: 1, marginTop: 20 }}>
      <Button bordered full warning style={{ borderRadius: 5 }}>
        <Text>Yorum Gönder</Text>
      </Button>
    </View>
  ) : (
    <Spinner color="orange" />
  )

  return (
    <Container>
      <HeaderComponent handleNavigate={props.navigation} backButton={true} basketButton={true} title={'Yorum Ekle'} />

      <Content style={styles.container}>
        <Form>
          {/* Rating oldugu kısım */}
          <View style={styles.drawerContent}>
            <Text style={styles.drawerContentTitle}>Değerlendirme</Text>
            <View style={styles.drawerContentView}>
              <TouchableOpacity style={styles.userInfoSectionRating} onPress={() => onPressRating(0)}>
                <View
                  style={{
                    opacity: ratingOpacity !== '' ? ratingOpacity.zero : 1
                  }}
                >
                  <View style={[styles.ratingPointStyle, styles.ratingPointRed]}>
                    <Text style={styles.title}>0+</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.userInfoSectionRating} onPress={() => onPressRating(7)}>
                <View
                  style={{
                    opacity: ratingOpacity !== '' ? ratingOpacity.seven : 1
                  }}
                >
                  <View style={[styles.ratingPointStyle, styles.ratingPointOrange]}>
                    <Text style={styles.title}>7+</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.userInfoSectionRating} onPress={() => onPressRating(8)}>
                <View
                  style={{
                    opacity: ratingOpacity !== '' ? ratingOpacity.eight : 1
                  }}
                >
                  <View style={[styles.ratingPointStyle, styles.ratingPointLightGreen]}>
                    <Text style={styles.title}>8+</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.userInfoSectionRating} onPress={() => onPressRating(8.5)}>
                <View
                  style={{
                    opacity: ratingOpacity !== '' ? ratingOpacity.halfEight : 1
                  }}
                >
                  <View style={[styles.ratingPointStyle, styles.ratingPointGreen]}>
                    <Text style={styles.title}>8,5+</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.userInfoSectionRating} onPress={() => onPressRating(9)}>
                <View
                  style={{
                    opacity: ratingOpacity !== '' ? ratingOpacity.nine : 1
                  }}
                >
                  <View style={[styles.ratingPointStyle, styles.ratingPointDarkGreen]}>
                    <Text style={styles.title}>9+</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Email oldugu kısım*/}
          <Item regular style={styles.searchInput}>
            <Input
              placeholder="Email adresiniz"
              value={email}
              onChangeText={(text) => setEmail(text)}
              returnKeyType={'done'}
            />
          </Item>

          {/* Yorum'un oldugu kısım */}
          <>
            <Textarea
              rowSpan={3}
              bordered
              style={{ borderRadius: 5, padding: 5 }}
              placeholder="Yorumunuz"
              value={comment}
              onChangeText={(text) => onChangeTextArea(text)}
              returnKeyType="done"
              blurOnSubmit={true}
            />
            <Text style={{ color: '#CCC', flex: 1, alignSelf: 'flex-end' }}>{commentLength}</Text>
          </>

          {/* Yorum Gönder */}
          {filterButtonSpinner}
        </Form>
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  },
  drawerContent: {
    flex: 1,
    borderBottomColor: '#efefef',
    borderBottomWidth: 1,
    paddingBottom: '3%'
  },
  drawerContentTitle: {
    color: 'gray',
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 10
  },
  drawerContentView: {
    flexDirection: 'row'
  },
  searchInput: {
    marginTop: 7,
    marginBottom: 7,
    borderRadius: 5
  },
  userInfoSection: {
    paddingLeft: '2%'
  },
  userInfoSectionRating: {
    paddingLeft: '4%',
    width: '20%'
  },
  ratingPointStyle: {
    width: '60%',
    height: 37,
    borderRadius: 5,
    justifyContent: 'center'
  },
  ratingPointRed: {
    backgroundColor: '#ba0808'
  },
  ratingPointOrange: {
    backgroundColor: '#FF7B23'
  },
  ratingPointLightGreen: {
    backgroundColor: '#63b14a'
  },
  ratingPointGreen: {
    backgroundColor: '#53923e'
  },
  ratingPointDarkGreen: {
    backgroundColor: 'green'
  },
  title: {
    fontSize: 15,
    marginTop: 3,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  }
})

export default ProductCommentAddComponent
