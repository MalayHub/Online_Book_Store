$(document).ready(function () {
    $('#username').blur(()=>validateUserName());
    $('#password').blur(()=>validatePassword());
    $('#regForm').submit(()=>validateForm());
    $('input[type=radio][name=gender]').change(()=>validateGender());
});
let radioArray=[];

function validateUserName() {
    if ($('#username').val()===''|| !$('#username').val().includes('@') || $('#username').val().endsWith('@')) {
        $('#username').css('border', '3px solid red');
        $('#usernameET').text('Invalid Username').show();
        return false;
    } else {
        $('#username').css('border', '3px solid green');
        $('#usernameET').hide();
        return true
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

function validateGender() {
    radioArray=[];
    document.getElementsByName('gender').forEach(node=> radioArray.push(node.checked));
    if (radioArray[0] || radioArray[1]) {
        $('#genderET').hide();
        return true;
    } else {
        $('#genderET').text('Select Gender').show();
        return false;
    }
}

function validateForm() {
    let v1 = validateUserName();
    let v2 = validatePassword();
    validateGender();
    return (v1 && v2 && (radioArray[0] || radioArray[1]));
}