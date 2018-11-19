const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db=client.db('TodoApp');

  // DeleteMany - Delete user who are in Berlin

// db.collection('Users').deleteMany({location:'Berlin'}).then((result)=>{
//   console.log('Number of deleted documents:', result.deletedCount);
// })


  //DeleteOne
  // db.collection('Users').deleteOne({location: 'Philadelphia'}).then((result)=>{
  //   console.log('Number of deleted documents:', result.deletedCount);
  // })
  //FindOneanddeleteOne

 db.collection('Users').findOneAndDelete({name : 'Emre'}).then((result)=>{
    console.log(result)
 })

//   client.close();
});
