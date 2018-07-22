import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import * as constant from 'BoardMe/constants';
import PropTypes from 'prop-types';

export default class SimpleButton extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} underlayColor="white" activeOpacity={0.8}>
                <View
                    style={[styles.buttonView, {
                        backgroundColor: this.props.backgroundColor,
                        borderRadius: this.props.height / 2,
                        width: this.props.width,
                        height: this.props.height,
                        margin: this.props.margin,
                        marginLeft: this.props.marginLeft,
                        marginTop: this.props.marginTop,
                        marginRight: this.props.marginRight,
                        marginBottom: this.props.marginBottom,
                    }]}
                >
                    <Text style={[styles.buttonTitle, {
                        color: this.props.titleColor,
                        fontSize: this.props.titleFontSize,
                    }]}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTitle: {
        fontFamily: constant.FONT_FAMILY_THEME,
    }
});

SimpleButton.propTypes = {
    backgroundColor: PropTypes.string,
    title: PropTypes.string,
    titleFontSize: PropTypes.number,
    titleColor: PropTypes.string,
    margin: PropTypes.number,
    marginLeft: PropTypes.number,
    marginRight: PropTypes.number,
    marginTop: PropTypes.number,
    marginBottom: PropTypes.number,
};

SimpleButton.defaultProps = {
    backgroundColor: constant.COLOR_THEME_PURPLE,
    width: 200,
    height: 50,
    title: "Title",
    titleFontSize: 20,
    titleColor: constant.COLOR_WHITE,
    margin: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
};
