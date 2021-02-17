import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Tab, Tabs } from 'native-base'

import DetailAboutComponent from './product-about'
import DetailCommentComponent from './product-comment'

function TabMenuComponent({ navigation, item }) {
  const [changeTab, setChangeTab] = useState('')

  function onChangeTab(i) {
    setChangeTab(i)
  }

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        onChangeTab={({ i }) => onChangeTab(i)}
        tabBarUnderlineStyle={{
          borderBottomWidth: 5,
          borderBottomColor: '#c6c6c6'
        }}
      >
        <Tab
          heading="Hakkında"
          tabStyle={styles.tabStyle}
          textStyle={styles.textStyle}
          activeTabStyle={styles.activeTabStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <DetailAboutComponent changeTab={changeTab} item={item} />
        </Tab>
        <Tab
          heading="Yorumlar"
          tabStyle={styles.tabStyle}
          textStyle={styles.textStyle}
          activeTabStyle={styles.activeTabStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <DetailCommentComponent changeTab={changeTab} navigation={navigation} />
        </Tab>
      </Tabs>
    </View>
  )
}

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: '#eaeaea'
  },
  textStyle: {
    color: '#414141'
  },
  activeTabStyle: {
    backgroundColor: '#eaeaea'
  },
  activeTextStyle: {
    color: '#414141'
  }
})

export default TabMenuComponent
