
import {useContext} from 'react';
import {Box,styled,Typography} from '@mui/material'
import React from 'react'
import { AccountContext } from '../../context/AccountProvider';

const Profile = () => {
const {account} = useContext(AccountContext);

const ImageContainer = styled(Box)`
display:flex;
justify-content:center;
`;


const Image = styled('img')({
    width: '25%',
    height: '25%',
    borderRadius:'50%',
    padding: '10px 0'
})

const Boxwrapper = styled(Box)`
Background:#ffffff;
padding: 12px 30px 2px;

box-shadow: 0 1px 5px rgba(0,0,0,0.8);
& :first-child{
    font-size: 13px;
    color: #009688;
    font-weight: 200;
}
& :last-child{
    margin:7px 0;
    color:#4a4a4a;
}
`;
const Descriptioncontainer = styled(Box)`
padding: 15px 20px 28px 30px;
& >p {
    font-size:13px;
    color: #8696a0;
}
`

  return (
    <>
    <ImageContainer>
        <Image src={account.picture} alt="dp" />
    </ImageContainer>
    <Boxwrapper>
        <Typography>Your Name</Typography>
    
        <Typography>{account.name}</Typography>
    </Boxwrapper>
    <Descriptioncontainer>
        <Typography>This is not your username or pin. This name will be visible to your whatsapp contacts.</Typography>
    </Descriptioncontainer>
    <Boxwrapper>
        <Typography>About</Typography>
        <Typography>EAT|SLEEP|CODE|REPEAT</Typography>
    </Boxwrapper>
    
    
    </>
  )
}

export default Profile
