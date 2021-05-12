import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Icon from '@material-ui/core/Icon';
import style from './changeRequestStatus.module.css'
const ChangeRequestStatus = () => {
    return (
        <button className={style.changeStatusButton}>
            <Icon component={CheckCircleOutlineIcon} color="primary" />
        </button>
    )
}

export default ChangeRequestStatus