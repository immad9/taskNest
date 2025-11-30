"use client";
import ContentBox from '@/app/component/contentBox';
import Navbar from '@/app/component/navbar'
import { H1, H2, H6, Text1, Text2, Text3 } from '@/app/component/responsiveText';
import { Box, Button, Chip, Grid, styled,  } from '@mui/material'
import Image from 'next/image';
import { FC } from 'react'
import { FeatureCard, StartingSteps, TaskNestSolution } from './content';

// import icons and images here
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import { HeroImg_1 } from '../../../../public/assests/images';
import Footer from '@/app/component/footer';
import { useRouter } from 'next/navigation';
import { Route } from '@/app/routes/routes';



interface FeatureCardProps {
    heading:string,
    text: string,
    Icon: React.ElementType
}

const HeroBadge = styled(Chip)({
  background: 'rgba(223, 175, 73, 0.15)',
  color: '#DFAF49',
  border: '1px solid rgba(223, 175, 73, 0.3)',
  fontWeight: 600,
  marginBottom: '2rem',
  textAlign:"center",
  display:"flex",
  width:"fit-content",
  margin:"auto"
});

const PrimaryButton = styled(Button)({
    background: "linear-gradient(135deg, #DFAF49 0%, #C89635 100%)",
    color: "#fff",
    height: 52,
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

const Home:FC = ()=> {
const router = useRouter() 


  
  const FeatureCards:FC<FeatureCardProps> = ({Icon,heading,text})=>{
    return(
     <Box sx={{boxShadow: '0 4px 20px rgba(0,0,0,0.06)',overflow:"hidden", transition:"all 0.3s ease",
        '&::before': {content: '""', position: 'absolute', top: 0, left: 0, width: '4px', height: 0, background: 'linear-gradient(180deg, #DFAF49 0%, #C89635 100%)',transition: 'height 0.4s ease',},
        "&:hover":{transform:"translateY(-6px)", boxShadow: '0 12px 40px rgba(0,0,0,0.12)','&::before': {height: '100%',},}}} 
         p={2} maxWidth={450} height={{xs:"100%",sm:250}} display={"flex"} flexDirection={"column"} justifyContent={"space-between"} border={"2px solid var(--primary)"} borderRadius={4}>
            <Icon sx={{fontSize:80,color:"var(--primary)"}}/>
            <H6 color='var(--text)'>{heading}</H6>
            <Text1 color='var(--text-gray)'>{text}</Text1>
     </Box>
    )            
  }


  return (
    <Box>
      <Navbar/>

    {/* home hero section */} 
        <Box width={"100%"} sx={{background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 50%, #1a202c 100%)',py:7}}>    
            <HeroBadge label="✨ Welcome to TaskNest" />
             <ContentBox>
          <Grid container flexDirection={{xs:"column-reverse",md:"row"}} mt={4} alignItems={"center"} rowSpacing={6} justifyContent={"space-between"}>
                <Grid size={{xs:12,md:7}}>
                <H1 color='var(--text-light)'>Manage Your {<span style={{color:"var(--primary)"}}>Team&lsquo;s Workflows  </span>} in One Secure Workspace</H1>
                <H6 sx={{mt:2}} color='var(--text-light)'>A powerful platform where companies manage processes, collaborate with teams, and achieve more—all in your private&lsquo; secure workspace.</H6>
                <PrimaryButton onClick={()=>{router.push(Route.SIGNUP)}} sx={{maxWidth:280,mt:3, width:"100%"}}>Create Workspace</PrimaryButton>
                </Grid>
                <Grid size={{xs:12,md:5}} display={"flex"} justifyContent={"center"}>
                 <Image src={HeroImg_1} alt={'img_here'} style={{width:"100%", height:"100%", maxWidth:"580px",maxHeight:"580px"}}/>
                </Grid>
          </Grid>
             </ContentBox>  
        </Box>

       {/* why tasknest */}
       <ContentBox sx={{my:10}}>
         <Text1 sx={{px:2,py:0.5,bgcolor:"var(--primary)",width:"fit-content",color:"var(--text-light)",borderRadius:6}}>Why TaskNest</Text1>
         <H2 sx={{maxWidth:750,my:1}}>Everything Your Team Needs to Stay Organized</H2>
         <Text2 color='var(--text-gray)'>Built for modern teams who value security, simplicity, and seamless collaboration.</Text2>
         <Grid container rowSpacing={6} columnSpacing={3} mt={4}>
            {FeatureCard.map((e)=><Grid key={e.title} size={{xs:12,sm:6,md:6, lg:4}}><FeatureCards heading={e.title} text={e.description} Icon={e.icon}/></Grid>)}
         </Grid>
       </ContentBox>

       {/* how its works */}
    <ContentBox sx={{my:10}}>
         <Text1 sx={{px:2,py:0.5,bgcolor:"var(--primary)",width:"fit-content",color:"var(--text-light)",borderRadius:6}}>HOW IT WORKS</Text1>
         <H2 sx={{maxWidth:750,my:1}}>Get Started in 4 Simple Steps</H2>
         
         <Grid container rowGap={2} mt={4}>
          {StartingSteps.map((e,i)=>
          <Grid key={e.title} display={"flex"} width={"fit-content"} mx={"auto"} flexDirection={{xs:"column",sm:"row"}} alignContent={"center"} justifyContent={"center"} size={{xs:12,sm:6,lg:3}}>
            <Box sx={{transition:"all 0.3s ease", background: "var(--light-primary)", p:2, borderRadius:4, "&:hover":{background:"var(--primary)",color:"var(--text-light)", "& p": { color: "var(--text-light)",borderColor:"var(--text-light)" }}}} maxWidth={380}>
             <Text1 sx={{fontWeight:500, border:"1px solid var(--primary)",px:2,py:0.5,width:"fit-content",color:"var(--primary)",borderRadius:6}}>Step {`${i+1}`}</Text1>
             <H6 sx={{my:1,}}>{e.title}</H6>
             <Text1>{e.description}</Text1>
            </Box>
              <KeyboardDoubleArrowRightOutlinedIcon sx={{transform:{xs:"rotate(90deg)",sm:"rotate(0deg)"},fontSize:46,color:"var(--primary)",m:"auto",visibility: e.icon ? "visible" : "hidden" }}/>
          </Grid>
         )}
          
         </Grid>
    </ContentBox>
    

    {/* tasnest solllution */}
    <ContentBox sx={{my:10}}>
        <Text1 sx={{px:2,py:0.5,bgcolor:"var(--primary)",width:"fit-content",color:"var(--text-light)",borderRadius:6}}>TASKNEST SOLUTIONS</Text1>
        <H2 sx={{maxWidth:850,my:1}}>Stop Juggling Multiple Tools.Centralize Your Processes.</H2>
        <Text2 color='var(--text-gray)'>Transform these challenges into opportunities with TaskNest</Text2>
        
        <Grid container rowSpacing={8} columnSpacing={3} sx={{display:"flex",flexWrap:"wrap", justifyContent:"space-between",alignItems:"center", mt:4, background: "white",py:13, px:2,  borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.08)", position: "relative",overflow: "hidden"}}>
          <Box sx={{ top: "-100px",left: "-100px", background: "linear-gradient(135deg, #DFAF49 0%, #C89635 100%)", position: "absolute", width: "350px",  height: "350px", borderRadius: "50%", opacity: "0.06",}}/>
          <Box sx={{ bottom: "-100px",right: "-100px", background: "linear-gradient(135deg, #4299e1 0%, #3182ce 100%)", position: "absolute", width: "350px",  height: "350px", borderRadius: "50%", opacity: "0.06",}}/>
           
           {TaskNestSolution.map((e)=>{
             const Icon = e.icon
            return(
              <Grid key={e.title} size={{xs:12,sm:6,md:4}}>
              <Icon sx={{borderRadius:"50%",fontSize:"40px",bgcolor:"var(--primary)",p:1,color:"var(--text-light)"}}/>
              <H6 color='var(--primary)'>{e.title}</H6>
              <Text1 color='var(--text-gray)'>{e.description}</Text1>
           </Grid>
            )
           })}

          
           </Grid>
    
    </ContentBox>

      <Box sx={{background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 50%, #1a202c 100%)',py:7}}>
        <ContentBox sx={{textAlign:"center"}}>
          <H2 color='var(--text-light)'>Manage Your {<span style={{color:"var(--primary)"}}>Team&lsquo;s Workflows  </span>} in One Secure Workspace</H2>
          <Text3 sx={{my:2}} color='var(--text-gray)'>Join teams who trust TaskNest to manage their processes securely and efficiently.</Text3>  
          <PrimaryButton onClick={()=>{router.push(Route.SIGNUP)}} sx={{maxWidth:"fit-content",mt:3, width:"100%"}}>Create Your Workspace Now</PrimaryButton>
        </ContentBox>
      </Box>
    
     <Footer/>

    </Box>
  )
}

export default Home