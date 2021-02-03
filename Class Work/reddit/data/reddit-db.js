import mongoose from "mongoose"
import assert from "assert"

const url = "mongodb://localhost/reddit-db"
mongoose.Promise = global.Promise
mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  function (err, db) {
    assert.equal(null, err)
    console.log("Connected succesfully to databse")

    // db.close()
  }
)
mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection Error:")
)
mongoose.set("debug", true)

module.exports = mongoose.connection
