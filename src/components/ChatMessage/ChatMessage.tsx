import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { PropsMessage } from "../../types/types";

const ChatMessage = ({ text, isAdmin }: PropsMessage): JSX.Element => {
  return <View style={[styles.container, isAdmin && styles.containerAdmin] }>
    <View style={[styles.box, isAdmin && styles.boxAdmin]}>
      <Text>{text}</Text>
    </View>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    alignItems: 'flex-end',
  },
  containerAdmin: {
    alignItems: 'flex-start',
  },
  box: {
    width: '50%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#ccf1ba',
    borderBottomRightRadius: 0,
  },
  boxAdmin: {
    backgroundColor: '#f1f3f5',
    borderBottomLeftRadius: 0,
  },
});

export default ChatMessage;
