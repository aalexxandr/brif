import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core'
import RequestListItem from '../RequestListItem'

const ClosedRequests = (requests) => (
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
                <Typography variant="h6" style={{ margin: '20px', fontWeight: '400' }}>
                    Закрытые заявки
                </Typography>
                {
                    requests.requests.map((request, index) =>
                        <RequestListItem key={index} request={request} />
                    )
                }
            </Grid>
        </Grid>
    </Container>
)

export default ClosedRequests


