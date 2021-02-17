import React, { useEffect, useState } from 'react'
import { Icon } from 'native-base'
import { Provider, useSelector } from 'react-redux'
import { store } from './src/utils/redux-config/store'
import { LogBox } from 'react-native'
LogBox.ignoreAllLogs() //Ignore all log notifications

/*ALL SCREEN*/
import SplashScreen from './src/components/splash-screen'
import DrawerContent from './src/components/drawer-content'
import FavoriteListScreen from './src/screens/FavoriteListScreen'
import HomeScreen from './src/screens/HomeScreen'

/*REACT_NAVIGATION*/
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { colors } from './src/utils/theme'
import { ProfileScreen } from './src/screens/ProfileScreen'
import LogInPage from './src/screens/LogInScreen'
import SignInPage from './src/screens/SignInScreen'
import ProductScreen from './src/screens/ProductScreen'
import ProductCommentAddComponent from './src/components/tabs/product-comment-add'
import BasketScreen from './src/screens/BasketScreen'
import CategoryScreen from './src/screens/CategoryScreen'
import ProductListScreen from './src/screens/ProductListScreen'
import ShipmentScreen from './src/screens/ShipmentScreen'
import CheckoutScreen from './src/screens/CheckOutScreen'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()
const MaterialBottomTabs = createMaterialBottomTabNavigator()

const navigationHandler = () => ({
  headerShown: false
})

const DrawNavigator = () => {
  return (
    <Drawer.Navigator
      drawerType="back"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen
        name="ProfileScreen"
        options={navigationHandler}
        component={ProfileScreen}
      />
      <Drawer.Screen
        name="LogInScreen"
        options={navigationHandler}
        component={LogInPage}
      />
      <Drawer.Screen
        name="SignInScreen"
        options={navigationHandler}
        component={SignInPage}
      />
    </Drawer.Navigator>
  )
}

const BottomTabNavigator = () => {
  const getIndexReducer = useSelector((state) => state.indexReducer)
  useEffect(() => {
    console.log(getIndexReducer.basketList)
  }, [])
  return (
    <MaterialBottomTabs.Navigator
      initialRouteName="HomePage"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName
          if (route.name === 'HomeScreen') {
            iconName = focused ? 'ios-home' : 'home-outline'
          } else if (route.name === 'FavoriteListScreen') {
            iconName = focused ? 'bookmark' : 'bookmark-outline'
          } else if (route.name === 'BasketScreen') {
            iconName = focused ? 'basket' : 'basket-outline'
          } else if (route.name === 'CategoryScreen') {
            iconName = focused ? 'grid' : 'grid-outline'
          }
          return (
            <Icon
              name={iconName}
              style={{ color: colors.ORANGE.default, fontSize: 23 }}
            />
          )
        }
      })}
      barStyle={{ backgroundColor: 'white' }}
    >
      <MaterialBottomTabs.Screen
        name="HomeScreen"
        options={{ title: 'Anasayfa' }}
        children={screenHomeScreenStack}
      />
      <MaterialBottomTabs.Screen
        name="CategoryScreen"
        options={{ title: 'Kategoriler' }}
        children={screenCategoryScreenStack}
      />
      <MaterialBottomTabs.Screen
        name="BasketScreen"
        options={{
          title: 'Sepetim',
          tabBarBadge:
            getIndexReducer.basketList.length === 0
              ? null
              : getIndexReducer.basketList.length
        }}
        children={screenBasketScreenStack}
      />
      <MaterialBottomTabs.Screen
        name="FavoriteListScreen"
        options={{
          title: 'Favori Listem',
          tabBarBadge:
            getIndexReducer.favoriteList.length === 0
              ? null
              : getIndexReducer.favoriteList.length
        }}
        children={screenFavoriteListScreenStack}
      />
    </MaterialBottomTabs.Navigator>
  )
}

const screenHomeScreenStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      options={navigationHandler}
      component={HomeScreen}
    />
    <Stack.Screen
      name="ProductScreen"
      options={navigationHandler}
      component={ProductScreen}
    />
    <Stack.Screen
      name="ProductCommentAddComponent"
      options={navigationHandler}
      component={ProductCommentAddComponent}
    />
  </Stack.Navigator>
)

const screenFavoriteListScreenStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="FavoriteListScreen"
      options={navigationHandler}
      component={FavoriteListScreen}
    />
  </Stack.Navigator>
)

const screenBasketScreenStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="BasketScreen"
      options={navigationHandler}
      component={BasketScreen}
    />
    <Stack.Screen
      name="ShipmentScreen"
      options={navigationHandler}
      component={ShipmentScreen}
    />
    <Stack.Screen
      name="CheckoutScreen"
      options={navigationHandler}
      component={CheckoutScreen}
    />
  </Stack.Navigator>
)

const screenCategoryScreenStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="CategoryScreen"
      options={navigationHandler}
      component={CategoryScreen}
    />
    <Stack.Screen
      name="ProductListScreen"
      options={navigationHandler}
      component={ProductListScreen}
    />
  </Stack.Navigator>
)

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  if (isLoading) {
    return <SplashScreen />
  }

  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <DrawNavigator />
        </NavigationContainer>
      </Provider>
    </>
  )
}

export default App
