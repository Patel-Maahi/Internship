let submit = document.getElementById("submit-btn");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  validate();
});
function validate() {
  let firstname = document.querySelector("#fName").value;
  let fnameRegex = /^[a-zA-Z0-9]+$/;
  if (firstname == "") {
    document.getElementById("fMessage").innerHTML = "First Name is empty";

    let inputcolor = document.getElementById("fName");
    inputcolor.style.border = "1px solid red";
  } else if (firstname.trim().match(fnameRegex)) {
    document.getElementById("fMessage").innerHTML = "";

    let inputcolor = document.getElementById("fName");
    inputcolor.style = "none";
  } else {
    document.getElementById("fMessage").innerHTML = "Enter valid firstname";
  }
  let lastname = document.getElementById("lName").value;
  let lnameRegex = /^[a-zA-Z0-9]+$/;
  if (lastname == "") {
    document.getElementById("lMessage").innerHTML = "Last name is empty";

    let inputcolor = document.getElementById("lName");
    inputcolor.style.border = "1px solid red";
  } else if (lastname.trim().match(lnameRegex)) {
    document.getElementById("lMessage").innerHTML = "";
    let inputcolor = document.getElementById("lName");
    inputcolor.style = "none";
  } else {
    document.getElementById("lMessage").innerHTML = "Enter valid lastname";
  }
  let phoneNo = document.getElementById("phone-num").value;
  let phoneRegex = /^[6-9][0-9]{9}$/;
  if (phoneNo == "") {
    document.getElementById("phoneMessage").innerHTML = "Phone no. is empty";
    let inputcolor = document.getElementById("phone-num");
    inputcolor.style.border = "1px solid red";
  } else if (phoneNo.trim().match(phoneRegex)) {
    document.getElementById("phoneMessage").innerHTML = "";
    let inputcolor = document.getElementById("phone-num");
    inputcolor.style = "none";
  } else {
    document.getElementById("phoneMessage").innerHTML =
      " Enter valid Phone no.";
    flag = 0;
  }
  let email = document.getElementById("mail").value;
  let mailRegex = /^([a-zA-Z\_.\0-9]+)@1Rivet\.(com)$/;
  if (email == "") {
    document.getElementById("mailMessage").innerHTML = "Email is required";
    let inputcolor = document.getElementById("mail");
    inputcolor.style.border = "1px solid red";
    flag = 0;
  } else if (email.trim().match(mailRegex)) {
    document.getElementById("mailMessage").innerHTML = "";
    let inputcolor = document.getElementById("mail");
    inputcolor.style = "none";
    flag = 1;
  } else {
    document.getElementById("mailMessage").innerHTML = "Enter valid email id";
    flag = 0;
  }
  let email1 = document.getElementById("mail1").value;
  let email1Regex = /^([a-zA-Z\_.\0-9]+)@(gmail|GMAIL).(com|in)$/;
  if (email1 == "") {
    document.getElementById("mail1Message").innerHTML = "Email is required";
    let inputcolor = document.getElementById("mail1");
    inputcolor.style.border = "1px solid red";
  } else if (email1.trim().match(email1Regex)) {
    document.getElementById("mail1Message").innerHTML = "";
    let inputcolor = document.getElementById("mail1");
    inputcolor.style = "none";
  } else {
    document.getElementById("mail1Message").innerHTML = "Enter valid email id";
  }
  let salary = document.getElementById("salary").value;
  if (salary == "") {
    document.getElementById("salaryMessage").innerHTML = "Salary is empty";
    let inputcolor = document.getElementById("salary");
    inputcolor.style.border = "1px solid red";
  } else if (salary >= 5000) {
    document.getElementById("salaryMessage").innerHTML = "";
    let inputcolor = document.getElementById("salary");
    inputcolor.style = "none";
  } else {
    document.getElementById("salaryMessage").innerHTML = "Enter proper salary";
  }
  let passWord = document.getElementById("passWord").value;
  let passWordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]){8,16}$/;
  if (passWord == "") {
    document.getElementById("passwordMessage").innerHTML = "Password is empty";
    let inputcolor = document.getElementById("passWord");
    inputcolor.style.border = "1px solid red";
  } else if (passWord.trim().match(passWordRegex)) {
    document.getElementById("passwordMessage").innerHTML = "";
    let inputcolor = document.getElementById("passWord");
    inputcolor.style = "none";
  } else {
    if (passWord.length < 8) {
      document.getElementById("passwordMessage").innerHTML =
        "Your password must contain minimun 8 characters and maximum 16 characters";
    }
    if (passWord.search(/[a-z]/) < 0) {
      document.getElementById("passwordMessage").innerHTML =
        "Your password must contain at least one lowercase letter ";
    }
    if (passWord.search(/[0-9]/) < 0) {
      document.getElementById("passwordMessage").innerHTML =
        "Your password must contain at least one numerical value";
    }
    if (passWord.search(/[A-Z]/) < 0) {
      document.getElementById("passwordMessage").innerHTML =
        "Your password must contain at least one uppercase letter";
    }
    if (passWord.search(/[^a-zA-Z0-9]/) < 0) {
      document.getElementById("passwordMessage").innerHTML =
        "Your password must contain at least one special character";
    }
  }
  if (
    fMessage.innerHTML == "" &&
    lMessage.innerHTML == "" &&
    phoneMessage.innerHTML == "" &&
    mailMessage.innerHTML == "" &&
    mail1Message.innerHTML == "" &&
    salaryMessage.innerHTML == ""
  ) {
    let firstname = document.getElementById("fName").value;
    let lastname = document.getElementById("lName").value;
    let phoneNo = document.getElementById("phone-num").value;
    let email = document.getElementById("mail").value;
    let email1 = document.getElementById("mail1").value;
    let salary = document.getElementById("salary").value;
    fetch("http://localhost:3000/table", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: firstname,
        lastName: lastname,
        phoneno: phoneNo,
        emailOrganization: email,
        emailPersonal: email1,
        salary: salary,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  
}
