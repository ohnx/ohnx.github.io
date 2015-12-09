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

// google fonts script for mac
WebFontConfig = {
    google: { families: [ 'Raleway:300:latin' ] }
};

function setupWebFont() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + 
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
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

//loading projects
function loadProj() {
    var me = new GHuser("ohnx");
    var callback = function () {
        var callback_repo = function () {
            var relem = document.getElementById("projects");
            var repos = me.list_repos(5, SORT_METHOD.RECENT);
            for(var i = 0; i < repos.length; i++) {
                relem.innerHTML += "<li><a href=\"" + repos[i].url + "\">" + repos[i].name.split("/")[1] + "</a> &#8212; " +
                                   repos[i].desc + "</li>\n";
            }
        };
        me.fill_repos(callback_repo);
    };
    me.fill(callback);
}

(function() {
    var language = window.navigator.userLanguage || window.navigator.language;
    if(language && language.indexOf("fr") > -1 && document.location.pathname != "/index-fr.html" && getQueryVariable("forceen") != "y") {
        document.location.href = "/index-fr.html";
    }
    var fr = (document.location.pathname == "/index-fr.html");
    if(!fr) konamiSetup();
    loadProj();
    if (navigator.userAgent.indexOf('Mac OS X') != -1) {
        setupWebFont();
    }
})();

/*
Ooh, look! Another haiku!

I can't write Haikus.
They are just too hard for me.
Refrigerator.
*/
