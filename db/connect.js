const mongoose = require("mongoose");

const connectToDb = (url) => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = {
  connectToDb,
};
