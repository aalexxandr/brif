import React from 'react'
import Loader from '../Loader'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { firestore } from '../../utils/context'
import { collectionName } from '../../utils/consts'
import ClosedRequests from './ClosedRequests'

const OpenedRequestsContainer = () => {
    const [requests, loading] = useCollectionData(
        firestore.collection(collectionName)
    )

    if (loading) {
        return <Loader/>
    }

    const requestsData = []

    requests.map(request => {
        if (request.status === 'closed') {
            requestsData.push(request)
        }
    })

    return (
       <ClosedRequests requests={requestsData}/>
    )
}

export default OpenedRequestsContainer


