const Company = require("../models/company.model")
const errorHandler = require("../../../utils/errorHandler")
const { SERVER_ERROR } = require("./company.dict.errors")

const create = async (CompanyData) => {
  try {

    const company = Company(CompanyData)
    await company.save()

    return {
      company
    }

    }catch (error) {
      throw error.handled ? error: errorHandler(SERVER_ERROR, error)
    }
  }

  module.exports ={
    create
  }


