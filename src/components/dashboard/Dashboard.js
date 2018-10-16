import React, { Component } from 'react'
import ListPost from '../post/ListPost'
import LatestPost from '../post/LatestPost'

class Dashboard extends Component {
  render() {
    return (
      <div className="container flex w-full pt-20">
        <ListPost />
        <LatestPost />
      </div>
    )
  }
}

export default Dashboard