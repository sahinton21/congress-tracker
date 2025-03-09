import HTTPClient from "./HTTPClient.js";



export default {
  getBills: () => {
    return HTTPClient.get("/bill", {})
  }
}