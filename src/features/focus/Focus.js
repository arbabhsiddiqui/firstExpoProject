import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import { TextInput } from "react-native-paper";

import { RoundedButton } from "../../components/RoundedButton";

import { fontSizes, PaddingSizes } from "../../utils/sizes";
export const Focus = ({ addSubject }) => {
  const [temp, setTemp] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>What would like to focus on ?</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={{ flex: 1, marginRight: 10 }}
          onSubmitEditing={({ nativeEvent }) => {
            setTemp(nativeEvent.text);
          }}
        />
        <RoundedButton size={50} title="+" onPress={() => addSubject(temp)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: "row",
  },
  textContainer: {
    paddingTop: PaddingSizes.xxxl,
    fontSize: fontSizes.md,
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: fontSizes.lg,
  },
  inputContainer: {
    paddingTop: PaddingSizes.md,
    flexDirection: "row",
    alignItems: "center",
  },
});
