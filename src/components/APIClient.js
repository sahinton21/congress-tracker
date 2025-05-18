import HTTPClient from "./HTTPClient.js";



export default {
  getBills: (offset, pageSize) => {
    return HTTPClient.get("/bill", {offset:offset, limit:pageSize})
  },
  getBill: (congress, type, number) => {
    return HTTPClient.get(`/bill/${congress}/${type}/${number}`)
  }
}