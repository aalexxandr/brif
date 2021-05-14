import Icon from '@material-ui/core/Icon'
import style from './changeRequestStatus.module.css'
import CheckIcon from '@material-ui/icons/Check'

const ChangeRequestStatus = (props) => {
    return (
        <button className={style.changeStatusButton} onClick={props.changeRequest}>
            <Icon component={CheckIcon} color="primary" />
        </button>
    )
}

export default ChangeRequestStatus