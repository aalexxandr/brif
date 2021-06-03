import Icon from '@material-ui/core/Icon'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@material-ui/core/IconButton';

const DeleteRequest = (props) => {
    return (
        <IconButton onClick={props.deleteRequest}>
            <Icon component={DeleteOutlineIcon} color="primary"/>
        </IconButton>
    )
}

export default DeleteRequest