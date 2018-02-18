import React from 'react'
import PropTypes from 'prop-types'

import Threads from './Threads'
import Conversation from './Conversation'


const Messenger = ({showSettings, newMessage, selectUser, selectedUser, conversation}) => (
  <div className="messenger">
    <Threads
      showSettings={showSettings}
      newMessage={newMessage}
      selectUser={selectUser}
    />
    <Conversation
      selectedUser={selectedUser}
      conversation={conversation}
    />
  </div>
)

Messenger.propTypes = {
  showSettings: PropTypes.func,
  newMessage: PropTypes.func,
  selectUser: PropTypes.func,
  selectedUser: PropTypes.obj,
  conversation: PropTypes.array,
}

export default Messenger
