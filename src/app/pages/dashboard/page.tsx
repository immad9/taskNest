"use client";
import { H2, Text1, Text2 } from '@/app/component/responsiveText';
import AppLayout from '../layout/page'
import styled from '@emotion/styled';
import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import { TextArea } from '@/app/component/inputField';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ContentBox from '@/app/component/contentBox';

import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';

const HeroBadge = styled(Chip)({
  background: 'rgba(223, 175, 73, 0.15)',
  color: '#DFAF49',
  border: '1px solid rgba(223, 175, 73, 0.3)',
  fontWeight: 600,
  fontSize:18,
  fontFamily:"var(--font-body)",
  marginBottom: '2rem',
  textAlign:"center",
  display:"flex",
  maxWidth:"fit-content",
  margin:"auto",
  width:"80%"
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

const Dashboard = ()=> {
const DashBoardData = [
    {icon:GroupOutlinedIcon,label:"Total Members",value:18,},
    {icon:AdminPanelSettingsOutlinedIcon,label:"Admins",value:3,},
    {icon:EditNoteOutlinedIcon,label:"Editors",value:5,},
    {icon:RemoveRedEyeOutlinedIcon,label:"Viewers",value:7,},
]

  return (
    <AppLayout>
      <ContentBox>
       <HeroBadge label="✨ Welcome to TaskNest Workspace" />
       <H2 textAlign='center' sx={{mt:3,color:"var(--text-light)"}}>Hello! <span style={{color:"var(--primary)"}}>John doe</span></H2>
       <Text2 textAlign='center'>Let&lsquo;s create your company&apos;s private workspace right now</Text2>
     <Box sx={{background: "rgba(255,255,255,0.08)", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.18)", backdropFilter: "blur(15px) saturate(180%)", WebkitBackdropFilter: "blur(15px) saturate(180%)", boxShadow: "0 8px 32px rgba(0,0,0,0.2)", color: "var(--text-light)" }} m={"auto"} my={6} maxWidth={"500px"} width={"90%"} height={{xs:"fit-content",md:"370px"}}>
        <Box p={2.5}>  
        <Typography variant='h4' fontFamily={"var(--font-text)"} textAlign={"center"}>Create Your Workspace</Typography>
        <TextArea labelStyle={{color:"var(--text-light)"}} label='Enter Company Name :' placeholder='JohnDoe Corp' mt={3} sx={{"& .MuiOutlinedInput-root": {bgcolor:"transparent",border:"1px solid var(--primary)"},"& .MuiInputBase-input::placeholder": {color:"var(--text-light)",opacity: 0.7}, "& .MuiInputBase-input": {color:"var(--text-light)"}}}/>
        <OutlineButton sx={{width:"100% !important",my:3,gap:0}}><AddOutlinedIcon/><Text2>Create Your Worspace</Text2></OutlineButton>
        <Text1 textAlign='center' sx={{maxWidth:"450px",mx:"auto",color:"var(--text-gray)"}}>Your workspace will be completely private. You&lsquo;ll be the admin and can invite your team instantly.</Text1>
        </Box>
     </Box> 

          {/* after login */}
         <H2 sx={{mt:3,color:"var(--text-light)"}}>Welcome back, <span style={{color:"var(--primary)"}}>John doe Corp</span></H2>
         <Text2>Your private workspace is ready. Manage your team and build powerful workflows.</Text2>
             
          <Grid container my={6} spacing={3}>
             {DashBoardData.map((e)=>{
                const Icon = e.icon
                return(
                 <Box key={e.label} sx={{p:2,position:"relative", background: "rgba(255,255,255,0.08)", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.18)", backdropFilter: "blur(15px) saturate(180%)", WebkitBackdropFilter: "blur(15px) saturate(180%)", boxShadow: "0 8px 32px rgba(0,0,0,0.2)", color: "var(--text-light)" }} width={{xs:"90%",sm:250}} height={160}>
                     <Box>
                       <Typography fontSize={"26px"} fontWeight={"400"} fontFamily={"var(--font-body)"}>{e.label}</Typography> 
                       <Typography sx={{fontStyle:"italic"}} fontSize={"46px"} fontWeight={"400"} fontFamily={"var(--font-body)"} color='var(--primary)'>{e.value}</Typography> 
                     </Box>
                     <Icon sx={{color:'var(--text-gray)', fontSize:"100px",position:"absolute",right:10,bottom:10}}/>
                 </Box>
                )})}
          </Grid>

     </ContentBox>
    </AppLayout>
  )
}


export default Dashboard