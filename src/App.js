import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Shared/HomePages/Home';
import AdminDashBoard from './Pages/AdminPages/AdminDashBoard/AdminDashBoard';
import DashBoardHome from './Pages/AdminPages/AdminDashBoard/DashBoardHome';
import AddNewBlog from './Pages/AdminPages/AddNewBlog/AddNewBlog';
import ManageBlogs from './Pages/AdminPages/MangeAllBlogs/ManageBlogs';
import ManageRequestBlog from './Pages/AdminPages/MangeRequestBlog/ManageRequestBlog';
import MakeAdmin from './Pages/AdminPages/MakeAdmin/MakeAdmin';
import BlogDetails from './Pages/Shared/HomePages/Allblogs/BlogDetails';
import AddYourExperience from './Pages/UserPages/AddYourExperience/AddYourExperience';
import Login from './Pages/Shared/Authentication/Login/Login';
import Register from './Pages/Shared/Authentication/Register/Register';
import Privateroute from './PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/HomePages/Footer/Footer';
import LowerExpense from './Pages/UserPages/LowerExpense/LowerExpense';
import TravelAdvise from './Pages/UserPages/TravelAdvise/TravelAdvise';
import TravelPhotography from './Pages/UserPages/TravelPhotography/TravelPhotography';

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/blogdetails/:id" element={<Privateroute><BlogDetails/></Privateroute>}/>
            <Route path="/AddYourExperience" element={<Privateroute><AddYourExperience/></Privateroute>}/>
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/LowerExpense" element={<LowerExpense/>} />
            <Route path="/TravelAdvise" element={<TravelAdvise/>} />
            <Route path="/TravelPhotography" element={<TravelPhotography/>} />

  {/* ----------------admin routes------------------- */}
            <Route path="/dashboard" element={<AdminDashBoard/>}>
                <Route path="/dashboard" element={<DashBoardHome/>} />
                <Route path="/dashboard/AddNewBlog" element={<AddNewBlog/>} />
                <Route path="/dashboard/ManageBlogs" element={<ManageBlogs/>} />
                <Route path="/dashboard/ManageRequestBlog" element={<ManageRequestBlog/>} />
                <Route path="/dashboard/MakeAdmin" element={<MakeAdmin/>} />
            </Route>
          </Routes>
          <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
