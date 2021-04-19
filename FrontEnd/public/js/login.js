login = document.getElementById('login');

login.addEventListener('click', () => {

    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    
    
    if(user == "ayoub" && password =="ayoub"){

      window.location.href="Home.html";
    
    }
    else{
      alert("Username or Password invalid !!!!!!!!!!");
     }
})
// ------------------------------------------------------------------




