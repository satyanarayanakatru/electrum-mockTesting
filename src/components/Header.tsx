import { AppBar, Toolbar } from "@mui/material";
import ElectrumLogo from "./ElectrumLogo";

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "white",
        color: "#1c2c3c",
      }}
    >
      <Toolbar>
        <ElectrumLogo width={200}/>
      </Toolbar>
    </AppBar>
  );
}
