import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import base_url from '../api/service'

export default function Courses({ course, update }) {

    const deleteCourse = (id) => {
        axios.delete(`${base_url}/deletecourse/${id}`).then(
            (response) => {
                update(id);
                toast.success("deleted sccessfully", {
                    position: "bottom-left",
                    autoClose: 2000,
                })
            },
            (error) => {
                toast.error("error occured", {
                    position: "bottom-left",
                    autoClose: 2000,
                })
            }
        )
    }
 
    return (
        <>
            <div className="container text-center mt-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold fw-bold">{course.title}</h5>
                        <p className="card-text">{course.description}</p>
                        <button className="btn btn-danger" onClick={() => deleteCourse(course.id)}>Delete</button>
                        <button className="btn btn-warning ms-2" onClick={updateCourse}>Update</button>
                    </div>
                </div>
            </div>

        </>


    )
}
