import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Countdown } from "../../components/Countdown";
import { RoundedButton } from "../../components/RoundedButton";

import { fontSizes, PaddingSizes } from "../../utils/sizes";

import { ProgressBar } from "react-native-paper";

import Timing from "./Timing";

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [minutes, setMinutes] = useState(1);
  const [progress, setProgress] = useState(1);

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const onChangeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdownContainer}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
        />
      </View>

      <View>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.subject}>{focusSubject}</Text>
      </View>

      <View style={styles.progressContainer}>
        <ProgressBar
          progress={progress}
          color="#5e84e2"
          style={{ height: 10 }}
        />
      </View>
      <View>
        <Timing onChangeTime={onChangeTime} />
      </View>
      <View style={styles.btnContainer}>
        {isStarted ? (
          <RoundedButton title="stop" onPress={() => setIsStarted(false)} />
        ) : (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: PaddingSizes.xxl,
    justifyContent: "center",
  },
  countdownContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  progressContainer: {
    marginVertical: 20,
  },
  btnContainer: {
    marginVertical: 20,
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
