import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group"; 
import SdCardIcon from "@mui/icons-material/SdCard"; 
import EvStationIcon from "@mui/icons-material/EvStation"; 
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong"; 
import { useNavigate } from "react-router-dom";

const drawerWidth = 220;

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#1c2c3c",
          color: "white"
        }
      }}
    >
      <Toolbar sx={{ fontWeight: "bold", fontSize: 18 }}>ELECTRUM</Toolbar>
      <List>
        <ListItemButton onClick={() => navigate("/members")}>
          <ListItemIcon sx={{ color: "white" }}><GroupIcon/></ListItemIcon>
          <ListItemText primary="Members" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/rfid")}>
          <ListItemIcon sx={{ color: "white" }}><SdCardIcon/></ListItemIcon>
          <ListItemText primary="RFID" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/chargers")}>
          <ListItemIcon sx={{ color: "white" }}><EvStationIcon /></ListItemIcon>
          <ListItemText primary="Chargers" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/transactions")}>
          <ListItemIcon sx={{ color: "white" }}><ReceiptLongIcon/></ListItemIcon>
          <ListItemText primary="Transactions" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}
