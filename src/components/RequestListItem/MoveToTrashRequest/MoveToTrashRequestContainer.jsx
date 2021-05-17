import { connect } from 'react-redux'
import MoveToTrashRequest from './MoveToTrashRequest'
import { changeRequestStatus } from '../../../redux/requestsReducer'

const MoveToTrashRequestContainer = (props) => {
    const deleteRequest = () => {
        props.changeRequestStatus(props.requestId, 'deleted')
    }
    return (
        <div>
            <MoveToTrashRequest deleteRequest={deleteRequest} />
        </div>
    )
}

export default connect('', {changeRequestStatus})(MoveToTrashRequestContainer)