import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon'

const DeleteRequest = (props) => (
  <IconButton color="red" onClick={props.deleteRequest}>
    <Icon component={ClearIcon} color="secondary" />
  </IconButton>
)

export default DeleteRequest