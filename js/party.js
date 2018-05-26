// set up new DOM elements
(function() {
    var s = document.createElement("link");
    s.rel = "stylesheet";
    s.href = "css/party.css";
    document.head.appendChild(s);

    var q = document.createElement("iframe");
    q.src = "https://www.youtube-nocookie.com/embed/IIrCDAV3EgI?rel=0&controls=0&showinfo=0&autoplay=1"
    q.style.display = "none";
    
    document.body.appendChild(q);
})();
