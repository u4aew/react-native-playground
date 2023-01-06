import React from 'react';
import Chat from './Chat';
import ChatProvider from "./ChatProvider";

const ChatScreen = (): JSX.Element => {
  return (
    <ChatProvider>
      {(onSubmit) => <Chat onSubmit={onSubmit}/>}
    </ChatProvider>
  );
};
export default ChatScreen;
