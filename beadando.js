function hello(names) {
    if(names.length == 0){
        return "Hello, my friend.";
    }
    if(names.length == 1){
        if(shout(names) == true){
            return "HELLO " + names + "!";
        }
        return "Hello, " + names[0] + ".";
    }
    if(names.length == 2){
        if(shout(names) == true){
            return "HELLO " + names[0] + " AND " + names[1] + "!";
        }
        return "Hello, " + names[0] + " and " + names[1] + ".";
    }
    if(names.length > 2){
        if(shout(names) == true){
            var returnee = "HELLO ";
            for(i=0;i<names.length-2;i++){
                returnee = returnee.concat(names[i] + ", ");
            }
            return returnee.concat(names[names.length-2] + " AND " + names[names.length-1] + "!");
        }
        var returnee = "Hello, ";
        for(i=0;i<names.length-2;i++){
            returnee = returnee.concat(names[i] + ", ");
        }
        return returnee.concat(names[names.length-2] + " and " + names[names.length-1] + ".");
    }
}

function shout(names) {
    for(i=0;i<names.length;i++){
        if(names[i].toUpperCase() != names[i]){
            return false;
        }
    }
    return true;
}

module.exports = hello;