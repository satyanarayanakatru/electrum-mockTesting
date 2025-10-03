import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import DynamicTable, { type Column } from "../components/DynamicTable";

interface RFIDEntry {
  rfid: string;
  charger: string;
  user: string;
}

const RFID = () => {
  const [rfid, setRfid] = useState("");
  const [charger, setCharger] = useState("");
  const [user, setUser] = useState("");
  const [entries, setEntries] = useState<RFIDEntry[]>([]);

  const handleAdd = () => {
    if (rfid && charger && user) {
      setEntries([...entries, { rfid, charger, user }]);
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
    { field: "charger", headerName: "Charger Assigned" },
    { field: "user", headerName: "User" },
  ];

  return (
    <Box>
      <Typography variant="h4" mb={2}>
        RFID
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
          Add RFID
        </Button>
      </Box>
      <DynamicTable columns={columns} rows={entries} onDelete={handleDelete} />
    </Box>
  );
};

export default RFID;
