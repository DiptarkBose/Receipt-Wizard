import React, { Component } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { Container, Content, Card, CardItem, Left, Right, Icon, Body, Text, Image, Thumbnail, Button } from 'native-base'
import * as Font from 'expo-font'

import Footer from '../components/LifestyleFooter'
export default class LifestyleScreen extends Component {

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
              <Left>
                <Thumbnail source={require('../images/wiz.jpg')} />
                <Body>
                  <Text>Healthy/Unhealthy?</Text>
                  <Text note>You are leading a very unhealthy lifestyle!</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../images/wiz.jpg')} />
                <Body>
                  <Text>Electricity Consumption?</Text>
                  <Text note>Ideal consumption of electricity detected!</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../images/wiz.jpg')} />
                <Body>
                  <Text>Water Consumption?</Text>
                  <Text note>High water bill! Use water judiciously!</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
        <Footer/>
      </View>
    )
  }
}
