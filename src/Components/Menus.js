import React from 'react'
import { Link } from 'react-router-dom'

export default function Menus() {
  return (
    <div className="list-group">
      <Link to="/" className="list-group-item list-group-item-action">Home</Link>
      <Link to="/add-course" className="list-group-item list-group-item-action">Add Course</Link>
      <Link to="/view-courses" className="list-group-item list-group-item-action">View Course</Link>
      <Link to="#!" className="list-group-item list-group-item-action">About</Link>
      <Link to="#!" className="list-group-item list-group-item-action">Contact</Link>
    </div>
  )
}


