var keys = [];
var code = "38,38,40,40,37,39,37,39,66,65";
function konamiSetup() {
    if (window.addEventListener) {
        window.addEventListener("keydown", function(key) {
            keys.push(key.keyCode);
            if (keys.toString().indexOf(code) >= 0) {
                document.getElementsByClassName("content")[0].innerHTML =
                "The sun is rising,<br />\n" +
                "Things are being created,<br />\n" +
                "Mason is coding.<br />\n" +
                "<a href=\"https://github.com/ohnx\">See what I'm coding</a><br />\n" +
                "<a href=\"mailto:me@masonx.ca\">Tell me how much you love my haiku</a>";
                keys = [];
            }
        }, true);
    }
}


function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return false;
}

(function() {
    var language = window.navigator.userLanguage || window.navigator.language;
    if(language && language.indexOf("fr") > -1 && getQueryVariable("forceen") != "y") {
        document.location.href = "/index-fr.html";
    }
    konamiSetup();
})();

/*
Ooh, look! Another haiku!

I can't write Haikus.
They are just too hard for me.
Refrigerator.
*/