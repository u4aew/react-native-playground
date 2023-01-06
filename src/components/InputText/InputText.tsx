import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
const InputText = () => {
  return (
    <View>
      <TextInput style={style.input} />
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    backgroundColor: 'violet',
    height: 50,
  }
});

export default InputText;
