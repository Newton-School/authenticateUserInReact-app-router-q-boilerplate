"use client"
import { useState } from 'react'
import { AuthContext } from './Context/AuthContext'
import Link from "next/link";

export default function Home() {
  const [emailVal, setEmailVal] = useState("");
  const [passVal, setPassVal] = useState("");

  if (loggedIn) {
    return <Link id='redirect-link' href="/Dashboard">Redirecting...</Link>;
  }

  return (
    <div id="loginPage">
      <h1 id="login-tag">Login</h1>
      <form>
        <h3>Email:</h3>
        <input
          placeholder="abc@gmail.com"
          type="email"
          id="login-email"
        />

        <h3>Password:</h3>
        <input
          placeholder="Enter password"
          type="password"
          id="login-password"
        />
        <br />
        <button id="login-submit" type="submit">
          Login
        </button>
      </form>
      <br />
      Don't have an account ?
      <button id="login-to-register">
        <Link href="/Register">Register here...</Link>
      </button>
    </div>
  )
}
