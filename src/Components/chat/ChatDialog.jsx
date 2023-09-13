import React from 'react'
import { Dialog, styled} from '@mui/material'
import { Box } from '@mui/system'
import Menu from './menu/Menu'
import Emptychat from './chat/Emptychat'


const Component = styled(Box)`
display: flex;
`
const LeftComponent = styled(Box)`
min-width:33%;
`
const RightComponent = styled(Box)`
width:73%;
min-width:300px;
height: 100%;
border-left: 1px solid rgba(0,0,0,0.14);
`

const dialogstyle = {
    height : '95%',
    width : '100%',
    margin:'20px',
    maxWidth : '100%',
    maxHeight : '100%',
    boxShadow : 'none',
    overflow : 'hidden',
    borderRadius : 0
}
const ChatDialog = () => {
  return (
    <Dialog 
    open={true}
    PaperProps={{sx : dialogstyle}}
    hideBackdrop={true}
    >
        <Component>
            <LeftComponent>
                <Menu/>
            </LeftComponent>
            <RightComponent>
                <Emptychat/>
            </RightComponent>
        </Component>
    </Dialog>
  )
}

export default ChatDialog
