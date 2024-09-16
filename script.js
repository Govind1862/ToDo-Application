function deletetodo(){
    console.log("delete attempted")
}




function addElement(){
    let a = document.getElementById("add");
    let b = document.createElement("div");
    ele = a.value;
    let c = document.getElementById("list");
    b.innerHTML = ele + "<button onclick="deletetodo">Delete</button>";
    c.appendChild(b);
}