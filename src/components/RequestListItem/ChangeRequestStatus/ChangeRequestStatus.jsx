import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Icon from '@material-ui/core/Icon';
import style from './changeRequestStatus.module.css'
const ChangeRequestStatus = (props) => {
    return (
        <button className={style.changeStatusButton} onClick={props.changeRequest}>
            <Icon component={CheckCircleOutlineIcon} color="primary" />
        </button>
    )
}

export default ChangeRequestStatus