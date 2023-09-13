import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu, MenuItem,styled } from "@mui/material";
import React,{useState} from "react";

const HeaderMenu = ({setOpenDrawer}) => {
    const [open , setOpen] =useState(false);
    const handleClose =(e)=>{
        setOpen(false);
    }
    const handleClick =(e)=>{
        setOpen(e.currentTarget);
    }

    const MenuOption = styled(MenuItem)`
    font-size:14px;
    padding:15px 60px 5px 24px;
    color:#4A4A4A;
    `;
  return (
    <>
      <MoreVertIcon  onClick={handleClick}/>
      <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        contentanchorel={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <MenuOption onClick={()=>{handleClose(); setOpenDrawer(true);}} >Profile</MenuOption>
      </Menu>
    </>
  );
};

export default HeaderMenu;
