import { BsBuildings } from "react-icons/bs";
import JobHeader from "../components/PageHeading";
import { MdDeleteSweep } from "react-icons/md";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  IconButton,
  Box,
} from "@mui/material";
import {
  Refresh,
  People,
  CheckCircle,
  Cancel,
  EditNote,
  Sync,
} from "@mui/icons-material";

import { useState } from "react";
import { useStateContext } from "../context/ContextProvider";
import { useDevice } from "../Hooks/useDevice";
import DeviceForm from "../components/forms/DeviceForm";

export const DevicesPage = () => {
  const [selectedDevices, setSelectedDevices] = useState<number[]>([]);
  const { propertySelectedContext } = useStateContext();
  const [open, setOpen] = useState<boolean>(false);
  const [refetch, setRefetch] = useState<boolean>(false);
  const { devices, loading, error } = useDevice(propertySelectedContext?.id, refetch);
  const handleSelect = (id: number) => {
      setSelectedDevices((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const openForm = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-main-dark-bg text-gray-400 p-8">
      <DeviceForm
        open={open}
        onClose={onClose}
        property={propertySelectedContext}
        setRefetch={setRefetch}
      />
      <div className="flex items-center justify-between">
        <JobHeader
          jobTitle="Devices Management"
          jobType="property devices"
          location="12"
          salaryRange="120K"
          closingDate="January 9, 2020"
        />
        <div className="mt-5 flex lg:ml-4 lg:mt-0">
          <span className="ml-3 hidden sm:block">
            <button
              onClick={openForm}
              type="button"
              className="inline-flex items-center rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <BsBuildings
                aria-hidden="true"
                className="-ml-0.5 mr-1.5 size-4 text-gray-100"
              />
              Add Device
            </button>
          </span>
          <span className="hidden sm:block ml-3">
            <button
              type="button"
              className="inline-flex items-center rounded-md text-gray-100 px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-primary"
            >
              <Sync
                aria-hidden="true"
                className="-ml-0.5 mr-1.5 size-5 text-gray-100"
              />
              Refresh
            </button>
          </span>

          <span className="sm:ml-3">
            <button
              onClick={() => {}}
              type="button"
              disabled={!selectedDevices.length}
              className={`inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold ring-gray-300 text-white shadow-sm border-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
                ${
                  selectedDevices.length
                    ? "hover:bg-red-600"
                    : "cursor-not-allowed opacity-50"
                }`}
            >
              <MdDeleteSweep
                aria-hidden="true"
                className="-ml-0.5 mr-1.5 size-5"
              />
            Delete
            </button>
          </span>
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedDevices.length === devices.length}
                  onChange={() =>  
                    setSelectedDevices(
                       selectedDevices.length === devices.length
                        ? []
                        : devices.map((d) => d.id)
                    )
                  }
                />
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>IP Address</TableCell>
              <TableCell>Port</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Connection Type</TableCell>
              <TableCell>Operations</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {devices.map((device) => (
              <TableRow key={device.id}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedDevices.includes(device.id)}
                    onChange={() => handleSelect(device.id)}
                  />
                </TableCell>
                <TableCell>{device.name}</TableCell>
                <TableCell>{device.ipAddress}</TableCell>
                <TableCell>{device.port}</TableCell>
                <TableCell>
                  {device.status === "Active" ? (
                    <Box sx={{ color: "#29FF65", marginX: "auto" }}>
                      {" "}
                      <CheckCircle /> Online
                    </Box>
                  ) : (
                    <Box sx={{ color: "gray", marginX: "auto" }}>
                      <Cancel /> Offline
                    </Box>
                  )}
                </TableCell>
                <TableCell>{device.connectionType}</TableCell>
                <TableCell>
                  <IconButton color="default">
                    <EditNote />
                  </IconButton>
                  <IconButton color="default">
                    <Refresh />
                  </IconButton>
                  <IconButton color="default">
                    <People />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
