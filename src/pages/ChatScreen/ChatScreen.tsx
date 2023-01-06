import React from 'react';
import { Text, View } from 'react-native';
import { io } from "socket.io-client";
import InputText from '../../components/InputText/InputText';
import {Message} from "../../types/Message";
const socket = io('http://localhost:3000');
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements'

const ChatScreen = () => {
  const [connected, setConnected] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([]);
  const height = useHeaderHeight()
  socket.on("loading", (messages) => {
    setConnected(true);
    setMessages(JSON.parse(messages));
  });

  socket.on("messageServer", (message) => {
    console.log(message); // world
  });

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView enabled
                            keyboardVerticalOffset={height}
                            behavior={Platform.OS === "ios" ? "padding" : "height"}
                            style={styles.keyboard}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <Text>
              {JSON.stringify(messages)}
            </Text>
          </ScrollView>
        </TouchableWithoutFeedback>
        <View style={styles.input}>
          <InputText/>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

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

export default ChatScreen;
