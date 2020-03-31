import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function ModalScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Did keyboard dismiss?</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center"
  }
});
