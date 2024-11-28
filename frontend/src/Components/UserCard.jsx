// import React from 'react'
// import {Card,CardContent,Typography,CardActions,Button} from '@mui/material'
// import { red } from '@mui/material/colors'
// import axios from 'axios'
// import {config} from '../App'
// import { useNavigate } from 'react-router-dom'
// import {  useSnackbar } from 'notistack'
// const UserCard = ({firstName,lastName,id,email,department}) => {

//     const {enqueueSnackbar} = useSnackbar();
//     const navigate=useNavigate();
//     const deletUser=async(id)=>{
//         try {
//             console.log('delete user function')
//             console.log(id);
//           const result = await axios.delete(`${config.endpoint}/${id}`)
//           if(result.status===200)
//                enqueueSnackbar("User is Deleted ",{variant:"success"})
//             window.location.reload();

//         } catch (error) {
//             enqueueSnackbar("Something went wrong ",error,{variant:error})
//         }
//     }
//   return (
//     <>
//      <Card className='card' sx={{ minWidth: 275 ,minHeight:200}}>
//       <CardContent className='card-content'>
        
//         <Typography className='card-title' variant="h6" component="div">
//           {firstName + ' '+ lastName}
//         </Typography>
        
//         <Typography variant="body2">
//             {id}
//             <br />
//           {email}
//           <br />
//           {department}
//         </Typography>
//       </CardContent>
//       <CardActions>
//       <Button variant="contained" onClick={()=>{
//         console.log(id);
//         navigate(`/edit-user/${id}`)
//       }} >Edit</Button>
//       <Button variant="contained"  sx={{ 
//         backgroundColor: 'red'
//       }}onClick={()=>deletUser(id)} >Delete</Button>
//       </CardActions>
//     </Card>
//     </>
//   )
// }

// export default UserCard




// updated code 

import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import axios from "axios";
import { config } from "../App";
import "./user.css"; // Import the CSS file

const UserCard = ({ firstName, lastName, id, email, department }) => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const deleteUser = async (id) => {
    try {
      const result = await axios.delete(`${config.endpoint}/${id}`);
      if (result.status === 200) {
        enqueueSnackbar("User successfully deleted", { variant: "success" });
        window.location.reload();
      }
    } catch (error) {
      enqueueSnackbar("Something went wrong", { variant: "error" });
    }
  };

  return (
    <Card className="card">
      <CardContent className="card-content">
        {/* Name Section */}
        <Typography className="card-title" variant="h6">
          {`${firstName} ${lastName}`}
        </Typography>

        {/* ID Section */}
        <Typography className="card-info" variant="body2">
          <strong>ID:</strong> {id}
        </Typography>

        {/* Email Section */}
        <Typography className="card-info" variant="body2">
          <strong>Email:</strong> {email}
        </Typography>

        {/* Department Section */}
        <Typography className="card-info" variant="body2">
          <strong>Department:</strong> {department}
        </Typography>
      </CardContent>

      <CardActions className="card-actions">
        {/* Edit Button */}
        <Button
          className="edit-button"
          variant="outlined"
          size="small"
          onClick={() => navigate(`/edit-user/${id}`)}
        >
          Edit
        </Button>

        {/* Delete Button */}
        <Button
          className="delete-button"
          variant="contained"
          size="small"
          onClick={() => deleteUser(id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;
