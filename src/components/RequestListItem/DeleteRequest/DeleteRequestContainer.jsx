import { connect } from 'react-redux'
import DeleteRequest from './DeleteRequest'
import { changeRequestStatus } from '../../../redux/requestsReducer'

const DeleteRequestContainer = (props) => {
    const deleteRequest = () => {
        props.changeRequestStatus(props.requestId, 'deleted')
    }
    return (
        <div>
            <DeleteRequest deleteRequest={deleteRequest} />
        </div>
    )
}

export default connect('', {changeRequestStatus})(DeleteRequestContainer)