import HTTPClient from "./HTTPClient.js";



export default {
  getBills: (offset, pageSize) => {
    return HTTPClient.get("/bill", {offset:offset, limit:pageSize})
  }
}