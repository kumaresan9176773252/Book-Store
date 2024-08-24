const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
  origin: 'https://book-store-frontend-hx58.onrender.com', // Replace with your actual frontend URL
  methods: 'GET,POST,PUT,DELETE',
}));
app.use("/books", router); // localhost:5000/books

mongoose
  .connect(
    "mongodb+srv://admin:3JmvUIsYFl2QCIKM@cluster0.l2h9kjy.mongodb.net/bookStore?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));

  //3JmvUIsYFl2QCIKM