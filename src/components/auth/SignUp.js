import React, { Component } from 'react'
import brand from "../../assets/images/innovation.svg";

class SignOut extends Component {
  render() {
    return (
      <div className="container flex w-full pt-20">
        <form className="flex flex-col w-1/4 mx-auto mt-20">
          <div className="flex flex-col justify-center items-center">
            <img src={brand} className="w-24" />
            <h1 className="text-2xl text-grey-dark font-normal mt-6">Sign Up</h1>
          </div>
          <div className="flex flex-col mt-6">
            <input className="input shadow p-4 my-2" placeholder="First Name" type="text" />
            <input className="input shadow p-4 my-2" placeholder="Last Name" type="text" />
            <input className="input shadow p-4 my-2" placeholder="Email" type="email" />
            <input className="input shadow p-4 my-2" placeholder="Password" type="password" />
            <div></div>
            <button className="py-3 mt-4 text-lg btn btn-blue-dark rounded-none">Create Account</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignOut