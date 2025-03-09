const API_BASE_PATH = "https://api.congress.gov/v3";

const CONGRESS_API_TOKEN = process.env.VUE_APP_CONGRESS_API_KEY

export default {
  get: (url, queryParams) => {
    queryParams["format"] = "json";
    queryParams["api_key"] = CONGRESS_API_TOKEN;
    const fullUrl = `${API_BASE_PATH}${url}?` + new URLSearchParams(queryParams).toString();
    // if (queryParams) {
    //   return fetch(`${API_BASE_PATH}${url}`, {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //   });
    // }
    // else{
    return fetch(fullUrl);
    
  },
  // post: (url, data, token) => {
  //   return fetch(`${API_BASE_PATH}${url}`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data),
  //   });

  // },
  // put: (url, data, token) => {
  //   return fetch(`${API_BASE_PATH}${url}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data),
  //   });
  // }
};