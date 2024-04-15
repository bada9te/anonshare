const mongoose = require('mongoose');


const connectMongo = async(mongoURL) => {
    // mongo basic events
    mongoose.connection.once('open', () => {
        console.log('MongoDB connection established.')
    });
    mongoose.connection.on('error', (err) => {
        console.error(`MongoError ${err}`);
    });

    await mongoose.connect(mongoURL).catch(console.error);
}

module.exports = connectMongo;