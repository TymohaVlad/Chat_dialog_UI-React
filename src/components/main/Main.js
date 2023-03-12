import React from 'react';
import Message from './message/message';
import { useState } from 'react';

import './Main.css';

export const INITIAl_MESSAGES = [
  {
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    isCurrentUser: true,
  },
  {
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    isCurrentUser: false,
  },
  {
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    isCurrentUser: true,
  },
];

function Main() {
  const [messages, setMessages] = useState(INITIAl_MESSAGES);
  const [currentMessage, setCurrentMessage] = useState('');

const onTextAreaChange = ({target: {value}}) => {
    setCurrentMessage(value)
}
const onMessageReply = () => {
  setTimeout(() => {
    setMessages(prevState => ([...prevState, {text: 'test text', isCurrentUser: false}]))
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
