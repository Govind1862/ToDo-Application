function addElement(){
    let a = document.getElementById("add");
    let b = document.createElement("div");
    b.innerHTML = a.value;
    let c = document.getElementById("list");
    c.appendChild(b);
}