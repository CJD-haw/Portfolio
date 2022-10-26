function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") { x.className += " responsive"; }
    else { x.className = "topnav"; }
}

function activation(idx) {
    for (let i=1;i<=5;i++) {
        var x = document.getElementById("i"+i);
        if (i!=idx) { x.className = "inactive"; }
        else { x.className = "active"; }
    }
}
