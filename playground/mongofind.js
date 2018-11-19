const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db=client.db('TodoApp');

  // Find the users only in Berlin

  db.collection('Users').find({location: 'Berlin'}).toArray().then((docs)=>{
      console.log('Users');
      console.log(JSON.stringify(docs, undefined, 2));
  }, 
  (err)=>{console.log('Reason of Eror:', err);})

 // Count the amount of document. Number of users

 db.collection('Users').find().count().then((count)=>{
    console.log('Users adedi:', count);
    
}, 
(err)=>{console.log('Reason of Eror:', err);})

  
//   client.close();
});
