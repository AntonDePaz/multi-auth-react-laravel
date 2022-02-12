import Home from "../../components/staff/Dashboard";
import Login from "../../components/staff/Login";
import Register from "../../components/staff/Register";




const GuestRoute = [
    { path : '/staff' , exact : true , name : 'Home' , component : Home},
   // { path : '/staff/login' , exact : true , name : 'Login' , component : Login},
];


export default GuestRoute;