// Array random elemnt function
Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)];
};
// descriptions
var descs = ["Developer", "Coder", "Technology enthusiast", "Designer"];
// random descriptions
function randDesc() {
    document.getElementById("descs").innerHTML = descs.randomElement();
}
// swap card function
function swap() {
    var c = document.getElementById("card");
    c.classList.contains("flipped") === true ? c.classList.remove("flipped") : c.classList.add("flipped");
}
// page finished loading
(function() {
    // call random description
    randDesc();
    setInterval(randDesc, 10000);
    // add event listeners for the links
    document.getElementById("morel").addEventListener("click", function() {swap()});
    document.getElementById("morel").addEventListener("touchstart", function() {swap()});
    document.getElementById("donel").addEventListener("click", function() {swap()});
    document.getElementById("donel").addEventListener("touchstart", function() {swap()});
})();