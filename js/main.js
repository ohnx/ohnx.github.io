Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)];
};

(function(D){
 var
 ce=function(e,n){var a=D.createEvent("CustomEvent");a.initCustomEvent(n,true,true,e.target);e.target.dispatchEvent(a);a=null;return 1},
 m= 'touch',
 nm=1,
 bd=0,
 sx,
 sy,
 ex,
 ey,
 M=Math,
 MA=M.abs,
 MM=M.max,
 x,
 y,
 xr,
 yr,
 f={
  touch:{
   touchstart:function(e){
    return ce(e,(sx=e.touches[0].pageX,sy=e.touches[0].pageY,'sfc'))
   },
   touchmove:function(e){
    return nm=0,ex=e.touches[0].pageX,ey=e.touches[0].pageY,1
   },
   touchend:function(e){
    return ce(e,nm?'fc':(x=ex-sx,xr=MA(x),y=ey-sy,yr=MA(y),nm=1,MM(xr,yr)>20?xr>yr?x<0?'swl':'swr':y<0?'swu':'swd':'fc'))
   },
   touchcancel:function(e){
    return nm=0,1
   }  
  },
  mouse:{
   mousedown:function(e){
    return e.button||(bd=1,sx=e.x,sy=e.y,ce(e,'sfc'))
   },
   mousemove:function(e){
    return !bd||(nm=0,ex=e.x,ey=e.y,1)
   },
   mouseup:function(e){
    return e.button||(bd=0,ce(e,nm?'fc':(nm=1,x=ex-sx,xr=MA(x),y=ey-sy,yr=MA(y),MM(xr,yr)>20?xr>yr?x<0?'swl':'swr':y<0?'swu':'swd':'fc')))
   }
  }
 };
 for(var a in f[m]){D.addEventListener(a,f[m][a],false)}
})(document)

function gooutl(e) {
    // Code for Chrome, Safari, Opera
    document.getElementById(e).style.WebkitTransform = "translateX(-5000px)"; 
    // Code for IE9
    document.getElementById(e).style.msTransform = "translateX(-5000px)"; 
    document.getElementById(e).style.transform = "translateX(-5000px)";
}
function gooutr(e) {
    // Code for Chrome, Safari, Opera
    document.getElementById(e).style.WebkitTransform = "translateX(5000px)"; 
    // Code for IE9
    document.getElementById(e).style.msTransform = "translateX(5000px)"; 
    document.getElementById(e).style.transform = "translateX(5000px)";
}
function goin(e) {
    // Code for Chrome, Safari, Opera
    document.getElementById(e).style.WebkitTransform = "translateX(0px)"; 
    // Code for IE9
    document.getElementById(e).style.msTransform = "translateX(0px)"; 
    document.getElementById(e).style.transform = "translateX(0px)";
}
document.onkeydown = checkKey;
var slide = 1;
function movRight() {
	if(slide==0) {
		gooutl("infosec");
		goin("mainsec");
		slide = 1;
	} else if(slide==1) {
		gooutl("mainsec");
		goin("portsec");
		slide = 2;
	}
}
function movLeft() {
	if(slide==1) {
		gooutr("mainsec");
		goin("infosec");
		slide = 0;
	} else if(slide==2) {
		gooutr("portsec");
		goin("mainsec");
		slide = 1;
	}
}
/* add in left/right goes back/forwards functionality */
function movLeftt() {
if(slide==0) {
window.history.back();
} else {
movLeft();
}
}
function movRightt() {
if(slide==2) {
window.history.forward();
} else {
movRight();
}
}
function checkKey(e) {e = e || window.event;if (e.keyCode == '37') {movLeft();}else if (e.keyCode == '39') { movRight();}}
document.body.addEventListener('swl',movRightt,false);
document.body.addEventListener('swr',movLeftt,false);
document.body.addEventListener('touchstart',function(e){e.preventDefault()},false);
function gitRepos() {
// Create a new request object
var request = new XMLHttpRequest();
request.onload = parseghinfo;
// Initialize a request
request.open('get', 'https://api.github.com/users/ohnx/repos', true);
// Send it
request.send();
}
//gitRepos();
function parseghinfo() {
	var div = document.getElementById('repolist');
/*	var currDate = new Date().getTime();
	var rDate;*/
	var str = "<table><thead><tr><th>project name &amp; link</th><th>info</th><th>language</th></tr></thead><tbody>";
	var responseObj = JSON.parse(this.responseText);
	for (var i = 0; i < responseObj.length; i++) {/*
		rDate = new Date(responseObj[i].updated_at).getTime();
		console.log("hi!");
		console.log("currdate: "+currDate);
		console.log("repo date: "+rDate+", diff: "+currDate-rDate+"\n");
		if(currDate-rDate<1814400) {
			*/str += "<tr><td><a href=\""+responseObj[i].html_url+"\">"+responseObj[i].name+"</a></td><td>"+responseObj[i].description+"</td><td>"+responseObj[i].language+"</td></tr>";
		//}
		//Do something
	}
	str += "</tbody></table>";
	div.innerHTML = str;
}
var font = 0;
function tglFont() {
	if(font==1) {
		document.body.style.fontFamily="MasonWritingBad";
		font =0;
	} else {
     document.body.style.fontFamily = "'Calibri', 'Helvetica Neue', sans-serif";
	 font=1;
	}
}
document.getElementById("tglfont").addEventListener('click', tglFont);
document.getElementById("tglfont").addEventListener('touchstart', tglFont);
var descs = ["Developer, Developer, Developer, Developer.", "Full stack developer", "Technology enthusiast", "Not a robot", "Designer", "Coder", "Not a computer", "Wannabe software engineer", "Occasional educator"]
function randDesc() {
 	document.getElementById("patiochair").innerHTML = descs.randomElement();
 	setTimeout(randDesc, 10000);
}
randDesc();
