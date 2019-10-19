import { Router, Stack, Scene } from "react-native-router-flux";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SQLite from "expo-sqlite";

import ExpenseScreen from "./screens/ExpenseScreen";
import RefillScreen from "./screens/RefillScreen";
import BellyScreen from "./screens/BellyScreen";
import LifestyleScreen from "./screens/LifestyleScreen";
import DisaggScreen from "./screens/DisaggScreen";
import SurveyScreen from "./screens/SurveyScreen";

window.Expo = Object.freeze({ ...window.Expo, SQLite });
const App = () => (
    <Router>
        <Scene key="root">

            <Scene
                key="expense"
                type="replace"
                title="Spend Sight"
                navigationBarStyle={styles.navBar}
                titleStyle={styles.title}
                component={ExpenseScreen}
                initial
            />
            <Scene
                key="lifestyle"
                type="replace"
                title="Spend Sight"
                navigationBarStyle={styles.navBar}
                titleStyle={styles.title}
                component={LifestyleScreen}
            />
            <Scene
                key="refill"
                type="replace"
                title="Spend Sight"
                navigationBarStyle={styles.navBar}
                titleStyle={styles.title}
                component={RefillScreen}
            />
            <Scene
                key="belly"
                type="replace"
                title="Spend Sight"
                navigationBarStyle={styles.navBar}
                titleStyle={styles.title}
                component={BellyScreen}
            />
            <Scene
                key="disagg"
                title="Spend Sight"
                navigationBarStyle={styles.navBar}
                titleStyle={styles.title}
                component={DisaggScreen}
            />
            <Scene
                key="survey"
                type="replace"
                title="Spend Sight"
                navigationBarStyle={styles.navBar}
                titleStyle={styles.title}
                component={SurveyScreen}
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
