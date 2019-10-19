import React, { Component } from 'react'
import { ActivityIndicator, View, ScrollView } from 'react-native'
import { Container, CardItem, Card, Content, Left, Body, Text, Image, Button, Icon, Right, List, ListItem, Footer, FooterTab } from 'native-base'
import * as Font from 'expo-font'
import { Actions } from "react-native-router-flux";
import { Thumbnail } from 'react-native-thumbnail-video';

//import Footer from '../components/RefillFooter'
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
        <ScrollView>
          <Card>
            <CardItem>
              <Body>
                <Text>Welcome to Belly-Telly!</Text>
                <Text note>Spendsta suggests recipes based on the ingredients and food products you purchase. Pay attention to the Belly-Telly feed for fascinating recipes!</Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Body>
                <Text>Fancy a Maggi Recipe?</Text>
                <Text note>Since Maggi is one of your most recurring purchase, perhaps you would like to try out a delicious plate of Double Cheese Maggi?</Text>
              </Body>
            </CardItem>
            <Thumbnail url="https://www.youtube.com/watch?v=3QzHTWYXKpc" />
          </Card>


        </ScrollView>
        <Footer>
          <FooterTab>
            <Button vertical onPress={ ()=> Actions.expense()}>
              <Icon active name="pulse" />
              <Text>Expense</Text>
            </Button>
            <Button vertical  onPress={ ()=> Actions.lifestyle()}>
              <Icon name="happy" />
              <Text>Lifestyle</Text>
            </Button>
            <Button vertical  onPress={ ()=> Actions.refill()}>
              <Icon name="cart" />
              <Text>Refill</Text>
            </Button>
            <Button vertical active onPress={ ()=> Actions.belly()}>
              <Icon name="apps" />
              <Text>Recipes</Text>
            </Button>
          </FooterTab>
        </Footer>
      </View>
    )
  }
}
