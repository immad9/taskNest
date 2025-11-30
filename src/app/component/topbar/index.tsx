"use client";
import { AppBar, Toolbar, Box, useMediaQuery, useTheme } from "@mui/material";
import { H6 } from "../responsiveText";
import HamburgerToggle from "../navbar/hamburgerIcon";


const Topbar = ( {isOpen,toggleSidebar } : { isOpen:boolean, toggleSidebar:(e:boolean)=>boolean }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <AppBar position="fixed" elevation={1}
      sx={{
        height:"65px",
        borderLeft:"1px solid var(--text-light)",
        background:"var(--gradient-bg)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
         width: isDesktop ? `calc(100% - ${isOpen ? 280 : 0}px)` : "100%", 
        // transition: "width 0.3s ease",
        ml: isDesktop && isOpen ? `${280}px` : 0,
        p: 0,
        borderBottom: "1px solid var(--text-light)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center",".bars": {background:" var(--primary)"} }}>
          <HamburgerToggle open={isOpen} onClick={()=>toggleSidebar(isOpen)}/>
          <H6 sx={{fontSize:"28px", ml: 1, color:"var(--primary)", fontFamily: "var(--font-heading)" }}> Dashboard </H6>
        </Box>
      </Toolbar>
      
    </AppBar>
  );
};

export default Topbar;
