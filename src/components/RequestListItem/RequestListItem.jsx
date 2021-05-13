import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CompanyInfo from '../CompanyInfo';
import ChangeRequestStatusContainer from './ChangeRequestStatus/ChangeRequestStatusContainer'
import { Grid } from '@material-ui/core';

const OpenRequests = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    }
    
    return (
        <Grid container justify="center">
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                style={{ width: '80%' }}
            >
                <ListItem button onClick={handleClick} className="nonActiveList">
                    <ListItemText primary={props.request.companyName} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <CompanyInfo title="О компании" text={props.request.aboutCompany} />
                    <CompanyInfo title="Предпочтения для главного слайдера" text={props.request.aboutSlider} />
                    <CompanyInfo title="Преимущества" text={props.request.advantages} />
                    <CompanyInfo title="Нежелательные цвета" text={props.request.badColors} />
                    <CompanyInfo title="Общая цветовая гамма" text={props.request.colors} />
                    <CompanyInfo title="О компании" text={props.request.currentDomain} />
                    <CompanyInfo title="Адрес текущего сайта" text={props.request.companyName} />
                    <CompanyInfo title="Почта" text={props.request.email} />
                    <CompanyInfo title="Примеры сайтов" text={props.request.exampleSites} />
                    <CompanyInfo title="Схема взаимодействия с клиентом" text={props.request.interactionScheme} />
                    <CompanyInfo title="Пункты меню" text={props.request.menuItems} />
                    <CompanyInfo title="Номер телефона" text={props.request.phone} />
                    <CompanyInfo title="Слоган" text={props.request.tagline} />
                </Collapse>
            </List>
            { props.request.status === 'open' ? <ChangeRequestStatusContainer requestId={props.request.id}/> :  false }
        </Grid>
    )
}

export default OpenRequests