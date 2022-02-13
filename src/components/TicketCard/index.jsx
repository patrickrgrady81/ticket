import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import './TicketCard.css';

export default function TicketCard({person}) {
  return (
    <Box className="ticket-box">
        <Card variant="outlined" raised="true" className="ticket-card">
            <>
                <CardContent>
                    <Typography className="ticket-header">Ticket #{person.id}</Typography>
                    <Divider /><br />
                    <Typography>{person.name}</Typography>
                    <Typography>{person.email}</Typography>
                </CardContent>
            </>
        </Card>
    </Box>
  );
}