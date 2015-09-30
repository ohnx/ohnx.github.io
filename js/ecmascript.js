// Array random elemnt function
Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)];
};

// descriptions
var descs = ["Developer", "Coder", "Technology enthusiast", "Designer"];
var timeout;
var modalBox = document.getElementById("about");
var keys = [], unnoticed = "38,38,40,40,37,39,37,39,66,65";
        
// random descriptions
function randDesc() {
    document.getElementById("descs").innerHTML = descs.randomElement();
}

// modal click logic
function modalExit(event) {
    if(modalBox !== event.target) return;
    document.getElementById('about-close').click();
}

//loading projects
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
    };
    me.fill(callback);
}

// ignore this
var _0xb8be=["\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x6B\x65\x79\x64\x6F\x77\x6E","\x6B\x65\x79\x43\x6F\x64\x65","\x70\x75\x73\x68","\x69\x6E\x64\x65\x78\x4F\x66","\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x49\x6D\x61\x67\x65","\x73\x74\x79\x6C\x65","\x63\x63\x75\x70","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x75\x72\x6C\x28\x27\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x69\x6D\x67\x75\x72\x2E\x63\x6F\x6D\x2F\x47\x52\x6B\x51\x67\x6C\x79\x2E\x6A\x70\x67\x27\x29","\x77\x69\x64\x74\x68","\x33\x32\x30\x70\x78","\x68\x65\x69\x67\x68\x74","\x32\x34\x30\x70\x78","\x63\x6C\x69\x63\x6B","\x68\x72\x65\x66","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x6D\x6F\x6E\x67\x6F\x64\x62\x2D\x69\x73\x2D\x77\x65\x62\x2D\x73\x63\x61\x6C\x65\x2E\x63\x6F\x6D\x2F","\x74\x6F\x75\x63\x68\x65\x6E\x64"];function totallyNormalFunction(){window[_0xb8be[0]]&&window[_0xb8be[0]](_0xb8be[1],function(_0xa8a7x2){keys[_0xb8be[3]](_0xa8a7x2[_0xb8be[2]]),keys.toString()[_0xb8be[4]](unnoticed)>=0&&(document[_0xb8be[8]](_0xb8be[7])[_0xb8be[6]][_0xb8be[5]]=_0xb8be[9],document[_0xb8be[8]](_0xb8be[7])[_0xb8be[6]][_0xb8be[10]]=_0xb8be[11],document[_0xb8be[8]](_0xb8be[7])[_0xb8be[6]][_0xb8be[12]]=_0xb8be[13],document[_0xb8be[8]](_0xb8be[7])[_0xb8be[0]](_0xb8be[14],function(){location[_0xb8be[15]]=_0xb8be[16]},!1),document[_0xb8be[8]](_0xb8be[7])[_0xb8be[0]](_0xb8be[17],function(){location[_0xb8be[15]]=_0xb8be[16]},!1),keys=[])},!0)}

// page finished loading
(function() {
    // call random description
    randDesc();
    timeout = setInterval(randDesc, 10000);
    // check if sane version of IE
    var browserName = navigator.appName;
    if (browserName != "Microsoft Internet Explorer") {
        // supports modals
        document.getElementById("about").className = "modal";
        document.getElementById("morel").href = "#about";
        modalBox.addEventListener("click", modalExit, false);
        modalBox.addEventListener("touchend", modalExit, false);
        loadProj();
    }
    totallyNormalFunction();
})();