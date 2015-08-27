/**
 * Created by Administrator on 15/8/27.
 */
function displayAbbreviations(){
    var abbr = document.getElementsByTagName("abbr");
    if(abbr.length<1){
        return false;
    }
    var defs = new Array();
    for(var i=0;i<abbr.length;i++){
        var current_abbr = abbr[i];
        var definition = current_abbr.getAttribute("title");
        var key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;
    }

    var dlist = document.createElement("dl");
    for (key in defs) {
        var definition = defs[key];
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);

        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);

        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);

    }

    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);

    document.body.appendChild(header);
    document.body.appendChild(dlist);

}

function displayCitations(){
    var quotes = document.getElementsByTagName("blockquote");
    for(var i=0;i<quotes.length;i++){
        if(!quotes[i].getAttribute("cite")){
            continue;
        }
        var url = quotes[i].getAttribute("cite");
        var quoteElements = quotes[i].getElementsByTagName("*");
        var elem = quoteElements[quoteElements.length-1];
        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href",url);
        var sup = document.createElement("sup");
        sup.appendChild(link);
        elem.appendChild(sup);
    }

}

function displayAccessKeys(){
    var links = document.getElementsByTagName("a");
    var keys = new Array();
    for(var i=0;i<links.length;i++){
        var current_link = links[i];
        if(!current_link.getAttribute("accesskey")){
            continue;
        }
        var key = current_link.getAttribute("accesskey");
        var title = current_link.lastChild.nodeValue;
        keys[key] = title;
    }

    var list = document.createElement("ul");

    for(key in keys){
        var text = keys[key];
        var str = key+":"+text;
        var item = document.createElement("li");
        var item_text = document.createTextNode(str);
        item.appendChild(item_text);
        list.appendChild(item);
    }
    var header = document.createElement("h3");
    var header_text = document.createTextNode("AccessKeys");
    header.appendChild(header_text);

    document.body.appendChild(header);
    document.body.appendChild(list);
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

addLoadEvent(displayAbbreviations);
addLoadEvent(displayCitations);
addLoadEvent(displayAccessKeys);