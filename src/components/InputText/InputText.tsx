import React from 'react';
import {View, TextInputProps, TextInput, StyleSheet} from 'react-native';


const InputText = (props: TextInputProps) => {
  return (
    <View>
      <TextInput placeholderTextColor={'#999a9b'} style={style.input} {...props} />
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    backgroundColor: '#f1f3f5',
    borderRadius: 5,
    height: 45,
    paddingVertical: 10,
    paddingHorizontal: 10,
  }
});

export default InputText;
