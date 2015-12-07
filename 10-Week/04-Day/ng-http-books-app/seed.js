// Make sure mongod is running and then run the following command
// mongo localhost:27017/ng_http_books seed.js

db.books.remove({});

for (var i = 0; i< 20; i++){
	db.books.insert({name: "book_" + i, year: 1960 + i})
}
