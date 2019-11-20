var instructions =
  "Your password must be at least 8 characters and must satisfy the four check boxes. Once completed, you should copy to Clipboard. Additionally, you can use the slider to create a custom password for you!";

alert(instructions);

function create() {
  let complexity = document.getElementById("slider").value;

  let values =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!$%&'()*+,-./:;<=>?@[]^_`{|}~";

  let password = "";

  for (var i = 1; i <= complexity; i++) {
    password =
      password +
      values.charAt(Math.floor(Math.random() * Math.floor(values.length)));
  }

  document.getElementById("display").value = password;

  document.getElementById("lastPasswords").innerHTML += password + "<br />";
}
document.getElementById("length").innerHTML = "Length: 64";

document.getElementById("slider").oninput = function() {
  if (document.getElementById("slider").value > 0) {
    document.getElementById("length").innerHTML =
      "Length: " + document.getElementById("slider").value;
  } else {
    document.getElementById("length").innerHTML = "Length: 0";
  }
};

function test() {
  var textBox = document.getElementById("display");
  var containsUpper = /[A-Z]/.test(textBox.value);
  var containsLower = /[a-z]/.test(textBox.value);
  var containsDigits = /[0-9]/.test(textBox.value);
  var containsSpecial = /[)(!@#$%^&*]/.test(textBox.value);
  var testButton = document.getElementById("test?");
  let valid = false;

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

  if (textBox.value.length > 7) {
    document.getElementById("size").checked = true;
  }
  if (
    document.getElementById("special").checked &&
    document.getElementById("size").checked &&
    document.getElementById("numeric").checked &&
    document.getElementById("lower").checked &&
    document.getElementById("capital").checked
  ) {
    testButton.style.backgroundColor = "green";
    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Password is on clipboard!");
    valid = true;
  } else {
    testButton.style.backgroundColor = "red";
    alert("Please try again.");
    window.location.reload(true);
  }
}
