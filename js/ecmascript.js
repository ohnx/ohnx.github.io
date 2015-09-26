// Array random elemnt function
Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)];
};
// descriptions
var descs = ["Developer", "Coder", "Technology enthusiast", "Designer"];
var timeout;
// random descriptions
function randDesc() {
    document.getElementById("descs").innerHTML = descs.randomElement();
}
function loadPage() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function (e) { 
        if (xhr.readyState == 4 && xhr.status == 200) {
            window.history.pushState("about", "about", "/about.html");
            clearTimeout(timeout);
            document.write(xhr.responseText);
        }
    };

    xhr.open("GET", "/about.html", true);
    xhr.setRequestHeader('Content-type', 'text/html');
    xhr.send();
}
// page finished loading
(function() {
    // call random description
    randDesc();
    timeout = setInterval(randDesc, 10000);
    // Javascript probably works on this
    document.getElementById("morel").removeAttribute("href");
    document.getElementById("morel").addEventListener("click", function() {loadPage()});
    document.getElementById("morel").addEventListener("touchstart", function() {loadPage()});
})();