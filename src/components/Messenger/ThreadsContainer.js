import React, { Component } from 'react'

import Threads from './Threads'
import { fetchThreads } from '../../api/thread'

class ThreadsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      threads: [],
    }
    // hint, add some state here
  }

  componentDidMount() {
    fetchThreads()
      .then(({ threads }) => {
        this.setState({ threads })
      })
      .catch(err => {
        console.log(err)
      })
    // hint, you should fetch the threads here
  }

  render() {
    const { threads } = this.state

    return (
      <Threads threads={threads} />
      // hint, which component and props do you think we should return here?
    )
  }
}

export default ThreadsContainer
