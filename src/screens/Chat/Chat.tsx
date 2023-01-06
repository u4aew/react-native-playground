import React, { useContext } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView, StyleSheet, Text,
  TouchableWithoutFeedback, View
} from "react-native";
import InputText from "../../components/InputText/InputText";
import { useHeaderHeight } from "@react-navigation/elements";
import { ChatContext } from "./ChatProvider";
type Props = {
  onSubmit: (message: string) => void;
}
const Chat = ({onSubmit}: Props): JSX.Element => {
  const height = useHeaderHeight()
  const value = useContext(ChatContext)

  return (<SafeAreaView style={styles.container}>
    <KeyboardAvoidingView enabled
                          keyboardVerticalOffset={height}
                          behavior={Platform.OS === "ios" ? "padding" : "height"}
                          style={styles.keyboard}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text>
            {JSON.stringify({ value })}
          </Text>
        </ScrollView>
      </TouchableWithoutFeedback>
      <View style={styles.input}>
        <InputText/>
      </View>
    </KeyboardAvoidingView>
  </SafeAreaView>)
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'pink',
    flex: 1,
  },
  input: {
    backgroundColor: 'red',
  },
  keyboard: {
    backgroundColor: 'blue',
    flex: 1,
  }
});

export default Chat;
