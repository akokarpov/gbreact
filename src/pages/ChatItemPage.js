
import React from 'react';
import { useParams } from 'react-router-dom';

export const ChatItemPage = (props) => {

    let { id } = useParams();
  
    return (
        <div>
       <h1>Test ID:{id} {props.chatId}</h1>
        </div>
    );
  };