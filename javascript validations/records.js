let headers = { "id":"ID","firstName":"FIRSTNAME","lastName":"LASTNAME","phoneno":"PHONE NO.","emailOrganization":"ORGANIZATION EMAIL","emailPersonal":"PERSONAL EMAIL","salary":"SALARY"}
     let table = document.createElement("table")
     console.log(table);
        function thead(tble,data) {
            let thead = tble.createTHead("thead");
            let row = document.createElement("tr")
                thead.appendChild(row);
            for (const key in data) {
                let th = document.createElement("th");
                row.appendChild(th)
                let text = document.createTextNode(data[key])
                th.appendChild(text)
            }
   }
   thead(table,headers)

//    function getData(e) {
//     e.preventDefault()
//     fetch("http://localhost:3000/table").then(response=>response.json()).then(data=>console.log(data))
//     }

 fetch("http://localhost:3000/table").then(response=>response.json()).then(data=>{
      let tbody = table.createTBody("tbody")
      for (const iterator of data) {
        let row = document.createElement("tr")
        tbody.appendChild(row)
        for (const key in headers) {
           let td = document.createElement("td");
           let text = document.createTextNode(iterator[key])
           td.appendChild(text)
           row.appendChild(td)
        }
      }
    })
    let body = document.querySelector("body")
    body.appendChild(table)