// BOM  এর মাধ্যমে আমরা javascript er দাড়া browser এর বিভিন্ন জিনিস control করতে পারি যেমন browser এর location , protocol, আরেকটি পেজ ওপেন করা ।



var div=document.querySelector("div");


// location
var p1=div.children[0];
p1.innerHTML=location;


// host
var p2=div.children[1];
p2.innerHTML=location.protocol;

var p3=div.children[2];
p3.innerHTML=location.host;

var p4=div.children[3];
p4.innerHTML=location.hostname;

var p5=div.children[4];
p5.innerHTML=location.port;

var p6=div.children[5];
p6.innerHTML=location.pathname;



