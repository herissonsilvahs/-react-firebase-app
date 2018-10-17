import React, { Component } from 'react'
import PostCard from './postCard/PostCard'

class ListPost extends Component {
  render() {
    return (
      <div className="list-post">
        <PostCard />
      </div>
    )
  }
}

export default ListPost