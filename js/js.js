// Gradients from http://uigradients.com/
var default_choices = [
    ["#EDDE5D", "#F09819"], ["#F45C43", "#EB3349"], ["#D31027", "#EA384D"], ["#4CA1AF", "#2C3E50"],
    ["#A8E063", "#56AB2F"], ["#EECDA3", "#EF629F"], ["#FF9068", "#FD746C"], ["#B993D6", "#8CA6DB"],
    ["#DC2430", "#7B4397"], ["#267871", "#136A8A"], ["#43CEA2", "#185A9D"], ["#FE8C00", "#F83600"],
    ["#FC6767", "#EC008C"]];

var randomColors = function() {
    var c = default_choices[Math.floor(Math.random()*default_choices.length)];
    setColors(c[0], c[1]);
};

var swapInfo = function() {
    if (document.getElementById("about").classList.contains("hidden")) {
        document.getElementById("highlights").classList.add("hidden");
        setTimeout(function() {document.getElementById("about").classList.remove("hidden"); document.getElementById("swaplink").innerHTML = "Projects";}, 1000);
    } else {
        document.getElementById("about").classList.add("hidden");
        setTimeout(function() {document.getElementById("highlights").classList.remove("hidden"); document.getElementById("swaplink").innerHTML = "About";}, 1000);
    }
};

var h2rgb = function(h) {
    var result = null;
    h = h.replace('#', '');

    if (h.length == 6) {
        result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);
        result = {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        };
    } else if (h.length == 3) {
        result = /^([a-f\d])([a-f\d])([a-f\d])$/i.exec(h);
        result = {
            r: parseInt(result[1]+result[1], 16),
            g: parseInt(result[2]+result[2], 16),
            b: parseInt(result[3]+result[3], 16)
        };
    }

    return result;
};

var brightness = function(hex) {
    var c = h2rgb(hex);
    return 0.2126*c.r + 0.7152*c.g + 0.0722*c.b;
};

var setColors = function(a, b) {
    var rgb = h2rgb(a);
    document.getElementById("autogen").innerHTML = "a { color: "+b+"; }\nhtml { background-image: linear-gradient(135deg, "+a+", "+b+"); }\n";
    document.getElementById("autogen").innerHTML += "::selection { background-color: rgba("+rgb.r+", "+rgb.g+", "+rgb.b+", 0.2); }";
    document.getElementById("autogen").innerHTML += "::-moz-selection { background-color: rgba("+rgb.r+", "+rgb.g+", "+rgb.b+", 0.2); }";
    
    if (brightness(b) > 200) {
        document.body.classList.add("inverted");
    } else {
        document.body.classList.remove("inverted");
    }
};

var partyTime = function() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "js/party.js";
    document.body.appendChild(s);
};

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

var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";

var konamiListener = function(e) {
    kkeys.push(e.keyCode);
    if (kkeys.toString().indexOf(konami) >= 0 ) {
        document.removeEventListener('keydown', konamiListener);
        document.getElementById("yqWa").innerHTML = "&iexcl;Programador!";
        partyTime();
    }
};

(function() {
    randomColors();
    document.getElementById("swaplink").addEventListener("click", swapInfo);
    document.addEventListener('keydown', konamiListener);

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://raw.githubusercontent.com/ghosh/uiGradients/aaa6c943a796c5f16e6daf70f8856c4e45cc8e6c/gradients.json", true); // true for asynchronous request
    xmlHttp.onload = function (e) {
        if (xmlHttp.readyState ==4 && xmlHttp.status == 200) {
            var q = document.createElement("div");
            q.id = "cpickModal";
            q.classList.add("modal");

            var r = document.createElement("div");
            r.classList.add("modal-inner");

            var choices = JSON.parse(xmlHttp.responseText);

            var l = "";
            for (var i = 0; i < choices.length; i++) {
                if (choices[i].colors.length != 2) continue;
                l += "<div class='color-circle' data-color='" + JSON.stringify([choices[i].colors[1], choices[i].colors[0]]) +
                     "' style='background-image: linear-gradient(135deg, "+choices[i].colors[1]+", "+choices[i].colors[0]+");'></div>";
            }

            r.innerHTML = l;
            q.appendChild(r);
            document.body.insertBefore(q, document.getElementById("about"));

            // need to wait before we can set listeners on the new elements
            setTimeout(listeners, 10);
        }
    };
    xmlHttp.send(null);
})();
