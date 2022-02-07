//GET 
//POS
//Regular Expression pattern 

function validation(){
    event.preventDefault();
    var userName = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;
    cpassword
    // console.log(userName)

    if(userName == '' || age == '' ||  password == '' || cpassword == ''){
        alert("Enter All fields");
        return false;
    }
    if(userName.length < 5){
        alert("Name must br greater than 5");
    }

    if(isNaN(age)){
        alert("Enter Number");
    }

    if(password != cpassword){
        alert("password does not match");
    }

}