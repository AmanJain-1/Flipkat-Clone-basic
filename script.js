
var activeslide = 0 ;
showslides(activeslide);

function perform2(e){
    showslides(activeslide += e);
}

function showslides( n ) {
var i;
var slides = document.getElementsByClassName("slides");
if( n==slides.length ){
    n=0;
}
if(n<0){
    n = slides.length-1;
}
for(i=0;i<slides.length;i++) {
   slides[i].style.display="none";
}
console.log(n);
slides[n].style.display ="block";
activeslide = n;
}
// this code is written by me.







