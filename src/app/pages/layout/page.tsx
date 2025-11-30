"use client"
import Sidebar from '@/app/component/sidebar'
import Topbar from '@/app/component/topbar'
import { Box } from '@mui/material'
import React, { useState } from 'react'

const AppLayout = ({children}:{children:React.ReactNode})=> {
const [open, setOpen] = useState<boolean> (true)

const handleOpen = ()=>{
setOpen(!open)
return open
}
  return (
    <Box display={"flex"} sx={{ background:"var(--gradient-bg)",width:"100%"}}>
      <Topbar isOpen={open} toggleSidebar={()=>{return handleOpen()}}  />
      <Sidebar isOpen={open}/>

      <Box height={"100%"} minHeight={"calc(100vh - 65px)"} width={"100%"} flexGrow={1} color={"var(--text-light)"} mt={13}>
      {children}
      </Box>
    </Box>
  )
}


export default AppLayout