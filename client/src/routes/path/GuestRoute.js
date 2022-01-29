import Home from "../../components/guests/Home";
import Login from "../../components/guests/Login";
import Register from "../../components/guests/Register";




const GuestRoute = [
    { path : '/guest' , exact : true , name : 'Home' , component : Home},
    { path : '/guest/register' , exact : true , name : 'Home' , component : Register},
    { path : '/guest/login' , exact : true , name : 'Login' , component : Login},
];


export default GuestRoute;