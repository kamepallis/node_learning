$show dbs

$use database;

$show collections

$db.collecion.find();
$db.collection.find().pretty();


$db.users.insert({"name":""Sudhir", "city":"Edison"});

$db.category.find({"category":"Fashion"});

#Projetions
$db.collection.find({condition},{projection});

_id = primary key
        randonmunber+unique+12byte size

we can give our own , but it must be unique

mongodb://localhost:27017