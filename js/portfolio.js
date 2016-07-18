function isInArray(value, array) {
    return array.indexOf(value) > -1;
}

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    return null;
}

// check if an element exists in array using a comparer function
// comparer : function(currentElement)
Array.prototype.inArray = function(comparer) { 
    for(var i=0; i < this.length; i++) { 
        if(comparer(this[i])) return true; 
    }
    return false; 
}; 

// adds an element to the array if it does not already exist using a comparer 
// function
Array.prototype.pushIfNotExist = function(element, comparer) { 
    if (!this.inArray(comparer)) {
        this.push(element);
    }
};

var projects;

(function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            projects = shuffleArray(JSON.parse(xhttp.responseText));
            filterProjects(getQueryVariable('tag'));
        }
    };
    xhttp.open("GET", "projList.json", true);
    xhttp.send();
})();

function filterProjects(filter) {
    var ignore;
    var currFilter = null;
    if (filter == null) {
        ignore = true;
    } else {
        ignore = false;
        currFilter = filter;
    }
    var allTags = [];
    var newHTML = "";
    for (var i = 0; i < projects.length; i++) {
        for (var j = 0; j < projects[i].tags.length; j++) {
            allTags.pushIfNotExist(projects[i].tags[j], function(e) { 
                return e == projects[i].tags[j]; 
            });
        }
        if (ignore == true) {
            
        } else if (!isInArray(filter, projects[i].tags)) {
            continue;
        }
        newHTML += "<div class=\"projItm\" id=\"proj-"+i+"\">\n";
        newHTML += "<div onclick='toggleDesc(\"proj-"+i+"\")'><h1>" + projects[i].name+"</h1>\n<span class=\"closer\"> </span></div>";
        newHTML += "\n<div class=\"moreBox\">"+projects[i].desc+"\n<br />";
        newHTML += "<a href=\""+projects[i].link+"\">More information</a>\n</div></div>";
    }
    newHTML += "<div class=\"projItm\" id=\"proj-qm\">\n";
    newHTML += "<div onclick='toggleDesc(\"proj-qm\")'><h1>???</h1>\n<span class=\"closer\"> </span></div>";
    newHTML += "\n<div class=\"moreBox\">I am always open to new projects. I am proficient in a good deal of programming languages and environments (and for cases that I'm not, I'm always open to learn!), so please feel free to send over anything, at any time!\n<br />";
    newHTML += "<a href=\"mailto:me@masonx.ca\">Email me</a>\n</div></div>";
    document.getElementById("projList").innerHTML = newHTML;
    
    newHTML = "";
    if (currFilter != null) {
        newHTML += "<span onclick=\"filterProjects();\" class=\"tag\">none</span> ";
    }
    for (var i = 0; i < allTags.length; i++) {
        if (currFilter == allTags[i]) newHTML += "<span onclick=\"filterprojects('"+allTags[i]+"');\" class=\"selected tag\">" + allTags[i] + "</span>&nbsp;";
        else newHTML += "<span onclick=\"filterProjects('"+allTags[i]+"');\" class=\"tag\">" + allTags[i] + "</span> ";
    }
    document.getElementById("tags").innerHTML = newHTML;
}

function toggleDesc(id) {
    var elem = document.getElementById(id);
    if (elem.classList.contains("expanded")) {
        elem.classList.remove("expanded");
    } else {
        elem.classList.add("expanded");
    }
}