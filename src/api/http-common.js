import axios from "axios";

export default axios.create({
  baseURL: "http://xfactory-backend.vercel.app",
  headers: {
    "Content-type": "application/json",
    "Authorization": "Bearer secret",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});
