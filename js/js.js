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

(function() {
    var choices = [["#E52D27", "#B31217"], ["#F45C43", "#EB3349"], ["#D31027", "#EA384D"], ["#734B6D", "#42275A"], ["#4CA1AF", "#2C3E50"], ["#D04ED6", "#834D9B"], ["#A8E063", "#56AB2F"], ["#EECDA3", "#EF629F"], ["#FF9068", "#FD746C"]];
    var c = choices[Math.floor(Math.random()*choices.length)];
    var rgb = h2rgb(c[0]);
    document.getElementById("swaplink").addEventListener("click", swapInfo);
    document.getElementById("autogen").innerHTML = "a { color: "+c[1]+";}\nhtml {background-image: linear-gradient(135deg, "+c[0]+", "+c[1]+");}\n";
    document.getElementById("autogen").innerHTML += "::selection { background-color: rgba("+rgb.r+", "+rgb.g+", "+rgb.b+", 0.2); }";
    document.getElementById("autogen").innerHTML += "::-moz-selection { background-color: rgba("+rgb.r+", "+rgb.g+", "+rgb.b+", 0.2); }";
})();