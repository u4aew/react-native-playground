import React, {forwardRef} from 'react';
import {View, TextInputProps, TextInput, StyleSheet} from 'react-native';


const InputText = forwardRef((props: TextInputProps, ref: any) => {
  return <View style={style.container}>
    <TextInput ref={ref} style={style.input} {...props}/>
  </View>;
})

const style = StyleSheet.create({
  container: {

  },
  input: {
    backgroundColor: '#f1f3f5',
    borderRadius: 5,
    height: 45,
    paddingVertical: 10,
    paddingHorizontal: 10,
  }
});

export default InputText;
