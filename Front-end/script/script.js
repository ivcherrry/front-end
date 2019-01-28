menu.onclick = function showMenu() {
    var x = document.getElementById("topNav");

    if(x.className === "top-nav"){
        x.className += " responsive";
    } else {
        x.className = "top-nav";
    }
}