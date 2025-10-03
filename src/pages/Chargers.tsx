import React, { useState } from "react";
import { Box, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, Typography } from "@mui/material";

interface ChargerEntry {
  charger: string;
  stall: string;
  location: string;
  rfid: string;
  type: string;
  heartbeat: string;
}

const Chargers = () => {
  const [charger, setCharger] = useState("");
  const [stall, setStall] = useState("");
  const [location, setLocation] = useState("");
  const [rfid, setRfid] = useState("");
  const [type, setType] = useState("");
  const [heartbeat, setHeartbeat] = useState("");
  const [entries, setEntries] = useState<ChargerEntry[]>([]);

  const handleAdd = () => {
    if (charger && stall && location && rfid && type && heartbeat) {
      setEntries([...entries, { charger, stall, location, rfid, type, heartbeat }]);
      setCharger(""); setStall(""); setLocation(""); setRfid(""); setType(""); setHeartbeat("");
    }
  };

  return (
    <Box>
      <Typography variant="h4" mb={2}>Chargers</Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
        <TextField label="Charger #" value={charger} onChange={(e) => setCharger(e.target.value)} />
        <TextField label="Stall" value={stall} onChange={(e) => setStall(e.target.value)} />
        <TextField label="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
        <TextField label="RFID Assigned" value={rfid} onChange={(e) => setRfid(e.target.value)} />
        <Select value={type} onChange={(e) => setType(e.target.value)} displayEmpty>
          <MenuItem value="" disabled>Type</MenuItem>
          <MenuItem value="Shared">Shared</MenuItem>
          <MenuItem value="Private">Private</MenuItem>
        </Select>
        {/* <TextField label="Last Heart Beat" value={heartbeat} onChange={(e) => setHeartbeat(e.target.value)} /> */}
        <Button variant="contained" onClick={handleAdd}>Add</Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Charger #</TableCell>
              <TableCell>Stall</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>RFID Assigned</TableCell>
              <TableCell>Type</TableCell>
              {/* <TableCell>Last Heart Beat</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.charger}</TableCell>
                <TableCell>{entry.stall}</TableCell>
                <TableCell>{entry.location}</TableCell>
                <TableCell>{entry.rfid}</TableCell>
                <TableCell>{entry.type}</TableCell>
                {/* <TableCell>{entry.heartbeat}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Chargers;
