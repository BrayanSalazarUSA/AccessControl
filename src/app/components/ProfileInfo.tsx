import React from 'react';
import { Avatar, Typography, Box } from '@mui/material';

type ProfileInfoProps = object

export const ProfileInfo: React.FC<ProfileInfoProps> = () => {
  const userName = 'Juan Pérez'; // Cambiar por datos dinámicos si es necesario
  const userImage = 'https://via.placeholder.com/150'; // URL de la imagen

  return (
    <Box display="flex" alignItems="center" p={1}>
      <Avatar src={userImage} alt={userName} />
      <Typography variant="body1" sx={{ marginLeft: 1 }}>
        {userName}
      </Typography>
    </Box>
  );
};
