

import React from 'react'
import emptychat from './Content/emptychat.png'
import { Typography,styled,Box, Divider} from '@mui/material'


const Component = styled(Box)`
background:#f8f9f8;
padding:30px 0;
text-align:center;
height: 100vh;
`;
const Container = styled(Box)`
padding: 0 70px;
`;

const Image = styled("img")({
  width:400,
  marginTop: 40
  
});

const Title = styled(Typography)`
font-size:32px;
margin:25px 0 10px 0;
font-family: inherit;
font-weight: 300;
color: #41525d;
`;
const Subtitle = styled(Typography)`
font-size:14px;
color: #667781;
font-weight: 400;
font-family: ;
`;

const StyleDivider = styled(Divider)`
  margin: 10px 0;
  opacity: 0.8;
`;

const Emptychat = () => {
  return (
    <>
    <Component>
      <Container>
    <Image src={emptychat} alt="empty chat" />
    <Title>Whatsapp Web</Title>
    <Subtitle>Now send and receive messages without keeping your phone online.<br/>
    Use Whatsapp on up to 4 linked devices and 1 phone at the same time.</Subtitle>
    <StyleDivider/>
    </Container>
    </Component>
    </>
  )
}

export default Emptychat
