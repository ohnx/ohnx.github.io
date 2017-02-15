// Gradients from http://uigradients.com/
var choices = [
    ["#EDDE5D", "#F09819"], ["#F45C43", "#EB3349"], ["#D31027", "#EA384D"], ["#734B6D", "#42275A"], ["#4CA1AF", "#2C3E50"],
    ["#D04ED6", "#834D9B"], ["#A8E063", "#56AB2F"], ["#EECDA3", "#EF629F"], ["#FF9068", "#FD746C"], ["#C9FFBF", "#FFAFBD"],
    ["#F1F2B5", "#135058"], ["#DC2430", "#7B4397"], ["#267871", "#136A8A"], ["#43CEA2", "#185A9D"], ["#FE8C00", "#F83600"]];

var randomColors = function() {
    var c = choices[Math.floor(Math.random()*choices.length)];
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
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
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

var addCpick = function() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "js/cpick.js";
    document.body.appendChild(s);
};

var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";

var konamiListener = function(e) {
    kkeys.push(e.keyCode);
    if (kkeys.toString().indexOf(konami) >= 0 ) {
        document.removeEventListener('keydown', konamiListener);
        addCpick();
    }
};

(function() {
    randomColors();
    document.getElementById("swaplink").addEventListener("click", swapInfo);
    document.addEventListener('keydown', konamiListener);
})();
