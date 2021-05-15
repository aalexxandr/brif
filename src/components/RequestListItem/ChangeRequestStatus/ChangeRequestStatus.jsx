import Icon from '@material-ui/core/Icon'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import style from './changeRequestStatus.module.css'
import CheckIcon from '@material-ui/icons/Check'

const ChangeRequestStatus = (props) => {
    return (
        <button className={style.changeStatusButton} onClick={props.changeRequest}>
            { props.status === 'open' ? <Icon component={LockOpenIcon} color="primary" /> : <Icon component={CheckIcon} color="primary" /> }
        </button>
    )
}

export default ChangeRequestStatus