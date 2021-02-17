import React from 'react'
import { View } from 'react-native'
import HeaderComponent from '../../components/header'
import ItemsContainer from '../../components/baskets/items-container'
import { useSelector } from 'react-redux'

const FavoriteListScreen = ({ navigation }) => {
  const getIndexReducer = useSelector((state) => state.indexReducer)
  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent
        handleNavigate={navigation}
        backButton={false}
        filterButton={true}
        title={'Favori Listem'}
      />
      <View style={{ flex: 1 }}>
        <ItemsContainer basketList={getIndexReducer?.favoriteList} />
      </View>
    </View>
  )
}

export default FavoriteListScreen
