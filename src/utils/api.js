import axios from "axios";

const instance = axios.create({
  baseURL: 'https://us-central1-restapi-19404.cloudfunctions.net/user/'
})

export const requestsApi = {
  get() {
    return instance.get().then( response => response)
  },
  post(requestData) {
    return axios.post( 'https://us-central1-restapi-19404.cloudfunctions.net/user/', requestData ).then( response => response)
  },
  put(requestId, requestData) {
    return instance.put(requestId, requestData ).then( response => response)
  },
  delete(requestId) {
    return instance.delete(requestId).then( response => response)
  }
}