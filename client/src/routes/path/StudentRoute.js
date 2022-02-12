import Home from "../../components/students/Dashboard";
import Login from "../../components/students/Login";
import Register from "../../components/students/Register";





const StudentRoute = [
    { path : '/' , exact : true , name : 'Home' , component : Home},
    { path : '/register' , exact : true , name : 'UserList' , component : Register},
   //  { path : '/login' , exact : true , name : 'Login' , component : Login},
];


export default StudentRoute;