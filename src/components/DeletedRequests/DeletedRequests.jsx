import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core'
import RequestListItem from '../RequestListItem/RequestListItem'
import Instruction from '../Instruction/Instruction'

const DeletedRequests = (props) => (
    <Container>
        <Grid container
            style={{ height: window.innerHeight - 100 }}
            alignItems="center"
            justify="center"
        >
            <Grid
                container
                alignItems="center"
                direction="column"
            >
                <Instruction />
                 <Typography variant="h6" style={{ margin: '20px', fontWeight: '400' }}>
                    Удаленные заявки
                </Typography>
                {
                    props.requests.map((request, index) =>
                        <RequestListItem keyVal={index} request={request} />
                    )
                }
            </Grid>
        </Grid>
    </Container>
)

export default DeletedRequests


