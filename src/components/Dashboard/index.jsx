import React, { useContext } from 'react';

import { Navigate } from 'react-router-dom';

import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import TicketForm from '../TicketForm';

import { IsLoggedInContext } from '../../context/isLoggedInContext';
import { IsModalOpenContext } from '../../context/isModalOpenContext';

const Index = () => {

    const [isLoggedIn, setLoggedIn] = useContext(IsLoggedInContext);
    const [isModalOpen, setModalOpen] = useContext(IsModalOpenContext);
    
    const handleOpen = () => {setModalOpen(true)}
    const handleClose = () => {setModalOpen(false)}

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const handleClick = () => {
        setLoggedIn(false);
    }

    return (
        <div>
            {/* Dashboard */}
            {isLoggedIn ? null : <Navigate to='/'></Navigate>}
            <Button variant="contained" onClick={handleClick}>Logout</Button>
            <Button variant="contained" onClick={handleOpen}>Create Ticket</Button>
            <Modal disableEnforceFocus 
                open={isModalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography component='h3' id="modal-modal-title" variant="h6">
                    Create Ticket
                </Typography>
                <Typography component={'span'} id="modal-modal-description" sx={{ mt: 2 }}>
                    <TicketForm />
                </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default Index;
