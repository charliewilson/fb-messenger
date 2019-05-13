import React, { Component } from 'react'
import { Route } from 'react-router'

import UserDetail from './UserDetail'
import Messages from './Messages'
import ChatBar from './ChatBar'

const Chat = ({ match, username, messages }) => {
  if (!messages.length) {
    return <h2>Loading...</h2>
  }

  const totalMessages = messages.length

  return (
    <div className="chat">
      <ChatBar username={username} match={match} totalMessages={totalMessages} />
      <div className="chat-content">
        <Messages messages={messages} username={username} />
        <Route
          path={`${match.path}/detail`}
          render={() => <UserDetail username={username} />}
        />
      </div>
    </div>
  )
}

export default Chat
