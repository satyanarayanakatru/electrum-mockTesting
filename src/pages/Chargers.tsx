import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import DynamicTable, { type Column } from "../components/DynamicTable";

interface ChargerEntry {
  charger: string;
  stall: string;
  location: string;
  rfid: string;
  type: string;
}

const Chargers = () => {
  const [charger, setCharger] = useState("");
  const [stall, setStall] = useState("");
  const [location, setLocation] = useState("");
  const [rfid, setRfid] = useState("");
  const [type, setType] = useState("");
  const [entries, setEntries] = useState<ChargerEntry[]>([]);

  const handleAdd = () => {
    if (charger && stall && location && rfid && type) {
      setEntries([...entries, { charger, stall, location, rfid, type }]);
      setCharger("");
      setStall("");
      setLocation("");
      setRfid("");
      setType("");
    }
  };

  const handleDelete = (index: number) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  const columns: Column[] = [
    { field: "charger", headerName: "Charger Assigned" },
    { field: "stall", headerName: "Stall" },
    { field: "location", headerName: "Location" },
    { field: "rfid", headerName: "RFID" },
    { field: "type", headerName: "Type" },
  ];

  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Chargers
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
        <TextField
          label="Charger #"
          value={charger}
          onChange={(e) => setCharger(e.target.value)}
        />
        <TextField
          label="Stall"
          value={stall}
          onChange={(e) => setStall(e.target.value)}
        />
        <TextField
          label="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <TextField
          label="RFID Assigned"
          value={rfid}
          onChange={(e) => setRfid(e.target.value)}
        />
        <Select
          value={type}
          onChange={(e) => setType(e.target.value)}
          displayEmpty
        >
          <MenuItem value="" disabled>
            Type
          </MenuItem>
          <MenuItem value="Shared">Shared</MenuItem>
          <MenuItem value="Private">Private</MenuItem>
        </Select>
        <Button variant="contained" onClick={handleAdd}>
          Add Charger
        </Button>
      </Box>

      <DynamicTable
        columns={columns}
        rows={entries}
        onDelete={handleDelete}
        onLogs={() => {}}
      />
    </Box>
  );
};

export default Chargers;
