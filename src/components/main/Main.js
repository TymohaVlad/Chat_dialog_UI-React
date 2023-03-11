import React from 'react';
import { useState } from 'react';

import './Main.css';

export const INITIAl_MESSAGES = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isCurrentUser: true,
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isCurrentUser: false,
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isCurrentUser: true,
  },
];

function Main() {
  const [messages, setMessages] = useState(INITIAl_MESSAGES);

  return (
    <div className="main">
      {messages.map(({ text, isCurrentUser }, i) => (
        <div key={i}>{text}</div>
      ))}
    </div>
  );
}

export default Main;
