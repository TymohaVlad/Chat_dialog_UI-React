import React from "react";

import './message.css'

const CURRENT_USER_AVATAR_URL = 'https://randomuser.me/api/portraits/lego/1.jpg';
const SECOND_USER_AVATAR_URL = 'https://randomuser.me/api/portraits/lego/2.jpg';


function Message({text, isCurrentUser}){
    return(
        <div className={`message ${isCurrentUser ? "" : 'message__second'}`}>
            <div className="meaage__avatar">
                <img 
                    className="message__image"
                    src={isCurrentUser ? CURRENT_USER_AVATAR_URL : SECOND_USER_AVATAR_URL}
                    alt="lego"
                />
            </div>
            <div className="meaage__bobble">{text}</div>
        </div>
    )
}
export default Message