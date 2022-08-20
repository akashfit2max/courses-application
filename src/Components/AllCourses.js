import React, { useEffect, useState } from 'react'
import Courses from './Courses'
import axios from "axios"
import base_url from '../api/service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AllCourses() {

    useEffect(() => {
        document.title = "All Courses";
    }, []);




    const getAllCourses = () => {
        axios.get(`${base_url}/allcourses`).then(
            (response) => {

                toast.success("course loaded successfully", {
                    position: "bottom-left",
                    autoClose: 1000,
                });
                setCourses(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("filed to load", {
                    position: "bottom-left",
                    autoClose: 1000,
                });
            }
        );
    };


    useEffect(() => {
        getAllCourses();
    }, []);




    const [courses, setCourses] = useState([]);

    const updateCourse = (id) => {
        setCourses(courses.filter((c) => c.id !== id));
    }

    return (

        <div>
            <ToastContainer />
            <h1>All courses</h1>
            <p>list of all the courses</p>
            {courses.length > 0 ? courses.map((item) => <Courses key={item.id} course={item} update={updateCourse} />) : "No course available"}

        </div >
    )
}
