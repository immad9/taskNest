"use client";

import { Box, Button, Drawer, Typography, styled } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";

// imports icons and images here
import LoginIcon from "@mui/icons-material/Login";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HamburgerToggle from "./hamburgerIcon";
import { Route } from "@/app/routes/routes";

const PrimaryButton = styled(Button)({
  background: "linear-gradient(135deg, #DFAF49 0%, #C89635 100%)",
  color: "#fff",
  height: 42,
  width: 130,
  borderRadius: 8,
  fontWeight: 500,
  textTransform: "none",
  fontFamily: "var(--font-body)",
  fontSize: "18px",
  transition: "all 0.6s ease",
  "&:hover": {
    background: "none",
    color: "var(--primary)",
    border: "1px solid var(--primary)",
  },
});

const OutlineButton = styled(Button)({
  color: "var(--primary)",
  height: 42,
  width: 130,
  borderRadius: 8,
  fontWeight: 500,
  textTransform: "none",
  fontFamily: "var(--font-body)",
  fontSize: "18px",
  transition: "all 0.6s ease",
  border: "1px solid var(--primary)",
  "&:hover": {
    color: "#fff",
    background: "linear-gradient(135deg, #DFAF49 0%, #C89635 100%)",
  },
});

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter()


  const HandleClose = (e: boolean) => {
    setOpen(e);
    return e;
  };

  return (
    <>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex:1800,
          background: "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 2px 20px rgba(0,0,0,0.08)",
          height: "49px",
          display: "flex",
          alignItems: "center !important",
          justifyContent: "space-between",
          p: "8px 25px",
          color: "var(--text)",
          borderBottom: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <Typography
          variant="body1"
          fontSize={28}
          fontFamily={"var(--font-heading)"}
          fontWeight={600}
          color="var(--text)"
          sx={{cursor:"pointer"}}
          component={"h5"}
          onClick={()=>{router.push(Route.HOME)}}
        >
          Task<span style={{ color: "var(--primary)" }}>Nest</span>
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
          <OutlineButton onClick={()=>{router.push(Route.LOGIN)}}>
            <LoginIcon sx={{ mx: 1, my: "auto", lineHeight: 0 }} fontSize="small"/> Log In
          </OutlineButton>
          
          <PrimaryButton onClick={()=>{router.push(Route.SIGNUP)}}>
            <ExitToAppIcon sx={{ mx: 1, my: "auto", lineHeight: 0 }} fontSize="small" /> Sign Up 
          </PrimaryButton>

        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <HamburgerToggle open={open} onClick={HandleClose} />
        </Box>
      </Box>

      <Drawer
        slotProps={{
          paper: {
            sx: {
              width: 230,
              height: 250,
              top: 70,
              right: 10,
              p: 3,
              border: "3px solid var(--primary)",
              borderRadius: "20px",
              background: 'linear-gradient(135deg, #fff 0%, #2d3748 10%, #1a202c 90%, #fff 100%)'
            },
          },
        }}
        anchor="right"
        variant="temporary"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          component={"div"}
          display={"flex"}
          height={"100%"}
          flexDirection={"column"}
          gap={3}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <PrimaryButton onClick={()=>{
            router.push(Route.SIGNUP)
             setOpen(false)}} sx={{ width: "90%" }}> <ExitToAppIcon sx={{ mx: 1, my: "auto", lineHeight: 0 }} fontSize="small"/>
              Sign Up
          </PrimaryButton>
          <OutlineButton onClick={()=>{
            router.push(Route.LOGIN)
             setOpen(false)}} sx={{ width: "90%" }}> <LoginIcon sx={{ mx: 1, my: "auto", lineHeight: 0 }} fontSize="small"/>
              Log In
          </OutlineButton>
        </Box>
      </Drawer>
    </>
  );
}
