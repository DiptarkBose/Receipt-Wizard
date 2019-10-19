import React, { Component } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, H1 } from 'native-base';
import * as Font from 'expo-font'
import PureChart from 'react-native-pure-chart';

import Footer from '../components/LifestyleFooter'
export default class DisaggScreen extends Component {

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
      label: 'Energy (kcal)',
      color: 'red',
    }, {
      value: 40,
      label: 'Proteins',
      color: 'blue'
    },
    {
      value: 25,
      label: 'Sugar',
      color: 'green'
    },
    {
      value: 50,
      label: 'Carbohydrates',
      color: 'yellow',
    },
    {
      value: 40,
      label: 'Fat',
      color: 'pink'
    },
    {
      value: 25,
      label: 'Cholestrol',
      color: 'violet'
    }

  ]
    return (
      <View style={{flex: 1}}>

        <Card>
          <CardItem>
            <Left>
              <Body>
                <Text>Disaggregation</Text>
                <Text note>An analysis of your daily intake.</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem><PureChart width={'100%'} height={50} data={sampleData2} type='pie' /></CardItem>
        </Card>

        <Footer/>
      </View>
    )
  }
}
