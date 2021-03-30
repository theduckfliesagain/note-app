const db = require("../dbConfig");

class Post {
    constructor(data){
        this.id = data.id;
        this.title = data.title;
        this.name = data.name;
        this.message = data.message;
        this.date = data.date;
    }

    static find(name){

    }
}

module.exports = Post;