addElement(){
    let a = document.getElementById("add");
    let b = document.createElement("div");
    b.innerHTML = a.value;
    let c = document.querySelector("body");
    let d = document.appendChild(b);
}