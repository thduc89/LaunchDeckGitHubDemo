import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import styles from "./style";

export default class RoundButton extends Component {
  static propTypes = {
    onPress: PropTypes.func,
  };

  render() {
    const { children, onPress, style } = this.props;

    return (
      <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
        <Text style={styles.title} >{children}</Text>
      </TouchableOpacity>
    );
  }
}
