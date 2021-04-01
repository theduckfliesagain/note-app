const {init} = require("../dbConfig");
const { ObjectId } = require('mongodb')

class Post {
    constructor(data){
        this.id = data.id;
        this.path = data.path;
        this.title = data.title;
        this.name = data.name;
        this.message = data.message;
        this.date = data.date;
    }

    static findById(path){
        return new Promise(async (resolve, reject) => {
            try {
                const db = await init();
                const result = await db.collection('posts').find( { path: path} ).toArray();
                const post = new Post({...result[0], id: result[0]._id});
                resolve(post)
            } catch (error) { 
                reject(`Could not find post with that ID. Err: ${error}`);  
            }
        });
    }

    static create(data) {
        return new Promise(async (resolve, reject) => {
            try {
                
                const db = await init();
                const newID = await db.collection('posts').estimatedDocumentCount() + 1;
                data.path =  (data.title.replace(" ", "-") + "-" +
                             data.name.replace(" ", "-") + "-" +
                             newID).toLowerCase();
                data.date = new Date();
                const result = await db.collection('posts').insertOne(data);
                const newPost = new Post(result.ops[0]);
                resolve(newPost);
            } catch (error) {
                reject(`Could not publish post, sorry!. Err: ${error}`);  
            }
        });
    }
}

module.exports = Post;