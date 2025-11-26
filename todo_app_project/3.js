let task = document.getElementById("task");
let priority = document.getElementById("priority");

document.getElementsByTagName("input")[1].addEventListener("click", function (e) {
    
    e.preventDefault();
    
    let tablebody = document.querySelector("tbody")
    
    let tr = document.createElement("tr")
    tablebody.appendChild(tr)

    let td1 = document.createElement("td")
    tr.appendChild(td1)
    let td2 = document.createElement("td")
    tr.appendChild(td2)
    let td3 = document.createElement("td")
    tr.appendChild(td3)

    td1.innerText = task.value;
    td2.innerText = priority.value;

    let deletebtn = document.createElement("button")
    td3.appendChild(deletebtn)

    deletebtn.innerText = "delete"

    deletebtn.addEventListener("click", function () {
        td1.remove()
        td2.remove()
        td3.remove()
    })

    let formvar = document.getElementById("form")
    formvar.reset()
});