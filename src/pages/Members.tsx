import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import DynamicTable, { type Column } from "../components/DynamicTable";

interface Member {
  name: string;
  email: string;
  creditLoaded: string;
}

const Members = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [creditLoaded, setCreditLoaded] = useState("");
  const [members, setMembers] = useState<Member[]>([]);

  const handleAddMember = () => {
    if (name && email && creditLoaded !== "") {
      const newMember: Member = {
        name,
        email,
        creditLoaded,
      };
      setMembers([...members, newMember]);
      setName("");
      setEmail("");
      setCreditLoaded("");
    }
  };

  const handleDelete = (index: number) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  const columns: Column[] = [
    { field: "name", headerName: "Name" },
    { field: "email", headerName: "Email" },
    { field: "creditLoaded", headerName: "Credit Loaded" },
  ];

  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Members{" "}
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Credit Loaded"
          variant="outlined"
          value={creditLoaded}
          onChange={(e) => setCreditLoaded(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleAddMember}>
          Add Member
        </Button>
      </Box>
      <DynamicTable columns={columns} rows={members} onDelete={handleDelete} />
    </Box>
  );
};

export default Members;
