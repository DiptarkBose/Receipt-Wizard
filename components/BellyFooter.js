import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, StyleProvider } from 'native-base';
import {ToastAndroid} from 'react-native';
import { Actions } from "react-native-router-flux";

export default class BellyFooter extends Component {
  componentWillMount() {
  }
  render() {
    return (
        <Container>
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
              <Button vertical onPress={ ()=> Actions.refill()}>
                <Icon name="cart" />
                <Text>Refill</Text>
              </Button>
              <Button vertical active onPress={ ()=> Actions.belly()}>
                <Icon name="apps" />
                <Text>Recipes</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
    );
  }
}
