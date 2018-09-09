import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View, StyleSheet, Text, ActivityIndicator, Image } from "react-native";
import * as PersonActions from "./action";
import { withMappedNavigationProps } from "react-navigation-props-mapper";

@withMappedNavigationProps()
@connect(
  state => ({
    user: state.person.get("user"),
    message: state.person.get("message"),
  }),
  dispatch => bindActionCreators(PersonActions, dispatch)
)
export default class PersonScreen extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const { username } = this.props;
    this.props.getUser(username);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.username !== this.props.username){
      this.props.getUserSuccess(null);
    }
  }

  render() {
    const { user } = this.props;

    if (!user) {
      return <ActivityIndicator size={"large"} />;
    }

    console.log(user);

    const obj = JSON.stringify(user);

    const image = user['avatar_url'];
    const name = user["name"];
    const location = user["location"];

    // console.log(user.name);

    return (
      <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.avatar} />

        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
  },
  nameContainer: {
    flex: 1,
    marginLeft: 16
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  name: {
    fontSize: 18,
    color: "#000",
  },
  location: {
    fontSize: 14,
    color: "#000",
  },
});
