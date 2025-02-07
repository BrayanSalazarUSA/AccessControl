import React, { useState } from "react";
import { Box, TextField, Select, MenuItem, FormControl, InputLabel, InputAdornment, Button, Modal } from "@mui/material";
import { MdDevices } from "react-icons/md";
import { CameraAlt, Router, SettingsEthernet } from "@mui/icons-material";
import { Property } from "../../types/Interfaces";
import { addDevice, Device } from "../../services/deviceService";


interface DeviceModalProps {
  open: boolean;
  onClose: () => void;
  property: Property;
  setRefetch
}

const DeviceFormModal: React.FC<DeviceModalProps> = ({ open, onClose, property, setRefetch }) => {
  const [formData, setFormData] = useState<Device>({
    name: "",
    ipAddress: "",
    port: "",
    connectionType: "Wireless",
    user: "",
    password: "",
    property: {...property},
    channel:null
  });

  const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name as string]: value });
  };

  const handleSubmit = async () => {
    await addDevice(formData);
    onClose(); 
    console.log(property)
    console.log(formData)
    setRefetch((prev:boolean)=>!prev)
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: 3,
          borderRadius: "12px",
          boxShadow: 3,
          width: 300,
          background: "#333",
          color: "white",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
          <MdDevices size={24} color="#29ff65" />
          <h3 style={{ color: "#29ff65", marginLeft: 8 }}>Add Device</h3>
        </Box>
        <TextField
          name="name"
          label="Device Name"
          fullWidth
          size="small"
          value={formData.name}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MdDevices color="#29ff65" />
              </InputAdornment>
            ),
          }}
          sx={{ my: 1 }}
        />
        <TextField
          name="ipAddress"
          label="IP Address"
          fullWidth
          size="small"
          value={formData.ipAddress}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SettingsEthernet color="#29ff65" />
              </InputAdornment>
            ),
          }}
          sx={{ my: 1 }}
        />
        <TextField
          name="port"
          label="Port"
          fullWidth
          size="small"
          value={formData.port}
          onChange={handleChange}
          sx={{ my: 1 }}
        />
        <TextField
          name="user"
          label="User"
          fullWidth
          size="small"
          value={formData.user}
          onChange={handleChange}
          sx={{ my: 1 }}
        />
        <TextField
          name="password"
          label="Password"
          fullWidth
          size="small"
          type="password"
          value={formData.password}
          onChange={handleChange}
          sx={{ my: 1 }}
        />
        
        <FormControl fullWidth size="small" sx={{ my: 2 }}>
          <InputLabel sx={{ top: "-8px" }}>Device Type</InputLabel>
          <Select name="type" value={formData.type} onChange={handleChange}>
            <MenuItem value="Camera">
              <CameraAlt /> Camera
            </MenuItem>
            <MenuItem value="Access">
              <Router /> Access Control
            </MenuItem>
          </Select>
        </FormControl>
        {
          formData.type === "Camera" ? (<TextField
            name="channel"
            label="Channel"
            fullWidth
            size="small"
            value={formData.channel}
            onChange={handleChange}
            sx={{ my: 1 }}
          />):(<></>)
        }
        <Button onClick={handleSubmit} variant="contained" sx={{ backgroundColor: "#29ff65" }} fullWidth>
          Add Device
        </Button>
      </Box>
    </Modal>
  );
};

export default DeviceFormModal;
