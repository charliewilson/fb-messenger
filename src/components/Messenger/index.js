import React from 'react'
import { Route } from 'react-router-dom'

import ThreadsContainer from './ThreadsContainer'
import ChatContainer from './Chat/ChatContainer'

const Messenger = ({ match }) => (
  <div className="messenger">
    <ThreadsContainer />
    <Route path={`${match.path}/:username`} component={ChatContainer} />
  </div>
)
export default Messenger
