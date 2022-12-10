const mongoose = require('mongoose')
const Schema = mongoose.Schema

const companySchema = new Schema({
    name : String,
    address: {
        province : String
    }
  },{collection: "comspanys"});

  const company = mongoose.model("Companys",companySchema)

  module.exports = company