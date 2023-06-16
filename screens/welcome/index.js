import { StyleSheet } from "react-native";
import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { styles } from "./styles";

const WelcomeScreen = () => {
  return <SafeAreaView style={[styles.container, _styles.qubJKkkT]}>
      <ScrollView contentContainerStyle={styles.scrollView} style={[_styles.ZDZESKGx, _styles.qubJKkkT]}>
        <View style={[styles.group, _styles.qubJKkkT]} />
        <View style={[styles.group, _styles.qubJKkkT]}>
          
          
        </View>
        
      <Text style={_styles.mJiXUFkA}>{"GEMINI"}</Text></ScrollView>
    </SafeAreaView>;
};

export default WelcomeScreen;

const _styles = StyleSheet.create({
  ZDZESKGx: {
    borderRadius: 40,
    backgroundColor: "#000000",
    borderColor: "#ffffff"
  },
  qubJKkkT: {
    backgroundColor: "#000000"
  },
  mJiXUFkA: {
    width: 357,
    height: 94,
    lineHeight: 85,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "700",
    letterSpacing: 35,
    position: "absolute",
    top: 231,
    left: 12,
    fontFamily: "Open Sans"
  }
});