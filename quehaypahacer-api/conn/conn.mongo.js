const mongoose = require ("mongoose")

const uri = "mongodb://localhost:27017/db_quehaypahacer"

const conn = async () => {
  await mongoose.connect(uri)
  console.log("connection with mongo success")

}

conn().catch(error => console.error("Error connecting with mongo", error))



