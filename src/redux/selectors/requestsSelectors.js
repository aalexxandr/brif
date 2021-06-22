import { createSelector } from "reselect"

const getRequests = (state) => state.requests.requestsData

export const getOpenRequests = createSelector(getRequests, (requests) => {
    return requests.filter(request => request.status === 'open')
})

export const getClosedRequests = createSelector(getRequests, (requests) => {
    return requests.filter(request => request.status === 'closed')
})

export const getDeletedRequests = createSelector(getRequests, (requests) => {
    return requests.filter(request => request.status === 'deleted')
})

export const getLoading = (state) => state.requests.loading