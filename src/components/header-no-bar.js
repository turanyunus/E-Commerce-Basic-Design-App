import React, { useState } from 'react'
import { Image, StatusBar, View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import { colors } from '../utils/theme'
import * as Animatable from 'react-native-animatable'
import { Button } from 'native-base'

const HeaderNoBar = (props) => {
  const [modalVisible, setModalVisible] = useState(false)

  const filterModel = () => {
    setModalVisible(true)
  }

  const onPressFilterText = (value) => {
    //props.setParentValue(value)
    setModalVisible(!modalVisible)
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View
        style={{
          backgroundColor: colors.ORANGE.default,
          height: '20%',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingHorizontal: 20
        }}
      >
        <Animatable.View
          animation="zoomIn"
          duraton="1500"
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <View style={{ width: '50%' }}>
            {props.backButton ? (
              <Button transparent onPress={() => props.goBack()}>
                <Image
                  source={require('../assets/img/back-button.png')}
                  style={{
                    height: 25,
                    width: 25,
                    marginTop: 60
                  }}
                />
              </Button>
            ) : (
              <Button transparent onPress={() => props.handleNavigate.openDrawer()}>
                <Image
                  source={require('../assets/img/menu.png')}
                  style={{
                    height: 25,
                    width: 25,
                    marginTop: 60
                  }}
                />
              </Button>
            )}
          </View>

          <View
            style={{
              width: '50%',
              height: 25,
              marginTop: 60,
              alignItems: 'flex-end'
            }}
          >
            {props.profileButton && (
              <TouchableOpacity transparent onPress={filterModel}>
                <Image source={require('../assets/img/home_profile.png')} style={{ height: 30, width: 30 }} />
              </TouchableOpacity>
            )}
          </View>
        </Animatable.View>
      </View>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={() => onPressFilterText(0)}>
              <Text style={styles.modalText}>Geçmiş Siparişlerim</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressFilterText(1)}>
              <Text style={styles.modalText}>Taleplerim</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressFilterText(2)}>
              <Text style={styles.modalText}>Beğendiklerim</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressFilterText(3)}>
              <Text style={styles.modalText}>Adreslerim</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressFilterText(4)}>
              <Text style={styles.modalText}>Cüzdanım</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: colors.ORANGE.default }}
              onPress={() => {
                setModalVisible(!modalVisible)
              }}
            >
              <Text style={styles.textStyle}>Kapat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.ORANGE.default,
    marginBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC'
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  modalView: {
    width: '70%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: '100%'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    fontSize: 17,
    marginBottom: 10,
    paddingBottom: 15
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)'
  }
})

export default HeaderNoBar
