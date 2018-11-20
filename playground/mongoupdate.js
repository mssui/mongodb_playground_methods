const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db=client.db('TodoApp');

  // Find & Update findOneAndUpdate(filter, update, options, callback)
  // Find the user with the name David, Change it to Dave Leo, Give me the new version not the original as result.
  // FindOne method, finds the first person who has name as David and changes to David Leo. Other record with the name David, will not change

  // db.collection('Users').findOneAndUpdate(
  //   {
  //     name: 'David'             // What to find
  // },
  // {
  //   $set : {
  //     name: 'David Leo'         // What to set
  //   }
  // },
  // {
  //   returnOriginal : false    // What to return
  // }).then((result)=>{
  //   console.log('Result:', result);
  // }).catch((err)=>{console.log(err);})


  // Find the name with ibo, increment his age +1 and return me the new result.
db.collection('Users').findOneAndUpdate(
{name:'ibo'},{$inc : {age: 1}},{returnOriginal:false}).then((result)=>{
  console.log('Result:', result);
}).catch((err)=>{console.log(err);})

 

//   client.close();
});
