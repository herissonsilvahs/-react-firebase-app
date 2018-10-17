import React, { Component } from 'react'

class PostCard extends Component {
  render() {
    return (
      <div className="w-4/5 h-48 flex mx-auto text-grey-darkest mt-3 shadow-md">
        <img className="w-2/5" src="https://i.ytimg.com/vi/IIMUXbkKzW0/maxresdefault.jpg" />
        <div className="w-3/5 flex flex-col justify-between p-3">
          <h1 className="text-xl font-semibold">React with redux</h1>
          <p className="text-sm text-grey-darker">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            sagittis ipsum id neque volutpat euismod. Nam vel magna ac
            lectus fringilla gravida ac id magna...
          </p>
          <div className="flex justify-between text-grey-dark">
            <p className="text-sm">Posted by Herisson Silva</p>
            <p className="text-sm">13 of september, 5pm</p>
          </div>
        </div>
      </div>
    )
  }
}

export default PostCard