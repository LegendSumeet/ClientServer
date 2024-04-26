const mongoose = require("mongoose");

function connectDb() {
  mongoose.connect("mongodb+srv://as4589259:nypStn0dwaTlJYkh@cabbooking.tsfyuhk.mongodb.net/carBooking", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const connection = mongoose.connection;
  connection.on("connected", () => {
    console.log("connection successfull");
  });
  connection.on("error", () => {
    console.log("connection failed");
  });
}

connectDb();
module.exports = connectDb;
