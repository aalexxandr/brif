import { connect } from 'react-redux'
import DeleteRequest from './DeleteRequest'
import { deleteRequest } from '../../../redux/requestsReducer'

const DeleteRequestContainer = (props) => {
  const deleteRequest = () => {
    props.deleteRequest(props.requestId)
  }

  return (
    <DeleteRequest deleteRequest={deleteRequest} />
  )
}

export default connect('', {deleteRequest})(DeleteRequestContainer)