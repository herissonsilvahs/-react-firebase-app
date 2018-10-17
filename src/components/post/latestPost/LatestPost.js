import React, { Component } from 'react'
import { connect } from 'react-redux'

class LatestPost extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="w-2/5 p-3">
        <div className="flex h-auto">
          <input className="input blue-dark" placeholder="Search" />
          <button className="btn btn-blue-dark rounded-none">Search</button>
        </div>
        <h1 className="text-sm text-grey-darkest mt-5 uppercase">Latest posts</h1>
        <div className="flex flex-col mt-3">
          <div className="mb-3 text-right">
            <h1 className="text-lg text-grey-darker">React with redux</h1>
            <p className="text-xs text-grey-dark">Posted by Herisson Silva</p>
          </div>
          <div className="mb-3 text-right">
            <h1 className="text-lg text-grey-darker">VueJS and Tailwind</h1>
            <p className="text-xs text-grey-dark">Posted by Herisson Silva</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    post: state.post
  }
}

export default connect(mapState)(LatestPost);