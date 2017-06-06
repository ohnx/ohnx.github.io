var listeners = function() {
    document.getElementById("cpick").addEventListener('click', function() {
        if (document.getElementById("cpickModal").classList.contains("modal-active")) {
            document.getElementById("cpickModal").classList.remove("modal-active");
            document.getElementById("cpick").classList.remove("cpick-active");
        } else {
            document.getElementById("cpickModal").classList.add("modal-active");
            document.getElementById("cpick").classList.add("cpick-active");
            document.body.style.marginBottom = document.getElementById("cpickModal").offsetHeight + "px";
        }
    });
    
    var elems = document.getElementsByClassName("color-circle");
    for (var i = 0; i < elems.length; i++) {
        elems[i].addEventListener('click', function() {
            var data = JSON.parse(this.getAttribute("data-color"));
            setColors(data[0], data[1]);
            this.setAttribute("data-color", JSON.stringify([data[1], data[0]]));
            this.style.backgroundImage = "linear-gradient(135deg, "+data[1]+", "+data[0]+")";
        });
    }
};

// set up new DOM elements
(function() {
    document.getElementById("yqWa").innerHTML = "&iexcl;Desarrollador!";
    
    // SPQR
    var s = document.createElement("link");
    s.rel = "stylesheet";
    s.href = "css/cpick.css";
    document.head.appendChild(s);
    
    var p = document.createElement("div");
    p.id = "cpick";
    p.innerHTML = '<img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDQ1OSA0NTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1OSA0NTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0icGFsZXR0ZSI+CgkJPHBhdGggZD0iTTIyOS41LDBDMTAyLDAsMCwxMDIsMCwyMjkuNVMxMDIsNDU5LDIyOS41LDQ1OWMyMC40LDAsMzguMjUtMTcuODUsMzguMjUtMzguMjVjMC0xMC4yLTIuNTUtMTcuODUtMTAuMi0yNS41ICAgIGMtNS4xLTcuNjUtMTAuMi0xNS4zLTEwLjItMjUuNWMwLTIwLjQsMTcuODUxLTM4LjI1LDM4LjI1LTM4LjI1aDQ1LjljNzEuNCwwLDEyNy41LTU2LjEsMTI3LjUtMTI3LjVDNDU5LDkxLjgsMzU3LDAsMjI5LjUsMHogICAgIE04OS4yNSwyMjkuNWMtMjAuNCwwLTM4LjI1LTE3Ljg1LTM4LjI1LTM4LjI1UzY4Ljg1LDE1Myw4OS4yNSwxNTNzMzguMjUsMTcuODUsMzguMjUsMzguMjVTMTA5LjY1LDIyOS41LDg5LjI1LDIyOS41eiAgICAgTTE2NS43NSwxMjcuNWMtMjAuNCwwLTM4LjI1LTE3Ljg1LTM4LjI1LTM4LjI1UzE0NS4zNSw1MSwxNjUuNzUsNTFTMjA0LDY4Ljg1LDIwNCw4OS4yNVMxODYuMTUsMTI3LjUsMTY1Ljc1LDEyNy41eiAgICAgTTI5My4yNSwxMjcuNWMtMjAuNCwwLTM4LjI1LTE3Ljg1LTM4LjI1LTM4LjI1UzI3Mi44NSw1MSwyOTMuMjUsNTFzMzguMjUsMTcuODUsMzguMjUsMzguMjVTMzEzLjY1LDEyNy41LDI5My4yNSwxMjcuNXogICAgIE0zNjkuNzUsMjI5LjVjLTIwLjQsMC0zOC4yNS0xNy44NS0zOC4yNS0zOC4yNVMzNDkuMzUsMTUzLDM2OS43NSwxNTNTNDA4LDE3MC44NSw0MDgsMTkxLjI1UzM5MC4xNSwyMjkuNSwzNjkuNzUsMjI5LjV6IiBmaWxsPSIjZmZmZmZmIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />';
    document.body.insertBefore(p, document.getElementById("about"));

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://raw.githubusercontent.com/ghosh/uiGradients/af62da2466602b5d06a77fb4d4b6e41f6ee39a2a/gradients.json", false); // false for synchronous request
    xmlHttp.send(null);

    var q = document.createElement("div");
    q.id = "cpickModal";
    q.classList.add("modal");
    
    var r = document.createElement("div");
    r.classList.add("modal-inner");
    
    var choices = JSON.parse(xmlHttp.responseText);

    var l = "";
    for (var i = 0; i < choices.length; i++) {
        l += "<div class='color-circle' data-color='" + JSON.stringify([choices[i].colors[1], choices[i].colors[0]]) +
             "' style='background-image: linear-gradient(135deg, "+choices[i].colors[1]+", "+choices[i].colors[0]+");'></div>";
    }
    r.innerHTML = l;
    q.appendChild(r);
    document.body.insertBefore(q, document.getElementById("about"));
    
    // need to wait before we can set listeners on the new elements
    setTimeout(listeners, 10);
})();
