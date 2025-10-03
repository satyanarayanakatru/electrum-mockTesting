import { CssBaseline, Toolbar, Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Chargers from "./pages/Chargers";
import Members from "./pages/Members";
import RFID from "./pages/RFID";
import Transactions from "./pages/Transactions";
import Home from "./pages/Home";


export default function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header />
        <Sidebar />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "#f5f5f5", p: 3, minHeight: "100vh" }}
        >
          <Toolbar /> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/rfid" element={<RFID />} />
            <Route path="/chargers" element={<Chargers />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}
