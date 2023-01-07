import React, {useCallback, useEffect} from 'react';
import { io } from "socket.io-client";
import {PropsMessage} from '../../types/types';

const socket = io('http://localhost:3000');
export const ChatContext = React.createContext<PropsMessage[]>([]);

type Props = {
  children: (e: any) => React.ReactNode;
}

// @ts-ignore
const ChatProvider = ({children}: Props): JSX.Element => {
  const [messages, setMessages] = React.useState<PropsMessage[]>([]);

  useEffect(() => {
    socket.on("loadingMessages", (messages) => {
      setMessages(JSON.parse(messages));
    });
  },[])

  useEffect(() => {
    socket.on("getMessageServer", (message) => {
      const newMessage = JSON.parse(message);
      const newMessages = [...messages, newMessage];
      setMessages(newMessages);
    });
  }, [messages]);

  const onSubmit = useCallback((message: string) => {
    socket.emit('sendMessageClient', message);
  }, []);

  return <ChatContext.Provider value={messages}>{children(onSubmit)}</ChatContext.Provider>
}

export default ChatProvider;
