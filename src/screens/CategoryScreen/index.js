import React from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import HeaderComponent from '../../components/header'
import { trendingGroups } from '../HomeScreen/dummy-data'
import * as Animatable from 'react-native-animatable'

const CategoryScreen = ({ navigation }) => {
  function onPressListItem(routeName, userName) {
    navigation.navigate(routeName)
  }

  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent handleNavigate={navigation} backButton={false} filterButton={true} title={'Kategoriler'} />
      <FlatList
        data={trendingGroups}
        numColumns={3}
        style={styles.containerFlatList}
        renderItem={({ item }) => (
          <Animatable.View animation="fadeInUp" duraton="1500" style={styles.flatListView}>
            <TouchableOpacity onPress={() => onPressListItem('ProductListScreen')}>
              <Image source={{ uri: item.image }} style={styles.flatListImage} />
              <View
                style={{
                  flexDirection: 'row',
                  paddingTop: 4,
                  paddingHorizontal: 2,
                  width: '80%'
                }}
              >
                <Text numberOfLines={1} style={{ fontWeight: '400' }}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          </Animatable.View>
        )}
        keyExtractor={(item) => `item-${item.id}`}
      />
    </View>
  )
}
const { height, width } = Dimensions.get('screen')

const styles = StyleSheet.create({
  containerFlatList: {
    flex: 1,
    marginTop: 20
  },
  flatListView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  flatListImage: {
    width: height / 7,
    height: width / 4,
    borderRadius: 10
  },
  element: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default CategoryScreen
