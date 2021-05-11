import {useEffect} from 'react'
import { connect } from 'react-redux'
import { getRequests } from '../../redux/requestsReducer'
// import Loader from '../Loader'
// import { useCollectionData } from 'react-firebase-hooks/firestore'
// import { firestore } from '../../utils/context'
// import { collectionName } from '../../utils/consts'
// import OpenedRequests from './OpenedRequests'

const OpenedRequestsContainer = (props) => {
    useEffect( () => {
        props.getRequests()
    }, [])
    return 'opened request'
    // const [requests, loading] = useCollectionData(
    //     firestore.collection(collectionName)
    // )

    // if (loading) {
    //     return <Loader />
    // }

    // const requestsData = []

    // requests.map(request => {
    //     if (request.status === 'open') {
    //         requestsData.push(request)
    //     }
    // })

    // return (
    //     <OpenedRequests requests={requestsData} />
    // )
}

export default connect('', {getRequests})(OpenedRequestsContainer)


