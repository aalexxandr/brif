import { TextField } from '@material-ui/core'
import React, { useState } from 'react'

const Input = (props) => {
    const [value, setValue] = useState('')

    return (
        <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={value}
            fullWidth
            onChange={e => setValue(e.target.value)}
        />
    )
}

export default Input