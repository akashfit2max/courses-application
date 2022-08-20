
import React, { useEffect } from 'react'

export default function Header() {

  useEffect(() => {
    document.title = "Home || Welcome"
  }, []); 

  return (
    <div className="bg-secondary p-2 text-dark bg-opacity-25 text-center">
      <div className="jumbotron m-4 text-center">
        <h1 className="display-4">Hello, Welcome! to the website</h1>
        <p>This website is a learning path for react for frontnd and spring boot for the backend</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </div>
    </div>

  )
}
