import React from 'react'
import { View } from 'react-native'
import HeaderComponent from '../../components/header'
import Footer from '../../components/baskets/footer'
import ItemsContainer from '../../components/baskets/items-container'
import { useSelector } from 'react-redux'

const BasketScreen = ({ navigation }) => {
  const getIndexReducer = useSelector((state) => state.indexReducer)
  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent
        handleNavigate={navigation}
        backButton={false}
        filterButton={true}
        title={'Sepetim'}
      />
      <View style={{ flex: 1 }}>
        <ItemsContainer basketList={getIndexReducer?.basketList} />
        <Footer
          navigation={navigation}
          basketList={getIndexReducer?.basketList}
        />
      </View>
    </View>
  )
}

export default BasketScreen
