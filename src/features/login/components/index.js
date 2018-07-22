import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image } from 'react-native';
import * as constant from 'BoardMe/constants';
import { styles } from './styles'
import SimpleButton from 'BoardMe/src/components/simpleButton';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authState: 'login',
      errorMessage: "Both email and password are required",
      email: null,
      password: null,
      username: null,
      passwordConf: null,
    }
  }

  onLoginPressed = () => {
    // TODO:  validate, and make API call
    console.log("on login pressed");
  }

  onRegisterPressed = () => {
    // TODO:  validate, and make API call
    console.log("on register pressed");
  }

  onChangeAuthStatePressed = () => {
    this.setState({
      authState: this.state.authState === AUTH_STATE_LOGIN ? 
        AUTH_STATE_REGISTER : 
        AUTH_STATE_LOGIN
    });
  }

  _getAuthStateText = () => {
    return this.state.authState === AUTH_STATE_LOGIN ? 
      AUTH_STATE_REGISTER_TEXT :
      AUTH_STATE_LOGIN_TEXT
  }

  _getAuthStateSendTitle = () => {
    return this.state.authState === AUTH_STATE_LOGIN ? 
      AUTH_STATE_LOGIN_SEND_TITLE :
      AUTH_STATE_REGISTER_SEND_TITLE
  }

  _getInputGroupForAuthState = () => {
    if (this.state.authState === AUTH_STATE_LOGIN) {
      return (
        <View style={styles.inputGroupContainer}>
          <View style={styles.inputGroup} key="email">
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.textInput}></TextInput>
          </View>
          <View style={styles.inputGroup} key="password">
            <Text style={styles.label}>Password</Text>
            <TextInput secureTextEntry={true} style={styles.textInput}></TextInput>
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.inputGroupContainer}>
          <View style={styles.inputGroup} key="email">
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.textInput}></TextInput>
          </View>
          <View style={styles.inputGroup} key="username">
            <Text style={styles.label}>Username</Text>
            <TextInput style={styles.textInput}></TextInput>
          </View>
          <View style={styles.inputGroup} key="password">
            <Text style={styles.label}>Password</Text>
            <TextInput secureTextEntry={true} style={styles.textInput}></TextInput>
          </View>
          <View style={styles.inputGroup} key="passwordConf">
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput secureTextEntry={true} style={styles.textInput}></TextInput>
          </View>
        </View>
      )
    }
  }

  function ErrorView(props) {
    <View style={styles.errorView}>
      <Image
        style={styles.errorIcon}
        source={require('BoardMe/src/assets/icons/red_error.png')}
      />
      <Text style={styles.errorMessage}>
        Error message goes here
      </Text>
    </View>
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.authContainer}>
          
          {this._getInputGroupForAuthState()}
          <View style={styles.authButtonView}>
            <SimpleButton
              title={this._getAuthStateText()}
              backgroundColor="white"
              titleColor={constant.COLOR_THEME_PINK}
              titleFontSize={16}
              onPress={this.onChangeAuthStatePressed}
              width="100%"
              height={40}
            />
          </View>
          <View style={styles.authButtonView}>
            <SimpleButton
              title={this._getAuthStateSendTitle()}
              backgroundColor={constant.COLOR_THEME_ORANGE}
              onPress={this.onLoginPressed}
              width={160}
              height={40}
            />
          </View>
        </View>
      </View>
    );
  }
}

const AUTH_STATE_LOGIN = "login"
const AUTH_STATE_REGISTER = "register"

const AUTH_STATE_LOGIN_SEND_TITLE = "Login"
const AUTH_STATE_REGISTER_SEND_TITLE = "Register"

const AUTH_STATE_LOGIN_TEXT = "Already have an account? Log in"
const AUTH_STATE_REGISTER_TEXT = "Don't have an account? Sign up"

const authButtonStyle = {
  width: 160,
  height: 40,
};