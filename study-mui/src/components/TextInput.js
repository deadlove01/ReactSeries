import { TextField } from '@mui/material'
import React from 'react'

export const TextInput = () => {
  return (
    <div>
        <TextField placeholder='this is placeholder' ></TextField>
        <TextField placeholder='standard' variant='standard'> </TextField>
        <TextField placeholder='filled' variant='filled'> </TextField>
        <TextField placeholder='outlined' variant='outlined'> </TextField>
    </div>
  )
}
