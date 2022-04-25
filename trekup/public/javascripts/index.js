import {currentUser} from './login.js'
$(document).ready(function(){
    alert(currentUser.Uname);
    if(currentUser === 'nu'){
        alert(currentUser.Uname);
    }
    else{
        alert(currentUser.Uname);
        $("#login").text("Sign Out");
    }
})
