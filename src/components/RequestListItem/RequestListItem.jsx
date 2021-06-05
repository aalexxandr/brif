import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import { Grid } from '@material-ui/core'
import ExpandMore from '@material-ui/icons/ExpandMore'

import CompanyInfo from '../CompanyInfo'
import ChangeRequestStatusContainer from './ChangeRequestStatus/ChangeRequestStatusContainer'
import MoveToTrashRequestContainer from './MoveToTrashRequest/MoveToTrashRequestContainer'
import DeteleRequestContainer from './DeleteRequest/DeleteRequestContainer'

import { fields } from '../../utils/formFields'

const OpenRequests = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    }
    
    return (
        <Grid container justify="center" alignItems="center">
            <Grid item md={10} xs={12}>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItem button onClick={handleClick} className="nonActiveList">
                        <ListItemText primary={props.request.companyName} />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>

                        {
                            fields.map( field => <CompanyInfo title={field.name} text={props.request[field.code]} key={field.code} /> )
                        }

                    </Collapse>
                </List>
            </Grid>
            <ChangeRequestStatusContainer requestId={props.request.id} changeStatus={ props.request.status === 'open' ? 'closed' : 'open' } />
            { props.request.status === 'deleted' ? <DeteleRequestContainer requestId={props.request.id} /> : <MoveToTrashRequestContainer requestId={props.request.id} /> }
        </Grid>
    )
}

export default OpenRequests