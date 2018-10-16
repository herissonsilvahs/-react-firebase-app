import React, { Component } from 'react'

class LatestPost extends Component {
  render() {
    return (
      <div className="w-2/5 p-3">
        <div className="flex h-auto">
          <input className="py-1 px-2 border border-blue-dark bg-transparent rounded" />
          <button className="btn btn-blue-dark">Search</button>
        </div>
        <h1 className="text-sm text-grey-darkest mt-5 uppercase">Latest posts</h1>
        <div className="flex flex-col mt-3">
          <div className="mb-3">
            <h1 className="text-lg text-grey-darker">React with redux</h1>
            <p className="text-xs text-grey-dark">Posted by Herisson Silva</p>
          </div>
          <div className="mb-3">
            <h1 className="text-lg text-grey-darker">React with redux</h1>
            <p className="text-xs text-grey-dark">Posted by Herisson Silva</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestPost