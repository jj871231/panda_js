/**
 * Created by Administrator on 15/8/18.
 */
function showPic(pic){
    var url = pic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",url);
    var text = pic.getAttribute("title");
    var description = document.getElementById("description");
    //alert(description.childNodes.length);
    description.firstChild.nodeValue=text;
}
