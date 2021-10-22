let section = location.hash.slice(1).split("/")
    switch (section[0]) {
        case "machine":
            
            $("#root").load('./model/machine.html');
            break
        default:
            $("#root").load('./model/dashboard.html');
            break
        
    }
   