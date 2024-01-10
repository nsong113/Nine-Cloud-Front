import { FormEvent } from 'react';

export interface Message {
  _id: string;
  user: {
    name: string;
  };
  chat: string;
}

export interface MessageContainerProps {
  messageList: Message[];
  user: {
    name: string;
  };
}

export interface InputFieldProps {
  message: string;
  setMessage: (message: string) => void;
  sendMessage: (event: FormEvent<HTMLFormElement>) => void;
}
