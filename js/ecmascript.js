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
// page finished loading
(function() {
    // call random description
    randDesc();
    timeout = setInterval(randDesc, 10000);
})();