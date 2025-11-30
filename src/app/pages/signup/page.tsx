"use client";
import ContentBox from '@/app/component/contentBox'
import Navbar from '@/app/component/navbar'
import { H6, Text1, } from '@/app/component/responsiveText'
import { Box, Button, Grid, styled } from '@mui/material'
import React,{FC} from 'react'
import Image from 'next/image'
import { TextArea } from '@/app/component/inputField'

// import icons and images here
import { SignUp } from '../../../../public/assests/images'
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { useRouter } from 'next/navigation';
import { Route } from '@/app/routes/routes';
import { motion } from 'framer-motion';

const OutlineButton = styled(Button)({
  color: "var(--primary)",
  height: 42,
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

const Signup:FC  = ()=> {
  const router = useRouter()



  return (
    <React.Fragment>
      <Navbar/>
      <ContentBox sx={{my:6}}>
      <Box overflow={"hidden"} sx={{py:3,boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",}} position={"relative"} width={"100%"} maxWidth={"1300px"} m={"auto"} borderRadius={3} border={"2px solid var(--primary)"}>
      <Box sx={{ bottom: "-70px",right: "-50px", background: "linear-gradient(135deg, var(--primary) 0%, var(--primary) 100%)", position: "absolute", width: "450px",  height: "450px", borderRadius: "50%", opacity: "0.06",}}/>
      <Box sx={{ top: "-70px",left: "-50px", background: "linear-gradient(135deg, #4299e1 0%, #3182ce 100%)", position: "absolute", width: "250px",  height: "250px", borderRadius: "50%", opacity: "0.06",}}/>
      <Text1 sx={{fontSize:"16px",textAlign:"center",mx:"auto",bgcolor:"rgba(223, 175, 73, 0.15)",width:"fit-content",px:1.5,py:0.5,border:"1px solid rgba(223, 175, 73, 0.3)",color:"var(--text)",borderRadius:"12px"}}>Already Have Account! <span onClick={()=>{router.push(Route.LOGIN) }} style={{color:"var(--primary)",cursor:"pointer"}}>Log In</span></Text1>  
      <Grid container alignItems={"center"} mt={4} px={{xs:2,sm:4,md:6}} flexDirection={{md:"row-reverse"}}>
         <Grid size={{xs:12,md:6}} display={"flex"} justifyContent={"center"}> 
           <motion.div initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }}> <Image src={SignUp} alt="img_here"/> </motion.div>
         </Grid>
         <Grid size={{xs:12,md:6}} display={"flex"} flexDirection={"column"} maxWidth={{xs:"100%",sm:"70%",md:"450px"}}> 
           <motion.div style={{width:"100%"}} initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }}>
            <H6 sx={{fontFamily:"var(--font-heading)",}} >Create Your Account</H6>
            <TextArea type='text' placeholder='John Doe' label='Enter Your Name :' mt={2}/>
            {/* <TextArea type='text' placeholder='JohnDoe Corporation' label='Enter Company Email :' mt={2}/> */}
            <TextArea type='text' placeholder='JohnDoe@gmail.com' label='Enter Email :' mt={2}/>
            <TextArea type='password' placeholder='Your Password' label='Enter Password :' mt={2}/>
            <OutlineButton sx={{mt:5,width:"100%"}}>Sign Up</OutlineButton>
            <Box display={"flex"} sx={{fontSize:"18px",color:"var(--primary)",mt:4}} alignItems={"center"} width={"100%"} gap={0.5}><Box sx={{borderBottom:"1px solid var(--text)",width:"100%"}} component={"hr"}/>Or<Box sx={{borderBottom:"1px solid var(--text)",width:"100%"}} component={"hr"}/> </Box>
            <Box sx={{"svg":{transition:"all 0.3s ease", fontSize:"32px",color:"var(--primary)",bgcolor:"var(--light-primary)",border:"1px solid var(--primary)",borderRadius:"50%",cursor:"pointer","&:hover":{transform: "scale(1.2)", boxShadow: "0 4px 12px rgba(0,0,0,0.2)"}}}} display={"flex"} justifyContent={"center"} gap={2} mt={2}>
              <GoogleIcon sx={{p:0.8}}/>
              <AppleIcon sx={{p:0.8}}/>
            </Box>
            </motion.div>
         </Grid>
      </Grid>
      </Box>
      </ContentBox>
    </React.Fragment>
  )
}



export default Signup