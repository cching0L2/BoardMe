import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import * as constant from 'BoardMe/constants';

export const styles = StyleSheet.create({
	container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: "100%",
    height: "100%",
    backgroundColor: 'white',
  },
  authContainer: {
    top: "20%",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: "80%",
  },
  label: {
    width: "30%",
    fontFamily: constant.FONT_FAMILY_THEME,
    color: constant.COLOR_DARK_GREY,
    fontSize: 18,
  },
  textInput: {
    flexGrow: 1,
    height: 32,
    fontFamily: constant.FONT_FAMILY_THEME,
    color: constant.COLOR_GREY,
    fontSize: 18,
    paddingVertical: 4,
    borderColor: constant.COLOR_THEME_BLUE,
    borderWidth: 1,
    borderRadius: 5,
  },
  inputGroupContainer: {
    marginTop: 4,
    width: "100%",
    flexDirection: 'column',
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  authButtonView: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  errorView: {
    // borderColor: "red",
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%",
    height: 32,
    backgroundColor: '#A5000011',
  },
  errorIcon: {
    width: 28,
    height: 28,
  },
  errorMessage: {
    fontFamily: constant.FONT_FAMILY_THEME,
    color: constant.COLOR_DARK_RED,
    fontSize: 16,
    paddingLeft: 4,
  }
});