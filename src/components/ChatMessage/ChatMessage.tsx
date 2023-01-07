import React, {useMemo} from "react";
import { View, Text, StyleSheet } from 'react-native';
import { PropsMessage } from "../../types/types";
import {format} from "date-fns";

const ChatMessage = ({ text, isAdmin, user, date }: PropsMessage): JSX.Element => {

  const formatDate = useMemo(() => {
    return format(new Date(date), "HH:mm")
  }, [date]);

  return <View style={[styles.container, isAdmin && styles.containerAdmin] }>
    <View style={[styles.box, isAdmin && styles.boxAdmin]}>
      <View>
        {isAdmin && (<View style={styles.user}>
          <Text style={styles.userCaption}>
            {user.name}
          </Text>
        </View>)}
        <View>
          <Text style={styles.text}>{text}</Text>
        </View>
        <View style={styles.date}>
          <Text style={styles.dateCaption}>
            {formatDate}
          </Text>
        </View>
      </View>
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
  user: {
    marginBottom: 5,
  },
  userCaption: {
    fontSize: 12,
    color: '#96959a',
  },
  text: {
    fontSize: 16,
  },
  boxAdmin: {
    backgroundColor: '#f1f3f5',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 10,
  },
  date: {},
  dateCaption: {
      textAlign: 'right',
      fontSize: 12,
    color: '#96959a',
  }
});

export default ChatMessage;
