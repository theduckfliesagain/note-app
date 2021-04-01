const db = connect("mongodb://localhost:27017/postsDB")

db.posts.drop();

db.posts.insertMany([
    { id: 1, title: "Test", name: "TestName", message: "TestMessage", date: new Date()},
    { id: 2, title: "Test2", name: "TestName2", message: "TestMessage2", date: new Date()}
])