import * as React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";

export default function HomeScreen({ navigation }) {
  const [inputValue, setInputValue] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        placeholder="type something and submit"
        blurOnSubmit={false}
        value={inputValue}
        onChangeText={setInputValue}
        onSubmitEditing={() => window.alert("without blurring, open the modal")}
        style={styles.input}
      />

      <RectButton
        onPress={() => navigation.navigate("Modal")}
        style={styles.button}
      >
        <Text>Open Modal</Text>
      </RectButton>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: "center"
  },
  input: {
    width: "90%",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#999",
    backgroundColor: "white"
  },
  button: {
    padding: 10,
    backgroundColor: "lightyellow",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#999"
  }
});
