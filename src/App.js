import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Text, View, StatusBar } from "react-native";
import { RootNavigator } from "./navigator";

@connect(state => ({
  navigation: state.navigator,
}))
export default class AppWithNavigationState extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <StatusBar barStyle="light-content" /> */}
        <RootNavigator />
      </View>
    );
  }
}
