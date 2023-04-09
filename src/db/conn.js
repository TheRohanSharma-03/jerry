const mongoose = require("mongoose");
// mongodb://127.0.0.1:27017/jerrydb
mongoose.connect('mongodb+srv://bhilaitechnology:jerry123@project.swwmmx8.mongodb.net/Project?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
 console.log('connected to db')
}).catch((error) => {
 console.log(error)
});