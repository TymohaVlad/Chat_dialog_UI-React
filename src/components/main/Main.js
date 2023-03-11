import React from 'react';
import Message from './message/message';
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
    <div className="main__messages">
      <div className="main">
        {messages.map(({ text, isCurrentUser }, i) => (
          <Message key={i} text={text} isCurrentUser={isCurrentUser} />
        ))}
      </div>
      <div className='main__plate'>
        <textarea/>
      </div>
      <div className='main__plate'>
        <button>Send message</button>
      </div>
    </div>
  );
}

export default Main;
