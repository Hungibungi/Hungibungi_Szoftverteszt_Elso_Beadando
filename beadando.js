function hello(names) {
    if(names.length == 0){
        return "Hello, my friend.";
    }
    if(names.length == 1){
        if(names[0].toUpperCase() == names[0]){
            return "HELLO " + names + "!";
        }
        return "Hello, " + names[0] + ".";
    }
    if(names.length == 2){
        if(names[0].toUpperCase() == names[0] && names[1].toUpperCase() == names[1]){
            return "HELLO " + names[0] + " AND " + names[1] + "!";
        }
        return "Hello, " + names[0] + " and " + names[1] + ".";
    }
    if(names.length > 2){
        var returnee = "Hello, ";
        for(i=0;i<names.length-2;i++){
            returnee = returnee.concat(names[i] + ", ");
        }
        return returnee.concat(names[names.length-2] + " and " + names[names.length-1] + ".");
    }
}

module.exports = hello;