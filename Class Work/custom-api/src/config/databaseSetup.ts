import mongoose from "mongoose"
import assert from "assert"

const port = process.env.MONGODB_URI || "messenger-api"
const mongoUri = `mongodb://localhost/${port}`

mongoose.Promise = global.Promise
mongoose.connect(
  mongoUri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err) => {
    assert.equal(null, err)
    console.log("Connected succesfully to databse")

    // db.close()
  }
)
mongoose.connection.on("error", console.error.bind(console, "MongoDB connection Error:"))
mongoose.set("debug", true)

export default mongoose.connection
