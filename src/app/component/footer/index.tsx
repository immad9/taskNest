import { Box, Container, Grid } from '@mui/material'
import { H6, H2, Text1, Text2 } from '../responsiveText'
import { useRouter } from 'next/navigation'
import { Route } from '@/app/routes/routes'

const Footer = ()=> {
 const router = useRouter() 
  return (
     <Box sx={{ background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 50%, #1a202c 100%)', color: 'white', py: 6, }}>
        <Container maxWidth="xl">
          <Grid container spacing={4} sx={{ mb: 4 }}>
           
            <Grid size={{xs:12, md:4}}>
              <H2  sx={{ fontWeight: 800, mb: 2 }}>Task<span style={{color:"var(--primary)"}} >Nest</span></H2>
              <Text2 sx={{ color: '#a0aec0', lineHeight: 1.8, mb: 2 }}>A secure workflow management platform designed for modern teams. Organize, collaborate, and achieve more.</Text2>
            </Grid>
           
            <Grid size={{xs:6, md:2}}>
              <H6  sx={{ color: '#dfb049f0', fontWeight: 700, mb: 2 }}> Product</H6>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Text2 onClick={()=>{router.push(Route.SIGNUP)}} sx={{ color: '#a0aec0', textDecoration: 'none', cursor:"pointer", '&:hover': { color: '#DFAF49' } }}> Sign Up </Text2>
                <Text2 onClick={()=>{router.push(Route.LOGIN)}} sx={{ color: '#a0aec0', textDecoration: 'none', cursor:"pointer", '&:hover': { color: '#DFAF49' }}}> Log In </Text2>
              </Box>
            </Grid>

            <Grid size={{xs:6, md:3}}>
              <H6  sx={{ color: '#DFAF49', fontWeight: 700, mb: 2 }}> Company </H6>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Text2 sx={{ color: '#a0aec0', textDecoration: 'none', cursor:"pointer", '&:hover': { color: '#DFAF49' } }}> About Us </Text2>
                <Text2 sx={{ color: '#a0aec0', textDecoration: 'none', cursor:"pointer", '&:hover': { color: '#DFAF49' } }}> Contact </Text2>
                <Text2 sx={{ color: '#a0aec0', textDecoration: 'none', cursor:"pointer", '&:hover': { color: '#DFAF49' } }}> Careers </Text2>
              </Box>
            </Grid>

            <Grid size={{xs:12, md:3}}>
              <H6 sx={{ color: '#DFAF49', fontWeight: 700, mb: 2 }}> Legal </H6>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Text2 sx={{ color: '#a0aec0', textDecoration: 'none', cursor:"pointer", '&:hover': { color: '#DFAF49' } }}> Privacy Policy </Text2>
                <Text2 sx={{ color: '#a0aec0', textDecoration: 'none', cursor:"pointer", '&:hover': { color: '#DFAF49' } }}> Terms of Service </Text2>
                <Text2 sx={{ color: '#a0aec0', textDecoration: 'none', cursor:"pointer", '&:hover': { color: '#DFAF49' } }}> Security </Text2>
              </Box>
            </Grid>
          
          </Grid>
          
          <Box sx={{ borderTop: '1px solid #2d3748', pt: 3, textAlign: 'center' }}>
            <Text1 sx={{ color: '#718096' }}>
              © 2025 TaskNest. All rights reserved.
            </Text1>
          </Box>
        </Container>
      </Box> 
  )
}

export default Footer