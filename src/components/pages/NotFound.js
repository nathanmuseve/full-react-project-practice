import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <div className="not-found">
        <h1>404 Error! Oops!</h1>
        <p>The page you are looking for could not be found.</p>
        <p>Return <Link to="/">Home Page</Link></p>
      </div>
    </div>
  )
}
