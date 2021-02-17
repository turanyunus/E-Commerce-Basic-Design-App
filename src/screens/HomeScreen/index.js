import React from 'react'
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import { colors } from '../../utils/theme'
import { trendingGroups, trendingProduct } from './dummy-data'
import HorizontalScrollView from '../../components/horizontal-scroll-feed'
import GroupCard from '../../components/group-card'
import * as Animatable from 'react-native-animatable'
import HeaderNoBar from '../../components/header-no-bar'

const Home = ({ navigation }) => {
  function onPressListItem(routeName, item) {
    navigation.navigate(routeName, {
      item: item
    })
  }

  return (
    <View style={styles.container}>
      <HeaderNoBar
        handleNavigate={navigation}
        backButton={false}
        profileButton={true}
      />

      <LinearGradient
        colors={[colors.ORANGE.secondary, 'transparent']}
        style={styles.containerSearch}
      >
        <View style={styles.searchFields}>
          <Image
            source={require('../../assets/img/ios-search.png')}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#CCC"
            style={styles.searchText}
          />
        </View>
      </LinearGradient>

      <View style={styles.categoryTextContainer}>
        <View style={styles.categoryTextHalf}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: '#585a61'
            }}
          >
            Tavsiye Edilen
          </Text>
        </View>
        <View style={styles.categoryTextSecondHalf}>
          <View
            style={{
              backgroundColor: colors.ORANGE.default,
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 15
            }}
          >
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 13,
                color: '#FFF'
              }}
            >
              daha fazla
            </Text>
          </View>
        </View>
      </View>

      <HorizontalScrollView
        data={trendingGroups}
        renderItem={({ item }) => (
          <Animatable.View
            style={{ flex: 1, justifyContent: 'space-between', margin: 10 }}
            animation="zoomIn"
            duraton="1500"
          >
            <GroupCard item={item} />
          </Animatable.View>
        )}
        keyExtractor={(item) => `item-${item.id}`}
      />

      <View style={styles.categoryTextContainer}>
        <View style={styles.categoryTextHalf}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: '#585a61'
            }}
          >
            Sizin için seçtiklerimiz
          </Text>
        </View>
        <View style={styles.categoryTextSecondHalf}>
          <View
            style={{
              backgroundColor: colors.ORANGE.default,
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 15
            }}
          >
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 13,
                color: '#FFF'
              }}
            >
              daha fazla
            </Text>
          </View>
        </View>
      </View>

      <FlatList
        data={trendingProduct}
        numColumns={2}
        style={styles.containerFlatList}
        renderItem={({ item }) => (
          <Animatable.View
            animation="fadeInUp"
            duraton="1500"
            style={styles.flatListView}
          >
            <TouchableOpacity
              onPress={() => onPressListItem('ProductScreen', item)}
            >
              <Image
                source={{ uri: item.image }}
                style={styles.flatListImage}
              />
              <View
                style={{
                  flexDirection: 'row',
                  paddingTop: 4,
                  paddingHorizontal: 2,
                  width: '80%'
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    fontWeight: 'bold',
                    width: '70%'
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#00a46c'
                  }}
                >
                  {item.price} TL
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
  container: {
    backgroundColor: '#FFF',
    flex: 1
  },
  containerSearch: {
    left: 0,
    right: 0,
    height: 90,
    marginTop: -45
  },
  searchFields: {
    backgroundColor: '#FFF',
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 15,
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchIcon: {
    height: 20,
    width: 20,
    marginRight: 10
  },
  searchText: {
    fontWeight: 'bold',
    fontSize: 18,
    width: 260
  },
  categoryTextContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center'
  },
  categoryTextHalf: {
    width: '50%'
  },
  categoryTextSecondHalf: {
    width: '50%',
    alignItems: 'flex-end'
  },
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
    width: height / 6,
    height: width / 3,
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
export default Home
