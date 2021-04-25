import React, { useState } from "react";
import { Text, View, StyleSheet, Vibration, Platform } from "react-native";
import { Countdown } from "../../components/Countdown";
import { RoundedButton } from "../../components/RoundedButton";

import { fontSizes, PaddingSizes } from "../../utils/sizes";

import { ProgressBar } from "react-native-paper";

import Timing from "./Timing";
import { useKeepAwake } from "expo-keep-awake";

export const Timer = ({ focusSubject, onTimerEnd, onClearSubject }) => {
  useKeepAwake();
  const DEFAULT_TIME = 0.1;
  const [isStarted, setIsStarted] = useState(false);
  const [minutes, setMinutes] = useState(DEFAULT_TIME);
  const [progress, setProgress] = useState(1);

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const onChangeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };

  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
  ];

  const vibrate = () => {
    if (Platform.OS === "ios") {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => (clearInterval(interval), 10000));
    } else {
      Vibration.vibrate(1000);
    }
  };

  const onEnd = () => {
    vibrate();
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
  };

  const clearSubject = () => {
    onClearSubject();
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdownContainer}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onEnd={onEnd}
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
      <View style={styles.btnContainer}>
        <RoundedButton title="-" size={50} onPress={() => clearSubject()} />
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
