import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStackNavigator } from "react-navigation";
import PropTypes from "prop-types";
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Easing,
  Animated,
} from "react-native";
import HomeScreen from "./screens/Home";
import PersonScreen from "./screens/Person";

const slideTransition = () => {
  return {
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      const width = layout.initWidth;
      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [width, 0, 0],
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      });

      return { opacity, transform: [{ translateX }] };
    },
  };
};

export const RootNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Person: { screen: PersonScreen },
  },
  {
    headerMode: "screen",
    mode: "card",
    navigationOptions: {
      gesturesEnabled: true,
    },
    transitionConfig: slideTransition,
  }
);
