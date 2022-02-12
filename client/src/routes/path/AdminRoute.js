import Home from "../../components/admin/Dashboard";
import Login from "../../components/admin/Login";
import Staff from "../../components/admin/Staff";
import Students from "../../components/admin/Students";





const AdminRoute = [
    { path : 'admin' , exact : true , name : 'Home' , element : <Home/>},
   // { path : '/admin/students' , exact : true , name : 'Students' , component : Students},
  //  { path : '/admin/login' , exact : true , name : 'Login' , component : Login},
   // { path : '/admin/staff' , exact : true , name : 'Staff' , component : Staff},
];


export default AdminRoute;