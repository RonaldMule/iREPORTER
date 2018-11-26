function login_user(){
        var user = document.getElementById('username').value;
        var pass = document.getElementById('mypassword').value;
        console.log(user)
        if (user == 'admin') {
            window.location.href = './templates/admin.html';
        } else {
            window.location.href = './templates/user.html';
        }
    
       


}