// Gradients from http://uigradients.com/
var choices = [
    ['#EDDE5D', '#F09819'], ['#F45C43', '#EB3349'], ['#D31027', '#EA384D'], ['#4CA1AF', '#2C3E50'],
    ['#A8E063', '#56AB2F'], ['#EECDA3', '#EF629F'], ['#FF9068', '#FD746C'], ['#B993D6', '#8CA6DB'],
    ['#DC2430', '#7B4397'], ['#267871', '#136A8A'], ['#43CEA2', '#185A9D'], ['#FE8C00', '#F83600']];

var randomColors = function() {
    var c = choices[Math.floor(Math.random()*choices.length)];
    setColors(c[0], c[1]);
};

var mapping = {highlights: 'Projects', about: 'About', contact: 'Contact'};

var swapInfo = function(e) {
    var link = e.target;
    var tname = link.dataset.v;
    var cname;
    var swap = document.getElementById(tname);
    var swapl = document.getElementsByClassName('swappage');

    for (var i = 0; i < swapl.length; i++) {
        if (!swapl[i].classList.contains('hidden')) {
            cname = swapl[i].id;
        }
        swapl[i].classList.add('hidden');
    }

    setTimeout(function() {
        swap.classList.remove('hidden');
        link.innerHTML = mapping[cname];
        link.dataset.v = cname;
    }, 1000);
};

var h2rgb = function(h) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};

var brightness = function(hex) {
    var c = h2rgb(hex);
    return 0.2126*c.r + 0.7152*c.g + 0.0722*c.b;
};

var setColors = function(a, b) {
    var rgb = h2rgb(a);
    document.getElementById('autogen').innerHTML = 'a { color: '+b+'; }\nhtml { background-image: linear-gradient(135deg, '+a+', '+b+'); }\n';
    document.getElementById('autogen').innerHTML += '::selection { background-color: rgba('+rgb.r+', '+rgb.g+', '+rgb.b+', 0.2); }';
    document.getElementById('autogen').innerHTML += '::-moz-selection { background-color: rgba('+rgb.r+', '+rgb.g+', '+rgb.b+', 0.2); }';
    
    if (brightness(b) > 200) {
        document.body.classList.add('inverted');
    } else {
        document.body.classList.remove('inverted');
    }
};

var addCpick = function() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'js/cpick.js';
    document.body.appendChild(s);
};

var partyTime = function() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'js/party.js';
    document.body.appendChild(s);
};

var kkeys = [], konami = '38,38,40,40,37,39,37,39,66,65';

var konamiListener = function(e) {
    kkeys.push(e.keyCode);
    if (kkeys.toString().indexOf(konami) >= 0 ) {
        document.removeEventListener('keydown', konamiListener);
        document.getElementById('yqWa').innerHTML = '&iexcl;Programador!';
        addCpick();
    }
};

(function() {
    randomColors();
    var e = document.getElementsByClassName('swaplink');
    for (var i = 0; i < e.length; i++) {
        e[i].addEventListener('click', swapInfo)
    }
    document.addEventListener('keydown', konamiListener);
})();
