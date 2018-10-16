import React, { Component } from 'react'

class PostCard extends Component {
  render() {
    return (
      <div className="w-3/5 mx-auto text-grey-darkest mt-3 shadow-md">
        <img src="https://i.ytimg.com/vi/IIMUXbkKzW0/maxresdefault.jpg" />
        <div className="p-3">
          <h1 className="text-xl">React with redux</h1>
          <p className="mt-2 text-sm text-grey-darker">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            sagittis ipsum id neque volutpat euismod. Nam vel magna ac
            lectus fringilla gravida ac id magna...
          </p>
          <div className="flex justify-between px-2 py-2 text-grey-dark">
            <p className="text-sm">Posted by Herisson Silva</p>
            <p className="text-sm">13 of september, 5pm</p>
          </div>
        </div>
      </div>
    )
  }
}

export default PostCard