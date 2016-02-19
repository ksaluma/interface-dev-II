function makeGallery() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            myFunction(xmlhttp);
        }
    };
    xmlhttp.open("GET", "http://jscode.rocks/examples/week_6/gallery.xml", true);
    xmlhttp.send();
}

function myFunction(xml) {
    var xmlDoc = xml.responseXML; 
    x = xmlDoc.getElementsByTagName("IMG");
    var carousel = document.getElementById("carousel1");
    var str ='<div class="item active">';
    for(i=0; i<x.length; i++){
        if(i!==0){
            str +='<div class="item">';
        }
    
    
    str +='<img src="' +
    x[i].getElementsByTagName('SRC')[0].childNodes[0].nodeValue+
    '" alt="' +
    x[i].getElementsByTagName('SRC')[0].childNodes[0].nodeValue +
    '" title="' +
    x[i].getElementsByTagName('SRC')[0].childNodes[0].nodeValue +
    '"></div>';
    }
    carousel.innerHTML=str;
}

      
      
      
      