import React, { Component } from 'react'
import { ActivityIndicator, View, ScrollView } from 'react-native'
import { Container, CardItem, Card, Content, Left, Body, Text, Image, Button, Icon, Right, List, ListItem, Footer, FooterTab } from 'native-base'
import * as Font from 'expo-font'
import { Actions } from "react-native-router-flux";

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
                <Text>Help us give you better suggestions!</Text>
                <Text note>Spare a few minutes to discuss your previous receipt with us.</Text>
              </Body>
              <Button rounded success style={{alignItems: 'center'}}  onPress={ ()=> Actions.survey()}>
                <Text>Take the Survey!</Text>
              </Button>
            </CardItem>
          </Card>

          <Card>
          <View style={{backgroundColor:'green', width:360, height:10}}/>
            <CardItem>
              <Body>
                <Text>Most frequently bought items.</Text>
                <Text note>Your purchase trends show high frquency of buying these products.</Text>
              </Body>
            </CardItem>
            <List>
            <ListItem>
                <Text>Nestle Maggi</Text>
              </ListItem>
              <ListItem>
                <Text>Hide&Seek Cookies</Text>
              </ListItem>
              <ListItem>
                <Text>Lays American Style</Text>
            </ListItem>
          </List>
          </Card>

          <Card>
          <View style={{backgroundColor:'yellow', width:360, height:10}}/>
            <CardItem>
              <Body>
                <Text>Moderately frequently bought items.</Text>
                <Text note>Your purchase trends show moderate frquency of buying these products.</Text>
              </Body>
            </CardItem>
            <List>
            <ListItem>
                <Text>Medimix Soap (x3)</Text>
              </ListItem>
              <ListItem>
                <Text>Head and Shoulders Shampoo</Text>
              </ListItem>
              <ListItem>
                <Text>Cherry Shoe Polish</Text>
            </ListItem>
          </List>
          </Card>

          <Card>
          <View style={{backgroundColor:'red', width:360, height:10}}/>
            <CardItem>
              <Body>
                <Text>Items to avoid</Text>
                <Text note>You marked these products as 'To Avoid' in the survey.</Text>
              </Body>
            </CardItem>
            <List>
            <ListItem>
                <Text>Goldflake Cigarettes</Text>
              </ListItem>
              <ListItem>
                <Text>M&M Choco Rush</Text>
              </ListItem>
              <ListItem>
                <Text>Bira Boom</Text>
            </ListItem>
          </List>
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
            <Button vertical active onPress={ ()=> Actions.refill()}>
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
