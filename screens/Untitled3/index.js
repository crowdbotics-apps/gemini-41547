import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      flex: 1,
      flexDirection: 'column',
      height: '100%',
      padding: 10,
      backgroundColor: '#f0f0f1'
    }} style={styles.vaeiIVpX}>
        
          <View style={styles.column1}><View style={styles.jjpPOplk}></View></View>
          <View style={styles.column2}></View>
          <View style={styles.column3}></View>
        
        </ScrollView>
      </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    backgroundColor: "#e3e3e3"
  },
  column1: {
    flex: 1,
    backgroundColor: "#000000",
    borderColor: "#ffffff",
    position: "absolute"
  },
  column2: {
    flex: 1,
    backgroundColor: "#383838",
    borderColor: "#ffffff"
  },
  column3: {
    flex: 1,
    backgroundColor: "#000000",
    borderColor: "#ffffff"
  },
  vaeiIVpX: {
    borderRadius: 40,
    backgroundColor: "#ffffff",
    borderColor: "#000000",
    opacity: 1
  },
  jjpPOplk: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  }
});
export default Untitled3;