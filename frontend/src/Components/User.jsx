import React, { useEffect, useState } from 'react'
import {Grid2} from '@mui/material'
import Header from './Header';
import axios from 'axios'
import UserCard from './UserCard';
import { config } from '../App';
const User = () => {
    const [userData,setUserData]=useState([]);

    const fetchUserData=async()=>{
        try {
            const result = await axios.get(`${config.endpoint}`);
            console.log(result.data);
            const data = result.data;
            setUserData(data);
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        fetchUserData();
    },[])
  return (
   <>
   <Header />
   <Grid2 container spacing={2}>
    {
        userData.map((user)=><Grid2  lg = {3} md={4} sm={6} xs={12} key={user._id}>
            <UserCard id={user.id} firstName={user.firstName} lastName={user.lastName} email={user.email}department={user.department}/>
        </Grid2>)
    }
   </Grid2>
   </>
  )
}

export default User