import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, IconButton } from '@mui/material';
import { MdPerson, MdWork, MdLocalShipping, MdHomeRepairService, MdMarkunread } from 'react-icons/md';

const ArrivalTypeSelection = () => {
  const [selectedType, setSelectedType] = useState("");

  const handleSelection = (type) => {
    setSelectedType(type);
  };

  const options = [
    { label: 'Visitante', icon: <MdPerson />, value: 'visitor' },
    { label: 'Trabajador', icon: <MdWork />, value: 'worker' },
    { label: 'Delivery', icon: <MdLocalShipping />, value: 'delivery' },
    { label: 'Servicio', icon: <MdHomeRepairService />, value: 'service' },
    { label: 'Mensajería', icon: <MdMarkunread />, value: 'messenger' },
  ];

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
      {options.map((option) => (
        <Card
          key={option.value}
          sx={{
            width: 60,
            height: 70,
            display: 'flex',
            padding:5,
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            borderRadius: '16px',
            border: selectedType === option.value ? '2px solid #29ff65' : '2px solid transparent',
            boxShadow: selectedType === option.value ? 3 : 1,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: 3,
            },
          }}
          onClick={() => handleSelection(option.value)}
        >
          <CardContent sx={{ textAlign: 'center' }}>
            <IconButton sx={{ color: '#29ff65', fontSize: 25 }}>
              {option.icon}
            </IconButton>
            <Typography sx={{ color: 'lightgray', fontWeight: 'bold', fontSize:10 }}>{option.label}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ArrivalTypeSelection;
