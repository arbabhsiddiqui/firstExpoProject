import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Countdown } from "../../components/Countdown";
import { RoundedButton } from "../../components/RoundedButton";

import { fontSizes, PaddingSizes } from "../../utils/sizes";

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.countdownContainer}>
        <Countdown isPaused={!isStarted} />
      </View>

      <View>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.subject}>{focusSubject}</Text>
      </View>

      {isStarted ? (
        <RoundedButton title="stop" onPress={() => setIsStarted(false)} />
      ) : (
        <RoundedButton title="start" onPress={() => setIsStarted(true)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: PaddingSizes.xxl,
    justifyContent: "center",
    alignItems: "center",
  },
  countdownContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: fontSizes.lg,
    textAlign: "center",
  },
  subject: {
    color: "#fff",
    textAlign: "center",
    fontSize: fontSizes.xxl,
    fontWeight: "600",
  },
});
