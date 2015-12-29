var rx = rx || {};
rx.zhr = function (servermethod, successcall,calltype) {
    if (typeof servermethod === 'undefined' || typeof successcall === 'undefined' || typeof calltype === 'undefined') {
        console.log('all paramters not provided');
    } else {
        this.servermethod = servermethod;
        this.successcall = successcall;
    }
    this.constructor.prototype.do = function (clientobject) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open(calltype, this.servermethod, true);
        xmlHttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
        xmlHttp.onreadystatechange = function ParseResult(ReturnVal) {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                window[successcall](JSON.parse(xmlHttp.responseText));
            }
        }
        if (typeof clientobject === 'undefined') {
            xmlHttp.send();
        } else {
            xmlHttp.send(JSON.stringify(clientobject));
        }
    };
};
