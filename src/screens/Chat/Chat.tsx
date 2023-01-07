import React, { useContext, useCallback, forwardRef } from 'react';
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet, TextInput,
  TouchableWithoutFeedback, View
} from "react-native";
import ChatMessage from "../../components/ChatMessage/ChatMessage";
import InputText from "../../components/InputText/InputText";
import { useHeaderHeight } from "@react-navigation/elements";
import { ChatContext } from "./ChatProvider";

type Props = {
  onSubmit: (message: string) => void;
}
const Chat = ({onSubmit}: Props): JSX.Element => {
  const height = useHeaderHeight()
  const messages = useContext(ChatContext)
  const ref = React.useRef(null);

  const onSubmitEditing = useCallback((e: any) => {
    onSubmit(e.nativeEvent.text)
    // @ts-ignore
    ref.current.clear()
  }, []);

  return (<SafeAreaView style={styles.container}>
    <KeyboardAvoidingView enabled
                          keyboardVerticalOffset={height}
                          behavior={Platform.OS === "ios" ? "padding" : "height"}
                          style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
        <FlatList contentContainerStyle={{
          paddingTop: 25,
          paddingBottom: 25,
          paddingHorizontal: 15,
        }} data={messages} renderItem={({item}) => <ChatMessage key={item.id} {...item} />} style={styles.container}/>
      </TouchableWithoutFeedback>
      <View style={styles.input}>
        <InputText ref={ref} onSubmitEditing={onSubmitEditing} placeholder={'Enter your message'} />
      </View>
    </KeyboardAvoidingView>
  </SafeAreaView>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#fff',
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
  },
});

export default Chat;
