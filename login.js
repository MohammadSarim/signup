
         function submit() {
            var name = document.getElementById("name");
            var email = document.getElementById("email");
            var password = document.getElementById("password");
            
            localStorage.setItem(name,name.value);
            localStorage.setItem(email,email.value);
            localStorage.setItem(password,password.value);

            if (name.value === "" && email.value === "" && password.value === "") {
        alert("Please Fill The Form First");    }
        else{
            name.value = "";
            password.value = "";
            email.value = "";
            // number.value = "";
            window.location = "login.html"
        }    
}
    function login (){
        var userEmail = document.getElementById("userEmail");
        var userPassword = document.getElementById("userPassword");
        var storageEmail = localStorage.getItem("email");
        var storagePassword = localStorage.getItem("password");
        if(userEmail.value === storageEmail && userPassword.value === storagePassword) {
            alert("Login Successful");
            // window.location = "gossip.html";
        }
    else ("login failed");
    }
    