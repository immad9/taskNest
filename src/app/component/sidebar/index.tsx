"use client";
import { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  Toolbar,
  useTheme,
  Typography,
  useMediaQuery,
} from "@mui/material";

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import WebhookOutlinedIcon from '@mui/icons-material/WebhookOutlined';


const Sidebar = ({ isOpen } : { isOpen:boolean })=> {
const expandedWidth = 280
const [selectedTab,setSelectedTab] = useState<string>("Dashboard")
const theme = useTheme()
const isMobile = useMediaQuery(theme.breakpoints.down("md"));
const SideBarContent = [
    {
     icon:DashboardOutlinedIcon,
     label:"Dashboard"
    },
    {
     icon:GroupOutlinedIcon,
     label:"Add Members"
    },
    {
     icon:WebhookOutlinedIcon,
     label:"Process"
    },
    {
     icon:SettingsOutlinedIcon,
     label:"Setting"
    },
]
  return (
     <Drawer
          variant="permanent"  open={isOpen}
          sx={{position:isMobile? "absolute" : "sticky", width: isOpen ? expandedWidth : 0, transition: "all 0.3s ease", "& .MuiDrawer-paper": { width: isOpen ? expandedWidth : 0, overflowX: "hidden", transition: "width 0.3s ease",borderRight: "1px solid #E5E7EB", background:"var(--gradient-bg)",},}}>
          
          <Toolbar sx={{height:"64px",borderBottom:"1px solid var(--text-light)", display: "flex", justifyContent: "center", alignItems:"center", }}>
             <Typography variant="h4" fontFamily={"var(--font-heading)"} fontWeight="bold" color="var(--text-light)"> TASK<span style={{color:"var(--primary)"}}>NEST</span> </Typography> 
          </Toolbar>
        <List sx={{mt:{xs:2,md:4}}}>
           {SideBarContent.map((e)=> { 
            const Icon = e.icon
            const select = selectedTab === e.label
            return (
            <ListItemButton onClick={()=>{setSelectedTab(e.label)}} key={e.label} 
            sx={{width:"90%", "svg":{color:select? "var(--text-light)":"var(--primary)",fontSize:"26px"},bgcolor:select? "var(--primary)":"", border:"2px solid var(--light-primary)", color:select? "var(--text-light)":"var(--primary)",transition:"all 0.3s ease-out", borderRadius: 2, mx: "auto", my: 3, gap:2, fontSize:"22px", fontWeight:"400", fontFamily:"var(--font-body)", px: 1.5,
            "&:hover":{bgcolor: select ? "var(--primary)" : "var(--light-primary)",color:"var(--text-light)","svg":{color: "var(--text-light)",}},}}>
                 <Icon/> {e.label}
             </ListItemButton>
           )})} 
         </List> 
        </Drawer>
  )
}



export default Sidebar