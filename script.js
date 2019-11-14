function create(){

    let complexity = document.getElementById("slider").value;

    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!$%&'()*+,-./:;<=>?@[]^_`{|}~";

    let password = "";

    // creates a random password full of the characters in line 5
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
    }

    document.getElementById("display").value = password;

    document.getElementById("lastPasswords").innerHTML += password + "<br />";

}

document.getElementById("length").innerHTML = "Length: 128";

document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
}
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }

}

function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password on clipboard!");
}
