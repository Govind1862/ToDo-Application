function addElement(){
    let a = document.getElementById("add");
    let b = document.createElement("div");
    ele = a.value;
    let c = document.getElementById("list");
    b.innerHTML = ele + "<button>Delete</button>";
    c.appendChild(b);
}