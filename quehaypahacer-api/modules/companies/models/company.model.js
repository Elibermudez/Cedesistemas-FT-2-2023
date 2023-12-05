const mongoose = require("mongoose")
const { Schema } = mongoose

const CompanySchema = new Schema (
  {
    name: String,
    address: String,
    phone: String,
    contact: String,
    email: {
      type: String,
      require: true,
      unique: true,
      trim: true
    },
    identification: {
      type: Number,
      unique: true,
      require: true
    },
    isRemoved: {
      type: Boolean,
      default:false
    }
  },

  {
    timestamps: true
  }

)

const Company = mongoose.model("Companies", CompanySchema)

module.exports = Company
