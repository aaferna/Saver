function insert (data, colect) {

    if(!localStorage.getItem(colect)){
        let d = []
        d.push(data)
        localStorage.setItem(colect, JSON.stringify(d));
        return true
    } else {
        let dataforPush = JSON.parse(localStorage.getItem(colect));
        dataforPush.push(data);
        localStorage.setItem(colect, JSON.stringify(dataforPush));
        return true
    }

}

function get (colect){

    if(localStorage.getItem(colect)){
        return JSON.parse(localStorage.getItem(colect));
    }

}

function select (colect, id) {

    if(localStorage.getItem(colect)){
        return JSON.parse(localStorage.getItem(colect))[id];
    }

}

function uploadObjectAsJson (data) {
    localStorage.setItem("Equipos", data);
    return true
}

function downloadObjectAsJson(){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(get("Equipos")));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", "MachinesHealtyDB.json");
    document.body.appendChild(downloadAnchorNode); 
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}
