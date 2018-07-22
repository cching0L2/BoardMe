import React, { Component } from "react";
import { createStackNavigator } from 'react-navigation';
import { Text, View } from 'react-native';
import Login from 'BoardMe/src/features/login/containers';
import * as screenName from "../screen_names";
import * as constant from 'BoardMe/constants';

const ApplicationNavigator = createStackNavigator({
    [screenName.LOGIN]: {screen: Login},
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: constant.COLOR_THEME_BLUE,
            height: 48,
        },
        headerTitleStyle: {
            fontSize: 20,
            fontFamily: constant.FONT_FAMILY_THEME,
        },
        headerTintColor: constant.COLOR_WHITE,
    }
});

// TODO: some sort of navigation settings

class ApplicationNavigatorContainer extends Component {
    render() {
        return (
            <ApplicationNavigator />
        );
    }
}

export default ApplicationNavigatorContainer;