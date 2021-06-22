import { requestsReducer, deleteRequestData } from './requestsReducer'

 // 1. start data
 const state = {
    requestsData : [
        {
            id: 1
        },
        {
            id: 2
        }
    ]
}
const action = deleteRequestData(1)

// 2. action
const newState = requestsReducer(state, action)

// 3. expectations
it('count of request should be decrease', () => {
    expect(newState.requestsData.length).toBe(1)
})

it(' id of the request shold be "2" ', () => {
    expect(newState.requestsData[0].id).toBe(2)
})