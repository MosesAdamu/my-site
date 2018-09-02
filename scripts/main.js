
var x = 0;
var y = 0;
var z = 0;

function myOverFunction() {
    document.getElementById("demo3").innerHTML = y+=1;
}

var myMest = document.querySelector('#mest');
var myAlcone = document.querySelector('#alcone');
var myAlctwo = document.querySelector('#alctwo');
var myBsc = document.querySelector('#fut');

var image1 = 'images/mestt.jpg';
var image2 = 'images/detailone.jpg';
var image3 = 'images/alcc.png';
var image4 = 'images/detailtwo.jpg';
var image5 = 'images/andel.jpg';
var image6 = 'images/detailthree.png';
var image7 = 'images/fut.png';
var image8 = 'images/detailfour.jpg'

myMest.onclick = function() {
    var mySrc = myMest.getAttribute('src');
    if(mySrc === image1) {
      myMest.setAttribute ('src',image2);
    } else{
      myMest.setAttribute ('src',image1);
        }
}

myAlctwo.onclick = function() {
    var mySrc = myAlctwo.getAttribute('src');
    if(mySrc === image3) {
      myAlctwo.setAttribute ('src',image4);
    } else{
      myAlctwo.setAttribute ('src',image3);
        }
}

myAlcone.onclick = function() {
    var mySrc = myAlcone.getAttribute('src');
    if(mySrc === image5) {
      myAlcone.setAttribute ('src',image6);
    } else{
      myAlcone.setAttribute ('src',image5);
        }
}

myBsc.onclick = function() {
    var mySrc = myBsc.getAttribute('src');
    if(mySrc === image7) {
      myBsc.setAttribute ('src',image8);
    } else{
      myBsc.setAttribute ('src',image7);
        }
}
