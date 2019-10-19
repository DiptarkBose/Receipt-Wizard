import React, { Component } from 'react'
import { ActivityIndicator, View, Alert } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, H1 } from 'native-base';
import * as Font from 'expo-font'
import PureChart from 'react-native-pure-chart';
const { FoodDatabaseClient } = require('edamam-api');
import Footer from '../components/LifestyleFooter'
export default class DisaggScreen extends Component {

  state = {
    isReady: false,
    Cholestrol: 0,
    Energy: 0
  }

  componentWillMount = async() => {
    await Font.loadAsync({
      Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf')
    })
    this.setState({ isReady: true })
    await this.callIt();
  }

  async callIt()
  {
    console.log("Hello");
    const client = new FoodDatabaseClient({
      appId: 'ad13bdac',
      appKey: '1ce620c8617edffbf6a3bd05453cb28c'
    });
    const results = await client.search({ query: 'Maggi' });
    await this.setState({Cholestrol: results['hints'][0]['food']['nutrients']['CHOCDF']});
    await this.setState({Energy: results['hints'][0]['food']['nutrients']['ENERC_KCAL']});
  }

  render () {
    if (!this.state.isReady) {
      return <ActivityIndicator />
    }

  let sampleData2 = [
    {
      value: this.state.Energy,
      label: 'Energy (kcal)',
      color: 'red',
    }, {
      value: 40.277776,
      label: 'Proteins',
      color: 'blue'
    },
    {
      value: 25.89898,
      label: 'Sugar',
      color: 'green'
    },
    {
      value: 50.98,
      label: 'Carbohydrates',
      color: 'yellow',
    },
    {
      value: 40.2347,
      label: 'Fat',
      color: 'pink'
    },
    {
      value: this.state.Cholestrol,
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
                <Text note>An analysis of your food intake.</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem><View style={{width:50}}/><PureChart width={'100%'} height={50} data={sampleData2} type='pie' /></CardItem>
        </Card>
        <Card>
          <CardItem>
            <Left>
              <Body>
                <Text>Say no to Fat!</Text>
                <Text note>Take the survey and ask for an abstinence from fatty, unhealthy products! </Text>
              </Body>
            </Left>
            <Button rounded success style={{alignItems: 'center'}}  onPress={ ()=> Actions.survey()}>
              <Text>Take the Survey!</Text>
            </Button>
          </CardItem>
        </Card>
        <Footer/>
      </View>
    )
  }
}
