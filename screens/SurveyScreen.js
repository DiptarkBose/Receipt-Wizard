import React, { Component } from 'react'
import { ActivityIndicator, View, ScrollView, Picker } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, H1, Footer, FooterTab } from 'native-base';
import * as Font from 'expo-font'
import PureChart from 'react-native-pure-chart';
import { Actions } from "react-native-router-flux";
import PickerCheckBox from 'react-native-picker-checkbox';

//import Footer from '../components/ExpenseFooter'
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
    const items = [
      {
        itemKey:1,
        itemDescription:'Cigarettes'
        },
      {
        itemKey:2,
        itemDescription:'Movie Tickets'
        },
      {
        itemKey:3,
        itemDescription:'Bars'
      },
      {
        itemKey:4,
        itemDescription:'Shoe Lace'
        },
      {
        itemKey:5,
        itemDescription:'Mortein Mosquito Spray'
        }
    ];
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Select the items you don't want to buy ever again!</Text>
                  <Text note>We noticed that you bought some items that people usually try to avoid buying, maybe because its useless or injurious to health. Select such items so that we can raise alerts in case you buy the product again! </Text>
                </Body>
              </Left>
            </CardItem>
            <PickerCheckBox
              data={items}
              headerComponent={<Text style={{fontSize:25}} >items</Text>}
              OnConfirm={(pItems) => this.handleConfirm(pItems)}
              ConfirmButtonTitle='OK'
              DescriptionField='itemDescription'
              KeyField='itemKey'
              placeholder='Click here to select items for banning'
              arrowColor='#FFD740'
              arrowSize={10}
              placeholderSelectedItems ='$count selected item(s)'
            />
          </Card>

          </ScrollView>
          <Footer>
            <FooterTab>
              <Button vertical onPress={ ()=> Actions.expense()}>
                <Icon active name="pulse" />
                <Text>Expense</Text>
              </Button>
              <Button vertical onPress={ ()=> Actions.lifestyle()}>
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
