/**
 * Created by Administrator on 15/8/18.
 */
function showPic(pic){
    if (!document.getElementById("placeholder")) return true;
    var url = pic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",url);
    var text = pic.getAttribute("title");
    var description = document.getElementById("description");
    //alert(description.childNodes.length);
    description.firstChild.nodeValue=text;

    return false;
}

function prepareGallery(){
    if(!document.getElementsByTagName){
        return false;
    }
    if(!document.getElementById){
        return false;
    }
    if(!document.getElementById("imagegallery")){
        return false;
    }
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onclick=function(){
            return showPic(this);
        }
    }

}


function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

addLoadEvent(prepareGallery);
