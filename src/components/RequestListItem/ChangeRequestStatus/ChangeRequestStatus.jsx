import Icon from '@material-ui/core/Icon'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import CheckIcon from '@material-ui/icons/Check'
import IconButton from '@material-ui/core/IconButton';

const ChangeRequestStatus = (props) => {
    return (
        <IconButton onClick={props.changeRequest}>
            { props.status === 'open' ? <Icon component={LockOpenIcon} color="primary" /> : <Icon component={CheckIcon} color="primary" /> }
        </IconButton>
    )
}

export default ChangeRequestStatus