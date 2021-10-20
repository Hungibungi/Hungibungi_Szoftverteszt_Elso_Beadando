function hello(rawnames) {
    var names = split(rawnames);

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
    var expand = 0;
    var index = 0;

    for(i=0;i<rawnames.length;i++){
        if(rawnames[i].match(/, /g) == null){
            return rawnames;
        }
    }

    for(i=0;i<rawnames.length;i++){
        if(rawnames[i].includes(', ')){
            expand = rawnames[i].match(/, /g).length + 1;
            temp = rawnames[i].split(', ');
            for(y=0;y<expand;y++){
                names[index] = temp[y];
                index++;
            }
        }
    }

    return names;
}

module.exports = hello;