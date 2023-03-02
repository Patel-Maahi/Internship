let headers = {
  "id": "ID",
  "firstName": "FIRSTNAME",
  "lastName": "LASTNAME",
  "technology": "TECHNOLOGY",
};
function getData(e) {
  e.preventDefault()
  fetch("http://localhost:3000/form").then(response=>response.json().then(data=>console.log(data)))
}


let saveData = document.getElementById("save-btn");
saveData.addEventListener("click", (e) => {
  e.preventDefault()
  let fName = document.getElementById("fName").value;
  let lName = document.getElementById("lName").value;
  let tech = document.getElementById("technology").value;
  if (fName.trim() == "" || lName.trim() == "" || tech.trim()=="") {
    alert("Fill data")
  }
  else{
    fetch("http://localhost:3000/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: fName,
        lastName: lName,
        technology: tech,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
});
let table = document.createElement("table");
table.classList.add("table1");
table.style = "table1";
function tHead(tble, data) {
  let thead = tble.createTHead("thead");
  let row = thead.insertRow("tr");
  for (const key in data) {
    let th = document.createElement("th");
    let text = document.createTextNode(data[key]);
    th.appendChild(text);
    row.appendChild(th);
    th.classList.add("table-head");
    th.style = "table-head";
  }
  let th = document.createElement("th");
  let text = document.createTextNode("ACTION");
  th.appendChild(text);
  row.appendChild(th);
  th.classList.add("table-head");
  th.style = "table-head";
}
tHead(table, headers);
console.log(table);
window.addEventListener("load", () => {
  fetch("http://localhost:3000/form")
    .then((response) => response.json())
    .then((data) => {
      let tbody = table.createTBody("tbody");
      for (const element of data) {
        let row = document.createElement("tr");
        tbody.appendChild(row);
        for (const key in headers) {
          let td = document.createElement("td");
          let text = document.createTextNode(element[key]);
          td.appendChild(text);
          row.appendChild(td);
          td.classList.add("table-data");
          td.style = "table-data";
        }
        let td = document.createElement("td");
        td.classList.add("table-data");
        td.style = "table-data";
        let delBtn = document.createElement("button");
        let text = document.createTextNode("Delete");
        delBtn.appendChild(text);
        td.appendChild(delBtn);
        delBtn.classList.add("delete-btn");
        delBtn.style = "delete-btn";
        delBtn.addEventListener("click", (e) => {
          e.preventDefault()
          fetch(`http://localhost:3000/form/${element.id}`, {
            method: "DELETE",
          }) , getData()
            .then((response) => response.json())
            .then((data) => console.log(data));
           
        });
        let editBtn = document.createElement("button");
        let text1 = document.createTextNode("Edit");
        editBtn.appendChild(text1);
        td.appendChild(editBtn);
        row.appendChild(td);
        editBtn.classList.add("edit-btn");
        editBtn.style = "edit-btn";
        editBtn.addEventListener("click", (e) => {
          e.preventDefault()
          let fName = (document.getElementById("fName").value =
            element.firstName);
          let lName = (document.getElementById("lName").value =
            element.lastName);
          let tech = (document.getElementById("technology").value =
            element.technology);

          let updateData = document.getElementById("update-btn");
          updateData.addEventListener("click", () => {
            fetch(`http://localhost:3000/form/${element.id}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                firstName: document.getElementById("fName").value,
                lastName: document.getElementById("lName").value,
                technology: document.getElementById("technology").value,
              }),
            })
              .then((response) => response.json())
              .then((data) => console.log(data));
          });
        });
      }
    });
});
let body = document.querySelector("body");
body.appendChild(table);
