import React, { useEffect, useState, Fragment } from 'react'
import axios from "axios"
import base_url from '../api/service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddCourse() {

    const su = () => toast.success("course added successfully", {
        position: "bottom-left",
        autoClose: 1000,
    });

    const er = () => toast.error("error occured", {
        position: "bottom-left",
        autoClose: 1000,
    });

    useEffect(() => {
        document.title = "Add Courses"
    }, []);

    const [course, setCourses] = useState({});

    const handelForm = (e) => {
        postDataServer(course);
        e.preventDefault();
    }

    const clear = () => {
        setCourses({ ...course, id: '', title: '', description: '' });

    }

    const postDataServer = (data) => {
        axios.post(`${base_url}/addcourse`, data).then(
            (response) => {
                su();
                setCourses({ ...course, id: "", title: "", description: "" })
            },
            (error) => {
                console.log(error)
                er();
            }

        )
    }

    return (
        <Fragment>
            <h1 className='text-center my-3'>Add Course</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="courseId" className="form-label">Course Id</label>
                    <input type="text" className="form-control" value={course.id} placeholder="Enter course id " onChange={(e) => { setCourses({ ...course, id: e.target.value }); }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="courseTitle" className="form-label">Course Title</label>
                    <input type="text" className="form-control" value={course.title} placeholder="Enter description" onChange={(e) => { setCourses({ ...course, title: e.target.value }); }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="courseDescription" className="form-label">Course Description</label>
                    <textarea className="form-control" value={course.description} placeholder="Enter description here" style={{ height: "100px" }} onChange={(e) => { setCourses({ ...course, description: e.target.value }); }}></textarea>
                </div>
            </form>
            <div className="container text-center">
                <button type="submit" className="btn btn-success " onClick={handelForm} >Add</button>
                <button type="clear" className="btn btn-warning ms-2" onClick={clear}>Clear</button>
            </div>
            <ToastContainer />
        </Fragment>
    )
}
