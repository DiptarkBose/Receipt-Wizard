import React, { Component } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { Container } from 'native-base'
import * as Font from 'expo-font'

import Footer from '../components/ExpenseFooter'
export default class ExpenseScreen extends Component {

  state = {
    isReady: false
  }

  componentWillMount = async() => {
    await Font.loadAsync({
      Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf')
    })
    this.setState({ isReady: true })
  }

  render () {
    if (!this.state.isReady) {
      return <ActivityIndicator />
    }
    return (
      <View style={{flex: 1}}>
        <Text> LOL </Text>
        <Footer/>
      </View>
    )
  }
}
