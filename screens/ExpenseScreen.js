import React, { Component } from 'react'
import { ActivityIndicator, View, ScrollView } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, H1, Footer, FooterTab } from 'native-base';
import * as Font from 'expo-font'
import PureChart from 'react-native-pure-chart';
import { Actions } from "react-native-router-flux";

//import Footer from '../components/ExpenseFooter'
import ExpenseTrack from '../components/ExpenseTrack';

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
    let sampleData = [
      {x: '2018-01-01', y: 30},
      {x: '2018-01-02', y: 200},
      {x: '2018-01-03', y: 170},
      {x: '2018-01-04', y: 250},
      {x: '2018-01-05', y: 10}
  ]
  let sampleData2 = [
    {
      value: 50,
      label: 'Marketing',
      color: 'red',
    }, {
      value: 40,
      label: 'Sales',
      color: 'blue'
    }, {
      value: 25,
      label: 'Support',
      color: 'green'
    }

  ]
    return (
      <View style={{flex: 1}}>
      <Card>
        <CardItem>
          <Left>
            <Body>
              <Text>Welcome to Spendsta!</Text>
              <Text note>Upload your receipts and get meaningful insights about your lifestyle choices, and much more.</Text>
              <ExpenseTrack/>
            </Body>
          </Left>
        </CardItem>
      </Card>
        <ScrollView>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Expense</Text>
                  <Text note>Your expense trend for this month.</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <PureChart data={sampleData} type='line' />
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Forecast</Text>
                  <Text note>This month's forecasted total expense.</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
                <View style={{width:100}}/><H1>$1000</H1>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Expenditure by Categories</Text>
                  <Text note>An breakdown of your expenditures.</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem><View style={{width:50}}/><PureChart width={'100%'} height={50} data={sampleData2} type='pie' /></CardItem>
          </Card>
          </ScrollView>
          <Footer>
            <FooterTab>
              <Button vertical active onPress={ ()=> Actions.expense()}>
                <Icon active name="pulse" />
                <Text>Expense</Text>
              </Button>
              <Button vertical onPress={ ()=> Actions.lifestyle()}>
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
