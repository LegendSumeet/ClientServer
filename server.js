const express = require("express");
const path = require("path");
const app = express();
var cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
app.use(express.json());

const connectDB = async () => {
  try {
    const uri = 'mongodb+srv://as4589259:nypStn0dwaTlJYkh@cabbooking.tsfyuhk.mongodb.net/carBooking';
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to mongo', error);
  }
};

const port = process.env.PORT || 8000;


app.use("/api/cars/", require("./Routes/carsRoutes"));
app.use("/booking/api/cars/", require("./Routes/carsRoutes"));
app.use("/editcar/api/cars/", require("./Routes/carsRoutes"));
app.use("/api/users/", require("./Routes/usersRoutes"));
app.use("/booking/api/bookings/", require("./Routes/bookingsRoute"));
app.use("/api/bookings/", require("./Routes/bookingsRoute"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on Port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
    process.exit(1);
  });