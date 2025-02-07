import React, { useState } from "react";
import { Box, Card, CardContent, Typography, IconButton } from "@mui/material";
import {
  MdPerson,
  MdWork,
  MdLocalShipping,
  MdHomeRepairService,
  MdMarkunread,
} from "react-icons/md";
import "../../../styles/animations.css";
interface ArrivalTypeSelectionProps {
  onVisitorTypeSelect: (type: string) => void;
}

const ArrivalTypeSelection: React.FC<ArrivalTypeSelectionProps> = ({
  onVisitorTypeSelect,
}) => {
  const [selectedType] = useState<string>("");

  const handleSelection = (type: string) => {
    console.log(type);
    onVisitorTypeSelect(type);
  };

  const options = [
    { label: "Visitor", icon: <MdPerson />, value: "visitor" },
    { label: "Worker", icon: <MdWork />, value: "worker" },
    { label: "Delivery", icon: <MdLocalShipping />, value: "delivery" },
    { label: "Service", icon: <MdHomeRepairService />, value: "service" },
    /*     { label: 'Messaging', icon: <MdHomeRepairService />, value: 'service' }, */
    { label: "Other", icon: <MdMarkunread />, value: "messenger" },
  ];

  return (
    <>
      <Typography
        variant="h6"
        sx={{ marginBottom: 2, color: "lightgray", fontWeight: "bold" }}
      >
        Select visitor type
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
        }}
      >
        {options.map((option) => (
          <Card
            key={option.value}
            className="card-hover-effect"
            sx={{
              width: 180,
              height: 130,
              display: "flex",
              padding: 0,
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              borderRadius: "16px",
              border:
                selectedType === option.value
                  ? "2px solid #29ff65"
                  : "2px solid transparent",
              boxShadow: selectedType === option.value ? 3 : 1,
            }}
            onClick={() => handleSelection(option.value)}
          >
            <CardContent className="shine-effect" sx={{ textAlign: "center" }}>
              <IconButton sx={{ color: "#29ff65", fontSize: 30 }}>
                {option.icon}
              </IconButton>
              <Typography
                sx={{ color: "lightgray", fontWeight: "bold", fontSize: 19 }}
              >
                {option.label}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default ArrivalTypeSelection;
