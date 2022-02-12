//const token = false;


const hasToken = () => {
     if(localStorage.getItem('authtoken')){
       var name = localStorage.getItem('authname');  
       var role = localStorage.getItem('authtype'); 
       var data = { isLogin : true , name : name, role : role }
       return data;
    }else{
       //return false
      // var data2 = { isLogin : false , name : null, role : 404 }
       return false;

    }
}

export default hasToken;