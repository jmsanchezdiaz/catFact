import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import languages from "../languages";

const LanguageSelector = ({ onSelect, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Choose a fact language</Text>
      <Picker
        accessibilityLabel="Select a language"
        selectedValue={value}
        onValueChange={(itemValue) => onSelect(itemValue)}>
        {Object.entries(languages).map(([key, value]) => (
          <Picker.Item key={key} label={key} value={value} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  label: {
    fontSize: 30,
    textAlign: "center",
    color: "grey"
  }
});

export default LanguageSelector;
