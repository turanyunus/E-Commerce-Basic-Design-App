import React, { useState } from 'react'
import { SafeAreaView, View, Text, Image, StyleSheet, FlatList } from 'react-native'
import { Button, Icon } from 'native-base'

function DetailCommentComponent({ changeTab, navigation }) {
  const [commentList, setCommentList] = useState([])

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8'
        }}
      />
    )
  }

  const ItemView = ({ item }) => {
    return (
      <View style={styles.commentView}>
        <Text style={styles.commentStyle}>Yorumss</Text>
        <View style={styles.commentUser}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../../assets/img/tripad.png')} style={{ height: 40, width: 40, marginTop: 5 }} />
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.commentUsernameStyle}>Turan</Text>
              <Text style={styles.commentUsernameWriteDateStyle}>07/07/2021 'de yazıldı</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

  const renderFooter = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginBottom: 10,
          justifyContent: 'center',
          marginTop: 10
        }}
      >
        <Button bordered transparent iconRight style={{ paddingLeft: 18 }}>
          <>
            <Text>Daha fazla yorum</Text>
            <Icon name="arrow-down" />
          </>
        </Button>
      </View>
    )
  }

  const renderHeader = () => {
    return (
      <View style={{ display: 'flex' }}>
        <Button
          transparent
          iconLeft
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-end',
            marginTop: 5,
            marginRight: 20
          }}
          onPress={() => navigation.navigate('ProductCommentAddComponent')}
        >
          <>
            <Icon name="add" style={{ color: '#FF7B23' }} />
            <Text style={{ lineHeight: 30, fontSize: 17, marginLeft: 3, color: '#FF7B23' }}>Yorum Ekle</Text>
          </>
        </Button>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={commentList}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          enableEmptySections={true}
          renderItem={ItemView}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  },
  commentView: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    borderBottomColor: '#eaeaea',
    borderBottomWidth: 1
  },
  commentStyle: {
    fontSize: 18,
    fontWeight: '300',
    marginTop: 5,
    marginLeft: 20,
    color: '#545353'
  },
  commentUser: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 10
  },
  commentUsernameStyle: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 20,
    color: '#545353'
  },
  commentUsernameWriteDateStyle: {
    fontSize: 13,
    fontWeight: '300',
    marginTop: 5,
    marginLeft: 20,
    color: '#545353'
  }
})
export default DetailCommentComponent
