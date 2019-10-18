import { Router, Stack, Scene } from "react-native-router-flux";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ExpenseScreen from "./screens/ExpenseScreen";
import RefillScreen from "./screens/RefillScreen";
import BellyScreen from "./screens/BellyScreen";
import LifestyleScreen from "./screens/LifestyleScreen";

const App = () => (
    <Router>
        <Scene key="root">

            <Scene
                key="expense"
                type="replace"
                title="Receipt Wizard"
                navigationBarStyle={styles.navBar}
                titleStyle={styles.title}
                component={ExpenseScreen}
                initial
            />
            <Scene
                key="lifestyle"
                type="replace"
                title="Receipt Wizard"
                navigationBarStyle={styles.navBar}
                titleStyle={styles.title}
                component={LifestyleScreen}
            />
            <Scene
                key="refill"
                type="replace"
                title="Receipt Wizard"
                navigationBarStyle={styles.navBar}
                titleStyle={styles.title}
                component={RefillScreen}
            />
            <Scene
                key="belly"
                type="replace"
                title="Receipt Wizard"
                navigationBarStyle={styles.navBar}
                titleStyle={styles.title}
                component={BellyScreen}
            />
        </Scene>
    </Router>
);

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#3F51B5',
  },
  title: {
    color: '#FFFFFF',
    fontWeight: '900'
  }
})
export default App;
