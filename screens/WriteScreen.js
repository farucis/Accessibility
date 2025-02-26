import React from "react";
import { View, StyleSheet, Text } from "react-native";
import * as MediaLibrary from "expo-media-library";

import Tabs from "../components/Share/Tabs";
import RecordVoice from "../components/Write/RecordVoice";
import SoundVoice from "../components/Write/SoundVoice";

const WriteScreen = ({ navigation, route }) => {
  const [activeTab, setActiveTab] = React.useState(route.params?.activeTab);

  React.useEffect(() => {
    setActiveTab(route.params ? route.params.activeTab : "Write");
  }, [activeTab]);

  const [soundRecording, setSoundRecording] = React.useState("");

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightcyan",
      }}
    >
      <Text style={styles.text}>Speech to text</Text>
      <RecordVoice setSoundRecording={setSoundRecording} />
      {soundRecording ? <SoundVoice soundRecording={soundRecording} /> : null}

      <Tabs
        navigation={navigation}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    display: "flex",
    marginBottom: 100,
  },
});

export default WriteScreen;
