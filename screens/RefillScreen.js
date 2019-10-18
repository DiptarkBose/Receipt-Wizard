import React, { Component } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { Container, CardItem, Card, Content, Left, Body, Text, Image, Button, Icon, Right } from 'native-base'
import * as Font from 'expo-font'

import Footer from '../components/RefillFooter'
export default class RefillScreen extends Component {

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
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>Help us give you better suggestions!</Text>
                <Text note>Spare a few minutes to discuss your previous receipt with us.</Text>
              </Body>
              <Button rounded success style={{alignItems: 'center'}}>
                <Text>Take the Survey!</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
        <Footer/>
      </View>
    )
  }
}
