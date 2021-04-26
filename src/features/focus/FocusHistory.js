import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, SafeAreaView } from "react-native";

import { fontSizes, paddingSizes } from "../../utils/sizes";
import { RoundedButton } from "../../components/RoundedButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FocusHistory = ({ focusHistory, setFocusHistory }) => {
  const clearHistory = () => {
    setFocusHistory([]);
  };

  const saveFocusHistory = async () => {
    try {
      await AsyncStorage.setItem("focusHistory", JSON.stringify(focusHistory));
    } catch (e) {
      console.log(e);
    }
  };

  const loadFocusHistory = async () => {
    try {
      const history = await AsyncStorage.getItem("focusHistory");
      if (history && JSON.parse(history).length) {
        setFocusHistory(JSON.parse(history));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadFocusHistory();
  }, []);

  useEffect(() => {
    saveFocusHistory();
  }, [focusHistory]);

  return (
    <>
      <SafeAreaView style={{ flex: 0.5, alignItems: "center" }}>
        <Text style={{ fontSize: fontSizes.lg, color: "white" }}>
          Things we've focused on
        </Text>
        {!!focusHistory.length && (
          <>
            <FlatList
              style={{ width: "100%", height: "100%", paddingTop: 16 }}
              contentContainerStyle={{ alignItems: "center" }}
              data={focusHistory}
              keyExtractor={(item) => item.key}
              renderItem={({ item, index }) => (
                <Text style={styles.historyItem(item.status)}>
                  {item.subject}
                </Text>
              )}
            />
            <View style={styles.clearContainer}>
              <RoundedButton
                size={75}
                title="Clear"
                onPress={() => clearHistory()}
              />
            </View>
          </>
        )}
        {!focusHistory.length && (
          <Text style={{ color: "white" }}>Nothing yet</Text>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status === 1 ? "green" : "red",
    fontSize: 20,
  }),
  clearContainer: {
    alignItems: "center",
    padding: 10,
  },
});
