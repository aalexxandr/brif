import React, { useState } from 'react'
import { Grid, Typography, Icon } from "@material-ui/core"
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import TextField from '@material-ui/core/TextField';
import style from './adminsListItem.module.css'
import {Formik} from 'formik'
import * as Yup from 'yup'
import { changeAdmin } from '../../redux/adminsReduser'

const AdminsListItem = (props) => {
    const [editMode, setEditMode] = useState(false)

    const [email, setEmail] = useState(props.email)

    const deleteAdmin = () => {
        props.deleteAdmin(props.id)
    }
    
    return (
        <Grid container justify="center" alignItems="center" margin={20}>
            <div>
                <Typography className={editMode && style.email_withEditMode} onDoubleClick={() => { setEditMode(true) }}>
                    { email }
                </Typography>
                { editMode &&
                <Formik
                    initialValues = { {email} }
                    validationSchema={ Yup.object().shape({
                        email: Yup.string()
                            .email('Некорректный email')
                            .required('Не оставляйте поле пустым')
                    }) }
                    onSubmit={(values) => {
                        setEditMode(false)
                        setEmail(values.email)
                        changeAdmin(props.id, values.email)
                    }}
                >
                    {
                        ({handleSubmit, handleChange, touched, errors, values}) => (
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    autoFocus
                                    value={values.email}
                                    className={style.emailInput}
                                    name="email"
                                    error={touched.email && errors.email ? true : false}
                                    onBlur={handleSubmit}
                                    helperText={touched.email && errors.email}
                                    onChange={handleChange}
                                />
                            </form>
                        )
                    }
                </Formik> }
            </div>
            <IconButton style={{marginLeft: "10px"}} onClick={() => { setEditMode(true) }}>
                <Icon component={EditIcon} color="primary" />
            </IconButton>
            <IconButton onClick={deleteAdmin}>
                <Icon component={ClearIcon} color="secondary" />
            </IconButton>
        </Grid>
    )
}

export default AdminsListItem