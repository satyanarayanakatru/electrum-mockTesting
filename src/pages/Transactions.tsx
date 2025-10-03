import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import DynamicTable, { type Column } from "../components/DynamicTable";

interface Transaction {
  transactionId: string;
  charger: string;
  rfid: string;
  price: number;
  startTime: string;
  endTime: string;
  duration: string;
  kwh: number;
}

const Transactions = () => {
  const [charger, setCharger] = useState("");
  const [rfid, setRfid] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [startMeter, setStartMeter] = useState("");
  const [stopMeter, setStopMeter] = useState("");
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleAdd = () => {
    if (charger && rfid && price !== "" && startTime && endTime) {
      const start = new Date(startTime);
      const end = new Date(endTime);
      const diffMs = end.getTime() - start.getTime();

      const hours = Math.floor(diffMs / (1000 * 60 * 60));
      const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

      const duration = `${hours}h ${minutes}m`;
      const kwh = Number(stopMeter) - Number(startMeter);

      const transactionId = `Transaction ID-${String(transactions.length + 1)}`;

      setTransactions([
        ...transactions,
        {
          transactionId,
          charger,
          rfid,
          price: Number(price),
          startTime,
          endTime,
          duration,
          kwh,
        } as any,
      ]);

      setCharger("");
      setRfid("");
      setPrice("");
      setStartTime("");
      setEndTime("");
      setStartMeter("");
      setStopMeter("");
    }
  };

  const handleDelete = (index: number) => {
    setTransactions(transactions.filter((_, i) => i !== index));
  };

  const columns: Column[] = [
    { field: "transactionId", headerName: "Transaction Id" },
    { field: "charger", headerName: "Charger #" },
    { field: "rfid", headerName: "RFID" },
    { field: "price", headerName: "Price" },
    { field: "duration", headerName: "Duration" },
    { field: "kwh", headerName: "KWH" },
  ];

  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Transactions
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
        <TextField
          label="Charger #"
          value={charger}
          onChange={(e) => setCharger(e.target.value)}
        />
        <TextField
          label="RFID"
          value={rfid}
          onChange={(e) => setRfid(e.target.value)}
        />
        <TextField
          label="Price"
          type="number"
          value={price}
          onChange={(e) =>
            setPrice(e.target.value === "" ? "" : Number(e.target.value))
          }
        />
        <TextField
          label="Start Time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          type="datetime-local"
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <TextField
          label="End Time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          type="datetime-local"
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <TextField
          label="Start Meter"
          value={startMeter}
          onChange={(e) => setStartMeter(e.target.value)}
          type="number"
        />
        <TextField
          label="Stop Meter"
          value={stopMeter}
          onChange={(e) => setStopMeter(e.target.value)}
          type="number"
        />
        <Button variant="contained" onClick={handleAdd}>
          Add Transaction
        </Button>
      </Box>

      <DynamicTable
        columns={columns}
        rows={transactions}
        onDelete={handleDelete}
        onLogs={() => {}}
      />
    </Box>
  );
};

export default Transactions;
