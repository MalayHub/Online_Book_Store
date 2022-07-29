$(document).ready(function () {
    $('#username').blur(()=>validateUserName());
    $('#password').blur(()=>validatePassword());
    $('#loginForm').submit(()=>validateForm());
});

function validateUserName() {
    if ($('#username').val()===''|| !$('#username').val().includes('@') || $('#username').val().endsWith('@')) {
        $('#username').css('border', '3px solid red');
        $('#usernameET').text('Invalid Username').show();
        return false;
    } else {
        $('#username').css('border', '3px solid green');
        $('#usernameET').hide();
        return true;
    }
}

function validatePassword() {
    let regx=new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$");
    if ($('#password').val()==="" || RegExp.test($('#password').val())) {
        $('#password').css('border', '3px solid red');
        $('#passwordET').text('Invalid Password or Password is weak').show();
        return false;
    } else {
        $('#password').css('border', '3px solid green');
        $('#passwordET').hide();
        return true;
    }
}
function validateForm() {
    let v1 = validateUserName();
    let v2 = validatePassword();
    return (v1 && v2);
}