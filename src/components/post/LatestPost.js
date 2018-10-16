import React, { Component } from 'react'

class LatestPost extends Component {
  render() {
    return <div className="w-2/5 p-3 shadow-md">
        <h1 className="text-xl text-grey-darkest">Latest posts</h1>
        <div className="flex flex-col mt-3">
          <div>
            <h1 className="text-base text-grey-darker">React with redux</h1>
            <p className="text-xs text-grey-dark">Posted by Herisson Silva</p>
          </div>
        </div>
      </div>;
  }
}

export default LatestPost