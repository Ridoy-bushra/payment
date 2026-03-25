document.getElementById('login-btn').addEventListener('click',function(){
    const numberInput=document.getElementById('input-number');
    const contactNumber=numberInput.value;
    const inputPin=document.getElementById('input-pin');
    const pin=inputPin.value;
    if(contactNumber==='01689780909' && pin==='1225'){
        alert("login successful");
        window.location.assign("home.html");

    }
    else{
        alert("login failed");
        return;
    }
});