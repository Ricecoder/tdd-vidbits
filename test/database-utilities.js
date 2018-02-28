const {mongoose, databaseUrl, options} = require('../database');

const connectDatabaseAndDropData = async () => {
    try {
        await mongoose.connect(databaseUrl, options);
    } catch (error) {
        console.log(error);
    }
  await mongoose.connection.db.dropDatabase();
};

const disconnectDatabase = async () => {
  await mongoose.disconnect();
};

module.exports = {
  connectDatabaseAndDropData,
  disconnectDatabase,
};
