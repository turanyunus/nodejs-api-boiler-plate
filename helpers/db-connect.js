const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('',
        {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

    mongoose.connection.on('open', ()=> {
        console.log('MongoDb Connected');
    });

    mongoose.connection.on('error', (err)=> {
        console.log('MongoDb Error',err);
    });

    mongoose.Promise = global.Promise;

}