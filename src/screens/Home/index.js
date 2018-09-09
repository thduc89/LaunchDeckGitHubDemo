import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text } from "react-native";
import RoundButton from "../../components/RoundButton";
import { NavigationActions, StackActions } from "react-navigation";

const topFive = ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"];

export default class HomeScreen extends Component {
  _navigateToPerson = username => {
    const pushAction = StackActions.push({
      routeName: "Person",
      params: {
        username: username,
      },
    });
    this.props.navigation.dispatch(pushAction);
  };

  _renderButtons = () => {
    return topFive.map(username => (
      <RoundButton
        style={styles.button}
        onPress={() => this._navigateToPerson(username)}
      >
        {username}
      </RoundButton>
    ));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigTitle}>Top 5 GitHub Users</Text>
        <Text style={styles.des}>Tap the username to see more information</Text>

        <View style={styles.buttonsContainer}>{this._renderButtons()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  bigTitle: {
    fontSize: 20,
    color: "#000",
  },
  des: {
    fontSize: 12,
    color: "#000",
    marginTop: 16,
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
  },
  button: {
    marginTop: 4,
    marginRight: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
