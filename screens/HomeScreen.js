import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import api from "../api";

const styles = StyleSheet.create({
  container: {
    padding: 25
  },
  heading: {
    fontSize: 34,
    fontWeight: "bold"
  },
  fact: {
    container: {
      padding: 10
    },
    text: {
      fontSize: 24,
      fontStyle: "italic",
      color: "grey"
    }
  },
  button: {
    container: {
      backgroundColor: "black",
      padding: 10,
      borderRadius: 5,
      marginTop: 10
    },
    text: {
      color: "white",
      fontSize: 18,
      textAlign: "center",
      fontWeight: "bold"
    }
  },
  catImage: {
    container: { marginVertical: 10 },
    image: {
      width: Dimensions.get("screen").width - 50,
      height: Dimensions.get("screen").height / 2
    }
  }
});

const HomeScreen = ({ route }) => {
  const [catFact, setCatFact] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const { lang } = route.params;

  const generateNewFact = () => {
    lang && api.getRandomFact(lang).then((fact) => setCatFact(fact));
  };

  useEffect(generateNewFact, [lang]);

  if (!catFact)
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Your daily CatFact is.....</Text>
      <View style={styles.fact.container}>
        <Text style={styles.fact.text}>{catFact}</Text>
      </View>
      <TouchableHighlight
        onPress={generateNewFact}
        style={styles.button.container}>
        <Text style={styles.button.text}>Get a new fact 🐈</Text>
      </TouchableHighlight>
      <View style={styles.catImage.container}>
        {imageLoading && <ActivityIndicator size="large" color="blue" />}
        <Image
          source={{
            uri: "https://cataas.com/cat"
          }}
          alt="random cat photo"
          style={styles.catImage.image}
          onLoadStart={() => setImageLoading(true)}
          onLoadEnd={() => setImageLoading(false)}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
