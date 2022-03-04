import React from "react";
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from "react-native";




const UselessTextInput = () => {
  const [text, onChangeText] = React.useState(null);
  const [password, onChangeNumber] = React.useState(null);


  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="E-mail"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={password}
        placeholder="useless placeholder"
        keyboardType="password"
      />
      <TouchableOpacity onPress={() => {}}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    
  },
});

export default UselessTextInput;

