import React from 'react';
import Message from './message/message';
import { useState } from 'react';
import { INITIAl_MESSAGES } from './constants';
import getRandomMessage from './utils/getRandemMessage';

import './Main.css';


function Main() {
  const [messages, setMessages] = useState(INITIAl_MESSAGES);
  const [currentMessage, setCurrentMessage] = useState('');

const onTextAreaChange = ({target: {value}}) => {
    setCurrentMessage(value)
}
const onMessageReply = () => {
  setTimeout(() => {
    setMessages(prevState => ([
      ...prevState, getRandomMessage()
    ]))
  },1000)
}
const onButtonClick = () => {
  if(currentMessage.trim()){
    setMessages([...messages, {text:currentMessage, isCurrentUser: true}]);
    setCurrentMessage('')
    onMessageReply()
  }
}

  return (
    <div className="main__messages">
      <div className="main">
        {messages.map(({ text, isCurrentUser }, i) => (
          <Message key={i} text={text} isCurrentUser={isCurrentUser} />
        ))}
      </div>
      <div className='main__plate'>
        <textarea className='main__textarea' onChange={onTextAreaChange} value={currentMessage}/>
      </div>
      <div className='main__plate'>
        <button className='main__button' onClick={onButtonClick}>Send message</button>
      </div>
    </div>
  );
}

export default Main;
