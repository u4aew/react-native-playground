import React, {useCallback} from 'react';
import { io } from "socket.io-client";
const socket = io('http://localhost:3000');
export const ChatContext = React.createContext([{}]);

type Props = {
  children: (e: any) => React.ReactNode;
}

// @ts-ignore
const ChatProvider = ({children}: Props): JSX.Element => {
  const [connected, setConnected] = React.useState(false);
  const [messages, setMessages] = React.useState([]);
  socket.on("loading", (messages) => {
    setConnected(true);
    console.log(messages, messages)
    setMessages(JSON.parse(messages));
  });

  socket.on("messageServer", (message) => {
    console.log(message); // world
  });


  const onSubmit = useCallback((message: string) => {
    console.log(message);
  }, []);

  return <ChatContext.Provider value={messages}>{children(onSubmit)}</ChatContext.Provider>
}

export default ChatProvider;
