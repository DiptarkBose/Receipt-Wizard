import React, { Component } from 'react'
import { ActivityIndicator, View, ScrollView } from 'react-native'
import { Container, Content, Card, CardItem, Left, Right, Icon, Body, Text, Image, Thumbnail, Button, Footer, FooterTab } from 'native-base'
import * as Font from 'expo-font'
import * as Progress from 'react-native-progress';
import { Actions } from "react-native-router-flux";

//import Footer from '../components/LifestyleFooter'

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
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <ScrollView>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../images/wiz.jpg')} />
                <Body>
                  <Text>Healthy/Unhealthy?</Text>
                  <Text note>Your food intake indicates an unhealthy lifestyle!</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <View style={{width:80}}/>
              <Button rounded success onPress={ ()=> Actions.disagg()}>
                <Text>Detailed Insights</Text>
              </Button>
            </CardItem>
          </Card>


          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../images/wiz.jpg')} />
                <Body>
                  <Text>Alcoholic?</Text>
                  <Text note>Your alcohol consumption is high!</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Text>Alcohol Intake: </Text>
              <View style={{width:10}}/>
              <Progress.Bar progress={0.9} width={200} />
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../images/wiz.jpg')} />
                <Body>
                  <Text>Electricity Consumption?</Text>
                  <Text note>You are highly energy efficient!</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Text>Energy Expense: </Text>
              <View style={{width:8}}/>
              <Progress.Bar progress={0.3} width={200} />
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../images/wiz.jpg')} />
                <Body>
                  <Text>Water Expense?</Text>
                  <Text note>Your water bill indicates wasteful usage!</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Text>Water Expense: </Text>
              <View style={{width:8}}/>
              <Progress.Bar progress={0.7} width={200} />
            </CardItem>
          </Card>
        </ScrollView>
        <Footer>
          <FooterTab>
            <Button vertical onPress={ ()=> Actions.expense()}>
              <Icon active name="pulse" />
              <Text>Expense</Text>
            </Button>
            <Button vertical active onPress={ ()=> Actions.lifestyle()}>
              <Icon name="happy" />
              <Text>Lifestyle</Text>
            </Button>
            <Button vertical onPress={ ()=> Actions.refill()}>
              <Icon name="cart" />
              <Text>Refill</Text>
            </Button>
            <Button vertical onPress={ ()=> Actions.belly()}>
              <Icon name="apps" />
              <Text>Recipes</Text>
            </Button>
          </FooterTab>
        </Footer>
      </View>
    )
  }
}
