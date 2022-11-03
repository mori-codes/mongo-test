import axios from "axios"

const client = axios.create({
  baseURL:
    "https://data.mongodb-api.com/app/data-fnbyi/endpoint/data/v1/action/findOne",
  headers: {
    // "Access-Control-Request-Headers": "*",
    "api-key": process.env.MONGO_API_KEY ?? process.env.REACT_APP_MONGO_API_KEY
  },
})

export {client}