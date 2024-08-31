// components/ProfileCard.js
import React from 'react';
import { Card, CardContent, Avatar, Typography, Button, Box, IconButton } from '@mui/material';
import { LocationOn, CalendarToday, Language, Email, Phone } from '@mui/icons-material';

const ProfileCard = () => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 4 }}>
      <Box
        sx={{
          background: 'url(/path/to/your/background-image.jpg) no-repeat center/cover',
          height: 100,
          borderTopLeftRadius: 'inherit',
          borderTopRightRadius: 'inherit',
        }}
      />
      <Box display="flex" justifyContent="center" mt={-8}>
        <Avatar
          src="/path/to/your/avatar-image.jpg"
          sx={{ width: 80, height: 80, border: '4px solid white' }}
        />
      </Box>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h6">Arnoldy Chafe</Typography>
        <Typography variant="body2" color="text.secondary">@Arnoldy</Typography>
        <Box display="flex" justifyContent="center" alignItems="center" mt={1} mb={2}>
          <LocationOn fontSize="small" sx={{ mr: 0.5 }} />
          <Typography variant="body2" color="primary">
            Bandung
          </Typography>
          <CalendarToday fontSize="small" sx={{ mx: 1 }} />
          <Typography variant="body2" color="text.secondary">
            Joined March 2023
          </Typography>
        </Box>
        <Box mb={2}>
          <Button variant="outlined" sx={{ mx: 1 }}>
            Follow
          </Button>
          <Button variant="outlined" sx={{ mx: 1 }}>
            Message
          </Button>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
        <Typography variant="body2">
          CEO System D, Because your satisfaction is everything & Standing out from the rest, and
          that's what we want you to be as well.
        </Typography>
      </CardContent>
      <CardContent sx={{ bgcolor: '#f5f5f5' }}>
        <Box display="flex" alignItems="center" mb={1}>
          <Language fontSize="small" sx={{ mr: 1 }} />
          <Typography variant="body2">www.Arnoldy.com</Typography>
        </Box>
        <Box display="flex" alignItems="center" mb={1}>
          <Email fontSize="small" sx={{ mr: 1 }} />
          <Typography variant="body2">Hello@adalahreza.com</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Phone fontSize="small" sx={{ mr: 1 }} />
          <Typography variant="body2">+62 517 218 92 00</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
