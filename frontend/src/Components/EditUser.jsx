import React, { useState } from 'react'
import { TextField,Box,Button,Typography } from '@mui/material'
import { config } from '../App'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'
const EditUser = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {enqueueSnackbar} = useSnackbar();
    const [userData,setUserData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        department:""
    })
    const handleChange=(e)=>{
        const {id,value} = e.target;
        setUserData({...userData,[id]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        editUserData(userData);

    }

   const editUserData=async(user)=>{
    const updatedUser = updatedData(user);
  try {
     const result =  await axios.patch(`${config.endpoint}/${id}`,updatedUser)
      console.log(result.status);
      if(result.status===200)
      {
          enqueueSnackbar("Edit Sucessfull",{varaint:"success"})
          navigate('/users')
      }
  } catch (error) {
    enqueueSnackbar("Something Went Wrong",{variant:'error'})
  }
   }

 const updatedData=(user)=>{
    const updateUser = {}
 if(userData.firstName!=='')
 {
    updateUser.firstName=userData.firstName
 }
 if(userData.lastName!=='')
 {
    updateUser.lastName=userData.lastName
 }
 if(userData.email!=='')
 {
    updateUser.email=userData.email;
 }
 if(userData.department!=='')
 {
    updateUser.department=userData.department
 }
 return updateUser;
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
          EDIT USER DETAIL
        </Typography>
    <TextField  label={id} variant="filled"   disabled />
    <TextField id="firstName" label="First Name" variant="filled" placeholder='Amit' type='text' value={userData.firstName} onChange={handleChange}/>
    <TextField id="lastName" label="Last Name" variant="filled" placeholder='Saini'type='text' value={userData.lastName} onChange={handleChange} />
    <TextField id="email" label="Email" variant="filled" placeholder='abc@gmail.com'type='text' value={userData.email} onChange={handleChange} />
    <TextField id="department" label="Department" variant="filled" placeholder='Finance'  value={userData.department} onChange={handleChange} />
    <Button variant="contained" type='Submit'>Edit</Button>
    </Box>
    </Box>
    </>
  )
}

export default EditUser