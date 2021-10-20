function hello(rawnames) {
    names = split(rawnames);

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
        if(mixed(names)[0] == true){
            return hello(mixed(names)[1]) + " AND " + hello(mixed(names)[2]);
        }
        if(shout(names) == true){
            return "HELLO " + names[0] + " AND " + names[1] + "!";
        }
        return "Hello, " + names[0] + " and " + names[1] + ".";
    }
    if(names.length > 2){
        if(mixed(names)[0] == true){
            return hello(mixed(names)[1]) + " AND " + hello(mixed(names)[2]);
        }
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

function mixed(names) {
    var lowercase = [];
    var uppercase = [];
    for(i=0;i<names.length;i++){
        if(names[i].toUpperCase() == names[i]){
            uppercase.push(names[i]);
        }
        if(names[i].toUpperCase() != names[i]) {
            lowercase.push(names[i]);
        }
    }
    if(lowercase.length == 0 || uppercase.length == 0){
        return [false];
    }
    return [true, lowercase, uppercase];

}

function split(rawnames) {
    var temp = [];
    var names = [];
    for(i=0;i<rawnames.length;i++){
        names[i] = rawnames[i];
    }
    for(i=0;i<rawnames.length;i++){
        if(rawnames[i].includes(", ")){
            temp = rawnames[i].split(", ");
            for(y=0;y<temp.length;y++){
                for(z=rawnames.length;z>i+y;z--){
                    names[z+temp.length-1] = names[z];
                }
                names[i+y] = temp[y];
            }
        }
    }

    if(names[names.length-1] == undefined){
        names = names.splice(0,names.length-1);
    }

    return names;
}

module.exports = hello;