import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import DynamicTable, { type Column } from "../components/DynamicTable";

interface RFIDEntry {
  status: string;
  rfid: string;
  charger: string;
  user: string;
}

const RFID = () => {
  const [status, setStatus] = useState("");
  const [rfid, setRfid] = useState("");
  const [charger, setCharger] = useState("");
  const [user, setUser] = useState("");
  const [entries, setEntries] = useState<RFIDEntry[]>([]);

  const handleAdd = () => {
    if (status && rfid && charger && user) {
      setEntries([...entries, { status, rfid, charger, user }]);
      setStatus("");
      setRfid("");
      setCharger("");
      setUser("");
    }
  };

  const handleDelete = (index: number) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  const columns: Column[] = [
    { field: "rfid", headerName: "RFID" },
    { field: "chargerAssigned", headerName: "Charger Assigned" },
    { field: "creditLoaded", headerName: "Credit Loaded" },
  ];

  return (
    <Box>
      <Typography variant="h4" mb={2}>
        RFID{" "}
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <TextField
          label="RFID #"
          value={rfid}
          onChange={(e) => setRfid(e.target.value)}
        />
        <TextField
          label="Charger Assigned"
          value={charger}
          onChange={(e) => setCharger(e.target.value)}
        />
        <TextField
          label="User"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <Button variant="contained" onClick={handleAdd}>
          Add
        </Button>
      </Box>
      <DynamicTable columns={columns} rows={entries} onDelete={handleDelete} />
    </Box>
  );
};

export default RFID;
