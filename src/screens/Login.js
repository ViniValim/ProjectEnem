import React from "react";
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from "react-native";




const UselessTextInput = () => {
  const [text, onChangeText] = React.useState(null);
  const [password, onChangeNumber] = React.useState(null);


  return (
    <SafeAreaView>
      <TextInput style={styles.input} placeholder='E-mail' />
      <TextInput style={styles.input} placeholder='Senha' />
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

