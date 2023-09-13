

import {Box, Drawer, Typography,styled} from "@mui/material"
import React from 'react'
import {ArrowBack} from "@mui/icons-material"

//component
import Profile from "./Profile";

const Header = styled(Box)`
background: #008069;
height:113px;
color: #ffffff;
display:flex;
& > svg, & > p {
margin-top:auto;

font-weight:600;

}
`;
const Component = styled(Box)`
background: #ededed;
height:74%;
`;

const Text = styled(Typography)`
padding:15px;
font-size:18px;
`;

const Icon = styled(ArrowBack)`
margin-left:15px;
margin-bottom:15px;
`;

const DrawerStyle = {
    left:20,
    top:12,
    height:"95%",
    width:"33%",
    boxShadow:"none"
}
const InfoDrawer = ({open,setOpen}) => {
    const handleClose=()=>{
        setOpen(false)
    }
  return (
    <Drawer
    open={open}
    onClose={handleClose}
    PaperProps={{sx:DrawerStyle}}
    style={{zIndex:1500}}
    >
      
    <Header>
    <Icon onClick={()=> setOpen(false)}/>
    <Text>Profile</Text>
    </Header>
    <Component>
    <Profile/>
    </Component>
    </Drawer>
  )
}

export default InfoDrawer
