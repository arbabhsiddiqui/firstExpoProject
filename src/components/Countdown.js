import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { fontSizes, PaddingSizes } from "../utils/sizes";

export const Countdown = ({ minutes = 0.6, isPaused, onProgress, onEnd }) => {
  const minToMills = (min) => min * 1000 * 60;
  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  const [mills, setMills] = useState(null);
  const interval = React.useRef(null);

  const countDownNumber = () => {
    setMills((time) => {
      if (time === 0) {
        clearInterval(interval.current);

        return time;
      }
      const timeLeft = time - 1000;

      return timeLeft;
    });
  };

  useEffect(() => {
    setMills(minToMills(minutes));
  }, [minutes]);

  useEffect(() => {
    onProgress(mills / minToMills(minutes));

    if (mills === 0) {
      onEnd();
    }
  }, [mills]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDownNumber, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);

  const minute = Math.floor(mills / 1000 / 60) % 60;
  const second = Math.floor(mills / 1000) % 60;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {formatTime(minute)}:{formatTime(second)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  text: {
    color: "#fff",
    fontSize: fontSizes.xxxl,
    textAlign: "center",
    fontWeight: "bold",
    padding: PaddingSizes.lg,
    backgroundColor: "rgba(94,132,226,0.3)",
  },
});
