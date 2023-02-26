import { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import LanguageSelector from "../components/LanguageSelector";
import languages from "../languages";

const WelcomeScreen = ({ navigation }) => {
  const [lang, setLang] = useState(languages["Spanish"]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cat FactApp 😹</Text>
      <LanguageSelector onSelect={setLang} value={lang} />
      <Text
        style={{
          fontSize: 25,
          marginVertical: 15,
          textAlign: "center",
          color: "grey"
        }}>
        You selected : {languages[lang]}
      </Text>
      <TouchableHighlight
        style={styles.button.container}
        onPress={() => {
          navigation.navigate("Home", { lang: lang });
        }}>
        <Text style={styles.button.text}>Confirm selection</Text>
      </TouchableHighlight>
      <Text
        style={{
          fontSize: 15,
          marginVertical: 15,
          color: "grey"
        }}>
        Tip: You can change it later!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  heading: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold"
  },
  button: {
    container: {
      marginVertical: 10,
      backgroundColor: "blue",
      padding: 10,
      borderRadius: 10,
      display: "flex",
      justifyContent: "center",
      flexDirection: "row"
    },
    text: {
      color: "white",
      fontWeight: "bold",
      fontSize: 30
    }
  }
});

export default WelcomeScreen;
