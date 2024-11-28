import React, { useState } from 'react'
import { TextField,Box,Button,Typography } from '@mui/material'
import { useSnackbar } from 'notistack';
import axios from 'axios';
import { config } from '../App';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const navigate=useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const [userData,setUserData]=useState({
        id:"",
        firstName:"",
        lastName:"",
        email:"",
        department:""
    })

    const verifyUser=(user)=>{
        if(user.id==='')
        {
            enqueueSnackbar("Add a user id ",{variant:'error'})
            return false
        }
        else if(user.firstName==='')
        {
            enqueueSnackbar("Please Enter the First Name ",{variant:'error'})
            return false
        }
        else if(user.lastName==='')
            {
                enqueueSnackbar("Please Enter the Last Name ",{variant:'error'})
                return false
            }
            else if(user.email==='')
                {
                    enqueueSnackbar("Please Enter the Email ",{variant:'error'})
                    return false
                }
                else if(user.department==='')
                    {
                        enqueueSnackbar("Please Enter the Department Name ",{variant:'error'})
                        return false
                    }
                    return true;

    }
    const postUser=(user)=>{
        if(!verifyUser(user))
            return 
        try {
            axios.post(`${config.endpoint}`,
                user
            )
            enqueueSnackbar("User Added SuccessFully ",{variant:'success'})
            setUserData({
                id:'',
                firstName:'',
                lastName:'',
                email:'',
                department:''
            })
        navigate('/users')
        } catch (error) {
            
        }
    }
    const handleChange=(e)=>{
        const {id,value} = e.target;
        setUserData({...userData,[id]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
       postUser(userData);

    }
  return (
    <>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
        
    <Box  component="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding={3}
        gap={1}
        borderRadius={2}
        boxShadow={3}
        bgcolor="background.paper">
            <Typography variant="h5" component="div">
          USER DETAIL
        </Typography>
    <TextField id="id" label="Id" variant="filled" placeholder='1' type='number' value={userData.id} onChange={handleChange} />
    <TextField id="firstName" label="First Name" variant="filled" placeholder='Amit' type='text' value={userData.firstName} onChange={handleChange}/>
    <TextField id="lastName" label="Last Name" variant="filled" placeholder='Saini'type='text' value={userData.lastName} onChange={handleChange} />
    <TextField id="email" label="Email" variant="filled" placeholder='abc@gmail.com'type='text' value={userData.email} onChange={handleChange} />
    <TextField id="department" label="Department" variant="filled" placeholder='Finance'  value={userData.department} onChange={handleChange} />
    <Button variant="contained" type='Submit'>Submit</Button>
    </Box>
    </Box>
    </>
  )
}

export default AddUser