function hello(names) {
    if(names.length == 0){
        return "Hello, my friend.";
    }
    if(names.length == 1){
        return "Hello, " + names[0] + ".";
    }
    if(names.length == 2){
        return "Hello, " + names[0] + " and " + names[1] + ".";
    }
    if(names.length > 2){
        var returnee = "Hello, ";
        for(i=0;i<names.length-2;i++){
            returnee = returnee.concat(names[i] + ", ");
        }
        returnee = returnee.concat(names[names.length-2] + " and ");
        returnee = returnee.concat(names[names.length-1] + ".");
        return returnee;
    }
}

module.exports = hello;