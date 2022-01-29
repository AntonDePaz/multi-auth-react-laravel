import Home from "../../components/students/Home";
import Login from "../../components/students/Login";
import Register from "../../components/students/Register";





const StudentRoute = [
    { path : '/' , exact : true , name : 'Home' , component : Home},
    { path : '/register' , exact : true , name : 'UserList' , component : Register},
    { path : '/login' , exact : true , name : 'Logn' , component : Login},
];


export default StudentRoute;