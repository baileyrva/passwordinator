var instructions =
  "Your password must be at least 8 characters and must satisfy the four check boxes. Once completed, you should copy to Clipboard. Additionally, you can use the slider to create a custom password for you!";

alert(instructions);

function create() {
  let complexity = document.getElementById("slider").value;

  let values =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!$%&'()*+,-./:;<=>?@[]^_`{|}~";

  let password = "";

  for (var i = 0; i <= complexity; i++) {
    password =
      password +
      values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  document.getElementById("display").value = password;

  document.getElementById("lastPasswords").innerHTML += password + "<br />";
}
document.getElementById("length").innerHTML = "Length: 128";

document.getElementById("slider").oninput = function() {
  if (document.getElementById("slider").value > 0) {
    document.getElementById("length").innerHTML =
      "Length: " + document.getElementById("slider").value;
  } else {
    document.getElementById("length").innerHTML = "Length: 1";
  }
};

function copyPassword() {
  document.getElementById("display").select();

  document.execCommand("Copy");

  alert("Password is on clipboard!");
}

function test() {
  //   var hasUpper = false;
  //   var hasLower = false;
  //   var hasInt = false;
  //   var int = "0,1,2,3,4,5,6,7,8,9,";
  //   var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  //   var hasSpec = false;
  var textBox = document.getElementById("display").value;
  var containsUpper = /[A-Z]/.test(textBox);
  var containsLower = /[a-z]/.test(textBox);
  var containsDigits = /[0-9]/.test(textBox);
  var containsSpecial = /[!@#$%^&*]/.test(textBox);
  

  if (containsUpper) {
    document.getElementById("capital").checked = true;
  }

  if (containsLower) {
    document.getElementById("lower").checked = true;
  }

  if (containsDigits) {
    document.getElementById("numeric").checked = true;
  }

  if (containsSpecial) {
    document.getElementById("special").checked = true;
  }

}

//     // if (textBox.charAt(i) === textBox.charAt(i).toLowerCase()) {
//     //   document.getElementById("lower").checked = true;
//     //   hasLower = true;
//     // }

//     // if (textBox.charAt(i) === (int)) {
//     //   document.getElementById("numeric").checked = true;
//     //   hasInt = true;
//     // }

//     //     if (textBox.charAt(i) === specialChar) {
//     //       document.getElementById("special").checked = true;
//     //       hasSpec = false;
//     //     }
//     //   }
//   }
