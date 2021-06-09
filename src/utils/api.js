import axios from "axios";

const instanceRequests = axios.create({
  baseURL: 'https://us-central1-restapi-19404.cloudfunctions.net/requests/'
})

const instanceUsers = axios.create({
  baseURL: 'https://us-central1-restapi-19404.cloudfunctions.net/users'
})

// requests api
export const requestsApi = {
  get() {
    return instanceRequests.get().then( response => response)
  },
  post(requestData) {
    return axios.post( 'https://us-central1-restapi-19404.cloudfunctions.net/requests/', requestData ).then( response => response)
  },
  put(requestId, requestData) {
    return instanceRequests.put(requestId, requestData ).then( response => response)
  },
  delete(requestId) {
    return instanceRequests.delete(requestId).then( response => response)
  }
}

// users api
export const usersApi = {
  get() {
    return instanceUsers.get().then( response => response)
  },
  post(userData) {
    return axios.post( 'https://us-central1-restapi-19404.cloudfunctions.net/users/', userData ).then( response => response)
  },
  put(userId, userData) {
    return instanceUsers.put(userId, userData ).then( response => response)
  },
  delete(userId) {
    return instanceUsers.delete(userId).then( response => response)
  }
}