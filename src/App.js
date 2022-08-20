import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./Components/Header"
import Courses from "./Components/Courses"
import AllCourses from './Components/AllCourses';
import AddCourse from './Components/AddCourse';
import Menus from './Components/Menus';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <div className='bg-warning p-3 m-2 rounded-2 text-center'>
            <h1>Welcome to the Courses Application</h1>
          </div>
          <div className='m-2'>
            <div className="row">
              <div className="col-4">
                <Menus />
              </div>
              <div className="col-8">
                <Routes>
                  <Route path="/" element={<Header />} exact/>
                  <Route path="/add-course" element={<AddCourse />} exact/>
                  <Route path="/view-courses" element={<AllCourses />} exact/>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </>

  );
}

export default App;
