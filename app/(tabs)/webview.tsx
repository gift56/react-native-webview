import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

const Webview: React.FC = () => {
  const [url, setUrl] = useState<string>("https://x.com/");
  const [inputUrl, setInputUrl] = useState<string>("https://");

  const handleGoPress = () => {
    setUrl(inputUrl);
    setInputUrl("https://")
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter URL"
            value={inputUrl}
            onChangeText={setInputUrl}
            keyboardType="url"
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor="white"
          />
          <Button title="Go" onPress={handleGoPress} />
        </View>
        <WebView
          source={{ uri: url }}
          onLoad={() => console.log("Loaded!")}
          onError={() => console.error("Error")}
          style={styles.webview}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#252424",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: "white",
  },
  webview: {
    flex: 1,
  },
});

export default Webview;
