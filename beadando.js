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
}

module.exports = hello;