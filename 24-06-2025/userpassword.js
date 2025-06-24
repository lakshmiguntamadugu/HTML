var username=prompt("enter username");
var password=prompt("enter password");
if(password.length()<3)
{
    console.log("password should have min 3 characters");
}
else if(username.substr(0,3)===password.substr(0,3))
{
    console.log("successfully");
}
else{
    console.log("invalid password");
}