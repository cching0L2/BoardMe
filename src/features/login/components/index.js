import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image } from 'react-native';
import * as constant from 'BoardMe/constants';
import { styles } from './styles'
import SimpleButton from 'BoardMe/src/components/simpleButton';
import validator from 'validator';
import * as authApi from 'BoardMe/src/api/authApi';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authState: 'login',
      errorMessage: '',
      email: '',
      password: '',
      username: '',
      passwordConf: '',
    }
  }

  onLoginPressed = () => {
    if (!this.validate()) {
      return
    }

    authApi.login(this.state.email, this.state.password).then(
      () => {
        // TODO: transition to next screen
        console.log("login successful")
      },
      (error) => this.setState({errorMessage: error.error || LOGIN_FAILED})
    )
  }

  onRegisterPressed = () => {
    const isValid = this.validate()

    authApi.register(this.state.email, this.state.username, this.state.password, this.state.passwordConf).then(
      () => {
        // TODO: show toast
        console.log("register successful")
        // Prompt user to login, clear password
        this.setState({
          authState: AUTH_STATE_LOGIN,
          password: '',
          passwordConf: '',
        })
      },
      (error) => this.setState({errorMessage: error.error || REGISTER_FAILED})
    )
  }

  onChangeAuthStatePressed = () => {
    this.setState({
      authState: this.state.authState === AUTH_STATE_LOGIN ? 
        AUTH_STATE_REGISTER : 
        AUTH_STATE_LOGIN
    });
  }

  onChangeText = (fieldKey, text) => {
    this.setState({[fieldKey]: text})
  }

  validate = () => {
    // Validate form input, set error message
    if (!this.state.email) {
      this.setState({'errorMessage': ERROR_MISSING_EMAIL})
      return false
    }
    if (!validator.isEmail(this.state.email)) {
      this.setState({'errorMessage': ERROR_INVALID_EMAIL_FORMAT})
      return false
    }
    if (!this.state.password) {
      this.setState({'errorMessage': ERROR_MISSING_PASSWORD})
      return false
    }

    if (this.state.authState === AUTH_STATE_REGISTER) {
      if (!this.state.username) {
        this.setState({'errorMessage': ERROR_MISSING_USERNAME})
        return false
      }
      if (this.state.password.length < 6) {
        this.setState({'errorMessage': ERROR_PASSWORD_TOO_SHORT})
        return false
      }
      if (this.state.password !== this.state.passwordConf) {
        this.setState({'errorMessage': ERROR_PASSWORDS_DONT_MATCH})
        return false
      }
    }

    this.setState({'errorMessage': ''})
    return true
  }


  // ================ View components ================ //
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

  _getAuthStateCallback = () => {
    return this.state.authState === AUTH_STATE_LOGIN ? 
      this.onLoginPressed :
      this.onRegisterPressed
  }

  _getInputGroupForAuthState = () => {
    if (this.state.authState === AUTH_STATE_LOGIN) {
      return (
        <View style={styles.inputGroupContainer}>
          <View style={styles.inputGroup} key="email">
            <Text style={styles.label}>Email</Text>
            <TextInput 
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={(text) => this.onChangeText("email", text)}
              value={this.state.email}
            />
          </View>
          <View style={styles.inputGroup} key="password">
            <Text style={styles.label}>Password</Text>
            <TextInput 
              secureTextEntry={true} 
              style={styles.textInput}
              onChangeText={(text) => this.onChangeText("password", text)}
              value={this.state.password}
            />
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.inputGroupContainer}>
          <View style={styles.inputGroup} key="email">
            <Text style={styles.label}>Email</Text>
            <TextInput
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={(text) => this.onChangeText("email", text)}
              value={this.state.email}
            />
          </View>
          <View style={styles.inputGroup} key="username">
            <Text style={styles.label}>Username</Text>
            <TextInput
             autoCapitalize="none"
              style={styles.textInput}
              onChangeText={(text) => this.onChangeText("username", text)}
              value={this.state.username}
            />
          </View>
          <View style={styles.inputGroup} key="password">
            <Text style={styles.label}>Password</Text>
            <TextInput 
              secureTextEntry={true} 
              style={styles.textInput}
              onChangeText={(text) => this.onChangeText("password", text)}
              value={this.state.password}
            />
          </View>
          <View style={styles.inputGroup} key="passwordConf">
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput 
              secureTextEntry={true}
              style={styles.textInput}
              onChangeText={(text) => this.onChangeText("passwordConf", text)}
              value={this.state.passwordConf}
            />
          </View>
        </View>
      )
    }
  }

  _getErrorView = () => {
    return (
      <View style={styles.errorView}>
        <Image
          style={styles.errorIcon}
          source={require('BoardMe/src/assets/icons/red_error.png')}
        />
        <Text style={styles.errorMessage}>
          {this.state.errorMessage}
        </Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.authContainer}>
          {this.state.errorMessage && this._getErrorView()}
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
              onPress={this._getAuthStateCallback()}
              width={160}
              height={40}
            />
          </View>
        </View>
      </View>
    );
  }
}

// TODO: move these to separate file?
const AUTH_STATE_LOGIN = "login"
const AUTH_STATE_REGISTER = "register"

const AUTH_STATE_LOGIN_SEND_TITLE = "Login"
const AUTH_STATE_REGISTER_SEND_TITLE = "Register"

const AUTH_STATE_LOGIN_TEXT = "Already have an account? Log in"
const AUTH_STATE_REGISTER_TEXT = "Don't have an account? Sign up"

const ERROR_MISSING_EMAIL = "Email missing"
const ERROR_INVALID_EMAIL_FORMAT =  "Invalid email format"
const ERROR_MISSING_PASSWORD = "Password missing"
const ERROR_PASSWORD_TOO_SHORT = "Password must have at least 6 characters"
const ERROR_MISSING_USERNAME = "Username missing"
const ERROR_PASSWORDS_DONT_MATCH = "Passwords do not match"

const LOGIN_FAILED = "Login failed"
const REGISTER_FAILED = "Registration failed"

const authButtonStyle = {
  width: 160,
  height: 40,
};