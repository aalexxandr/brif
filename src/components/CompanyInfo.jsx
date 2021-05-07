import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

const CompanyInfo = (props) => (
    <Container>
        <Divider/>
        <Typography variant="subtitle1" style={{fontSize: '1.1rem'}}>
            {props.title}
        </Typography>
        <Typography variant="body1" style={{margin: '5px 0 0 5px'}}>
            {props.text}
        </Typography>
    </Container>
)

export default CompanyInfo