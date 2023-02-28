






let email1 = document.getElementById("mail1");
let salary=  document.getElementById("salary");
let passWord = document.getElementById("passWord");




let submit = document.getElementById("submit-btn")
submit.addEventListener("click",
(e)=>{e.preventDefault();
    validate();
})
let flag = 1;
function validate() {
    let firstname= document.querySelector("#fName").value;
    let fnameRegex = /^[a-zA-Z0-9]$/;
   if (firstname=="") {
     document.getElementById("fName-p").innerHTML = "First Name is empty";
    flag = 0;
   }
     else if(firstname.trim().match(fnameRegex)){
     flag = 1;
     }
     else{
        document.getElementById("fName-p").innerHTML = "Enter valid firstname";
        flag = 0;
     }
     let lastname = document.getElementById("lName").value;
     let lnameRegex = /^[a-zA-Z0-9]$/;
     if(lastname==""){
        document.getElementById("lName-p").innerHTML = "Last name is empty"
        flag=0;
     }
     else if(lastname.trim().match(lnameRegex)){
        flag = 1;
     }
     else{
        document.getElementById("lName-p").innerHTML = "Enter valid lastname"
        flag = 0;
     }
      let phoneNo = document.getElementById("phone-num").value;
      let phoneRegex = /^[798][0-9]{9}$/;
      if(phoneNo==""){
        document.getElementById("phone-p").innerHTML = "Phone no. is empty"
        flag  = 0;
      }
      else if(phoneNo.match(phoneRegex)){
        flag = 1;
      }
      else{
        document.getElementById("phone-p").innerHTML = " Enter valid Phone no."
        flag = 0;
      }
      let email = document.getElementById("mail").value;
      let mailRegex = /^[a-zA-Z/_/][0-9]/








     if(flag){
        return true;
     }
     else{
        return false;
     }

    
    
    
    


     
}
