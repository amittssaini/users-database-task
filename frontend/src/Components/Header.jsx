

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Header.css'; // Import the CSS file

function Header() {
    const navigate = useNavigate();
    return (
        <Box className="header-container">
            <Typography className="header-title">
                Users Dashboard
            </Typography>
            <Button 
                className="add-user-btn"
                onClick={() => navigate('/add-user')}
            >
                Add User
            </Button>
        </Box>
    );
}

export default Header;
