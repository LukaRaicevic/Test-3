var tbl = document.getElementById("m-table");
var srch = document.getElementById("srch-btn");
var ocj = Number(document.getElementById("ocjena").value);
if(isNaN(ocj)) {
    ocj = 1;
}

function myFunction() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const myObj = JSON.parse(this.responseText);
            cont(myObj);
        }
    };
    xmlhttp.open("GET", "movies.json", true);
    xmlhttp.send();
}

function cont(data) {
    let str = "";

    for(let i = 0; i < data.length; i++) {
        data[i].datum = new Date(data[i].datum);
        str += "<tr><td>" + (i+1) + "</td><td>" + "<img src="+data[i].slika+" title="+data[i].ime+">" + "</td><td>" + data[i].datum + "</td><td>" + data[i].reziser + "</td><td>" + data[i].zanr + "</td><td>" + data[i].ocjena + "</td><td>" + "<button>X</button>" + "</td></tr>";
    }

    tbl.insertAdjacentHTML("beforeend", str);
    srch.addEventListener("click", function() {
        event.preventDefault();
        let userInp = document.getElementById("usr-inp").value;
        for(let i = 0; i < data.length; i++) {
            if(data[i].ime != userInp) {

            }
        }
    });
    
}



myFunction();