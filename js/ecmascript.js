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
function loadProj() {
    var me = new GHuser("ohnx");
    var callback = function () {
        var callback_repo = function () {
            var relem = document.getElementById("projList");
            var repos = me.list_repos(5, SORT_METHOD.RECENT);
            for(var i = 0; i < repos.length; i++) {
                relem.innerHTML += "<tr><td><a href=\"" + repos[i].url + "\">" + repos[i].name.split("/")[1] + "</a></td>\n" +
                                   "<td>" + repos[i].desc + "</td>" +
                                   "<td class=\"lang\">" + repos[i].lang + "</td>\n</tr>";
            }
        };
        me.fill_repos(callback_repo);
        var gelem = document.getElementById("email");
        gelem.innerHTML = "<a href=\"mailto:" + me.email + "\">" + me.email + "</a>";
    };
    me.fill(callback);
}
// page finished loading
(function() {
    // call random description
    randDesc();
    setInterval(randDesc, 10000);
    // load latest projects
    loadProj();
    // add event listeners for the links
    document.getElementById("morel").addEventListener("click", function() {swap()});
    document.getElementById("morel").addEventListener("touchstart", function() {swap()});
    document.getElementById("donel").addEventListener("click", function() {swap()});
    document.getElementById("donel").addEventListener("touchstart", function() {swap()});
})();