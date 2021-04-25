import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RoundedButton } from "../../components/RoundedButton";

const Timing = ({ onChangeTime }) => {
  return (
    <View style={styles.container}>
      <RoundedButton
        size={80}
        title="10"
        onPress={() => {
          onChangeTime(10);
        }}
      />
      <RoundedButton
        size={80}
        title="15"
        onPress={() => {
          onChangeTime(15);
        }}
      />
      <RoundedButton
        size={80}
        title="20"
        onPress={() => {
          onChangeTime(20);
        }}
      />
    </View>
  );
};

export default Timing;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
