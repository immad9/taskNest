"use client";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  SelectChangeEvent, 
  Chip,
  Tooltip, tooltipClasses, TooltipProps,
  Button,
  Drawer,
  Typography
} from "@mui/material";

import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AppLayout from "../layout/page";
import styled from "@emotion/styled";
import { H6, Text1 } from "@/app/component/responsiveText";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { SearchableSelect, SelectField, } from "@/app/component/inputField";
import ClearIcon from '@mui/icons-material/Clear';


const rows = [
    { name: "John Doe", email: "john@example.com", role: "Admin" },
    { name: "Sarah Khan", email: "sarah@example.com", role: "Editor" },
    { name: "Michael Lee", email: "michael@example.com", role: "Viewer" },
];

const RoleChip = styled(Chip)<{ role?: string }>(({ role }) => ({
  fontSize: "15px",
  padding: "4px 10px",
  borderRadius: "20px",
  fontWeight: 500,
  color:
    role === "Admin" ? "#fca5a5" :
    role === "Editor" ? "#86efac" :
    role === "Viewer" ? "#93c5fd" :
    "#71717a",

  backgroundColor:
    role === "Admin" ? "#ef444433" :
    role === "Editor" ? "#22c55e33" :
    role === "Viewer" ? "#3b82f633" :
    "#71717a",
}));
  const PrimaryButton = styled(Button)({
    background: "linear-gradient(135deg, #DFAF49 0%, #C89635 100%)",
    color: "#fff",
    height: 42,
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


const Member = ()=> {
const [open,setOpen] = useState(false)
const [role,setRole] = useState<string>("viewer")
const toggleDrawer = ()=>{ setOpen(!open) }


const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    background: "var(--light-primary)",
    color: "var(--text-light)",
    fontFamily: "var(--font-body)",
    borderRadius: "10px",
    padding: "10px 14px",
    fontSize: "15px",
    fontWeight:300,
    letterSpacing:1
  },

  [`& .${tooltipClasses.arrow}`]: {
    color: "var(--light-primary)",
  },
}));


  return (
    <AppLayout>
        {/* <ContentBox> */}
    <Box sx={{borderRadius:"20px", border: "1px solid rgba(255,255,255,0.18)", backdropFilter: "blur(15px) saturate(180%)", WebkitBackdropFilter: "blur(15px) saturate(180%)", boxShadow: "0 8px 32px rgba(0,0,0,0.2)","&::-webkit-scrollbar": { display: "none",}, scrollbarWidth: "none", msOverflowStyle: "none", maxWidth: "100%", overflowX: "auto", mt: 3,mx:3, py:4 }}>
        
        {/* ---------------------   Add member button ---------------------- */}
        <Box mb={4} alignItems={{md:"center"}} gap={2} flexDirection={{xs:"column",sm:"row"}} justifyContent={"space-between"} px={3} display={"flex"}>
            <H6 textAlign="center">Team Member</H6>   
            <PrimaryButton onClick={()=>{toggleDrawer()}} sx={{px:2}}><AddIcon/> Add Member</PrimaryButton>   
         </Box>

         {/* ------- table content --------------- */}
      <TableContainer
        component={Paper}
        sx={{background: "transparent",borderRadius:0, borderTop: "1px solid var(--text-gray)",borderBottom: "1px solid var(--text-gray)",color: "var(--text-light)", }}>
        <Table sx={{minWidth:"600px", maxWidth:"100%", overflowX: "auto", }}>
          {/* ==== TABLE HEAD ==== */}
          <TableHead>
            <TableRow>
              {["Name", "Email", "Role", "Actions"].map((head) => (
                <TableCell
                  key={head}
                  sx={{
                    color: "var(--primary)",
                    fontWeight: 400,
                    fontSize: 18,
                    fontFamily:"var(--font-heading)",
                    borderBottom: "1px solid var(--text-gray)",
                  }}
                >
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {/* ==== TABLE BODY ==== */}
          <TableBody>
            {rows.map((row, index) => (
              <TableRow hover key={index} sx={{borderBottom: "1px solid red",}}>
                <TableCell sx={{borderBottom: "1px solid var(--text-gray)", color: "var(--text-light)", fontSize: 16,fontWeight:400, fontFamily:"var(--font-body)" }}>
                  {row.name}
                </TableCell>
                <TableCell sx={{borderBottom: "1px solid var(--text-gray)", color: "var(--text-light)", fontSize: 16,fontWeight:400, fontFamily:"var(--font-body)" }}>
                  {row.email}
                </TableCell>
                <TableCell sx={{borderBottom: "1px solid var(--text-gray)", color: "var(--text-light)", fontSize: 16,fontWeight:400, fontFamily:"var(--font-body)" }}>
                  {/* {row.role} */}
                  <RoleChip label={row.role} role={row.role} />
                </TableCell>

                {/* ACTION BUTTONS */}
               <TableCell sx={{borderBottom: "1px solid var(--text-gray)",}}>
               {row.role != "Admin" && 
                 <>
                 <IconButton>
                    <CustomTooltip  arrow title="edit"><ModeEditOutlineOutlinedIcon  sx={{ color: "var(--primary)" }} /></CustomTooltip>
                  </IconButton>
                  <IconButton>
                    <CustomTooltip arrow title="delete"><DeleteOutlineIcon color="error" sx={{ color: "danger" }} /></CustomTooltip>
                  </IconButton>
                  </>
                }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table> 
      </TableContainer>
    </Box>

    {/* -------------------------- Add member drawer  ------------------*/}
     <Drawer ModalProps={{ keepMounted: true,BackdropProps: {invisible: true,},}} anchor="bottom" open={open} onClose={()=>{toggleDrawer()}} 
        sx={{"& .MuiPaper-root":{border:"4px solid var(--primary)",borderRadius:4,maxWidth:450, maxHeight:450, height:"100%",width:"90%",position:"absolute",left:0,right:0,top:0,bottom:0, m:"auto",bgcolor:"var(--text-light)"}}}>
        <Box width={"auto"} height={"100%"} p={2}>
            <Box display="flex" justifyContent="flex-end"> <IconButton onClick={()=>{toggleDrawer()}} sx={{p:0,bgcolor:"none"}}> <ClearIcon fontSize="large" sx={{ color: "var(--primary)", cursor: "pointer" }} /> </IconButton> </Box>
            <Typography variant="body1" sx={{textAlign:"center",color:"var(--primary)",fontSize:"24px",fontWidth:"bold",fontFamily:"var(--font-heading)",mt:3}}>Add Member Detail</Typography>
            {/* <TextArea placeholder="Search with email or user name" label="Enter Email or User Name"/> */}
            <SearchableSelect noOptionsText="User Not Found" mt={2} placeholder="Search with email or user name" label="Enter Email or User Name" options={[]} />
            <SelectField mt={3} defaultValue={"editor"} value={role} onChange={(e:SelectChangeEvent)=>{setRole(e.target.value)}} label="Select Role" options={[{ label: "Editor", value: "editor" },{ label: "Viewer", value: "viewer" },]}/>
             {role === "editor" && <Text1 sx={{fontSize:"16px",lineHeight:"20px",mt:1, fontWeight:400,color:"var(--text-gray)"}}>This member can only view tasks assigned to them.</Text1> }
             {role === "viewer" &&<Text1 sx={{fontSize:"16px",lineHeight:"20px",mt:1, fontWeight:400,color:"var(--text-gray)"}}>This member can make changes to tasks assigned to them and others.</Text1>}
            <PrimaryButton sx={{mt:5, width:"100%"}}><AddIcon/> Add Member</PrimaryButton>
        </Box>
      </Drawer>
    </AppLayout>
  );
}


export default Member