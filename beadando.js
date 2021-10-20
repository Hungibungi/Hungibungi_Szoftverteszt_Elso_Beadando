function hello(names) {
    if(names.length == 0){
        return "Hello, my friend.";
    }
    if(names.length == 1){
        return "Hello, " + names[0] + ".";
    }
}

module.exports = hello;