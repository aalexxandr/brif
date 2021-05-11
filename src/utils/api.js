import axios from "axios";

const instance = axios.create({
  baseURL: 'https://us-central1-restapi-19404.cloudfunctions.net/user'
})

export const requestsApi = {
  get() {
    return instance.get().then( response => response)
  },
  post(requestData) {
    return instance.post( {requestData} ).then( response => {
      return response
    } )
  }
}