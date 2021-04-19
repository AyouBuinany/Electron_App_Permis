    // ---------------------add New Product-------------------- 

let Register = document.getElementById('save');

   Register &&  Register.addEventListener('click', (e) => {
    e.preventDefault();
    let matricule = document.getElementById('matricule').value;
        let firstName = document.getElementById('firstName').value;
        let lastName = document.getElementById('lastName').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let confirmerPassword = document.getElementById('confirmerPassword').value;
        let phone = document.getElementById('phone').value;
        let adress = document.getElementById('adress').value;
        let license_number =document.getElementById('license_number').value

    
        let data= {
            matricule,
            firstName,
            lastName,
            email,
            password,
            confirmerPassword,
            adress,
            phone,
            license_number
        }

console.log({data})

        axios.post('http://localhost:4000/api/register',data)
            .then(function (response) {
    console.log(response);
                const myNotification = new Notification('Notification', {
                    body: 'Register successfully'
                })
                location.reload();
    
            })
            .catch(function (err) {
                console.log(err);
                (err.response.data.error.message!==undefined) ? 
                alert(err.response.data.error.message)
                : 
                alert(err.response.data.error.errors)
            });
    })


    let confirmer = document.getElementById('confirmer');

    confirmer && confirmer.addEventListener('click',()=>{
    let searchUrl =window.location.search;
    let newSearch= searchUrl.replace('?', '');
    let sendtoken=  newSearch.split('=');
   let token = sendtoken[0]=="token" && sendtoken[1];
console.log(token)
    axios.post('http://localhost:4000/api/confirmer',{'token':token})
    .then(function (response) {
        console.log(response);
                    const myNotification = new Notification('Notification', {
                        body: 'Confirmer successfully'
                    })
                   window.location.href="loginConducteur.html";
        
                })
                .catch(function (err) {
                    console.log(err);
                    (err.response.data.error.message!==undefined) ? 
                    alert(err.response.data.error.message)
                    : 
                    alert(err.response.data.error.errors)
                });
    })



    ///LOGIN CONDUCTEUR ///

  let  loginConducteur = document.getElementById('loginConducteur');

  loginConducteur && loginConducteur.addEventListener('click', () => {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
let data = {
    email,
    password
}
console.log(data)
    axios.post('http://localhost:4000/api/login',data)
    .then(function (response) {
        console.log(response);
                    const myNotification = new Notification('Notification', {
                        body: 'login Conducteur successfully'
                    })
                   window.location.href="HomeConducteur.html";
        
                })
                .catch(function (err) {
                    console.log(err);
                    (err.response.data.error.message!==undefined) ? 
                    alert(err.response.data.error.message)
                    : 
                    alert(err.response.data.error.errors)
                });


    // if(user == "ayoub" && password =="ayoub"){

    //   window.location.href="Category.html";
    
    // }
    // else{
    //   alert("Username or Password invalid !!!!!!!!!!");
    //  }
})