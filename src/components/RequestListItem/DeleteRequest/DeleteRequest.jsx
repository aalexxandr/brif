import Icon from '@material-ui/core/Icon'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import style from './deleteRequest.module.css'

const DeleteRequest = (props) => {
    return (
        <button className={style.deleteRequestButton} onClick={props.deleteRequest}>
            <Icon component={DeleteOutlineIcon} color="primary"/>
        </button>
    )
}

export default DeleteRequest