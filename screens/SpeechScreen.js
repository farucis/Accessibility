import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  TouchableWithoutFeedback,
  Linking,
} from "react-native";
import * as Speech from "expo-speech";
import React from "react";

import SpeechButton from "../components/Speech/SpeechButton";
import Tabs from "../components/Share/Tabs";

const SpeechScreen = ({ navigation, route }) => {
  const [name, setName] = React.useState("");

  const speakGreeting = () => {
    const greeting = ` ${name}`;
    const options = {
      voice: "com.apple.ttsbundle.Carmit-compact",
      pitch: 1.5,
      rate: 0.7,
    };
    Speech.speak(greeting, options);
  };

  const [activeTab, setActiveTab] = React.useState("Speech");

  React.useEffect(() => {
    setActiveTab(route.params ? route.params.activeTab : "Speech");
  }, [activeTab]);

  return (
    <View style={{ flex: 1 }}>
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
      <View style={styles.container}>
        <Text style={styles.text}>Text to speech</Text>
        <TextInput style={styles.input} onChangeText={setName} value={name} />
        <SpeechButton speakGreeting={speakGreeting} />
      </View>
      {/* </TouchableWithoutFeedback> */}

      <Tabs
        navigation={navigation}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightcyan",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    alignSelf: "stretch",
    borderBottomWidth: 2,
    borderBottomColor: "darkblue",
    marginHorizontal: 30,
    margin: 8,
    fontSize: 26,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  text: {
    fontSize: 40,
    display: "flex",
    marginBottom: 50,
  },
});

export default SpeechScreen;
