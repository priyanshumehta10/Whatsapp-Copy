import React,{useState} from "react";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { Box, styled } from "@mui/system";
import ChatIcon from "@mui/icons-material/Chat";

//component
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../Drawer/InfoDrawer";

const Image = styled("img")({
  height: "40px",
  width: "40px",
  borderRadius: "50%",
});
const Component = styled(Box)`
  height: 50px;
  background-color: #ededed;
  padding: 8px 16px;
  display: flex;
`;
const Wrapper = styled(Box)`
  margin-left: auto;
  & > * {
    margin-left: 2px;

    color: #000;
  }
  `;

const Chat = styled(ChatIcon)`
    font-size: 21px;
    margin-right: 12px;
    margin-top: 3px;
  `;

const Header = () => {
  const { account } = useContext(AccountContext);
  const [openDrawer , setOpenDrawer] = useState(false);
  const toggleDrawer =()=>{
    setOpenDrawer(true);
  }
  return (
    <>
      <Component>
        <Image src={account.picture} alt="dp" onClick={()=> toggleDrawer()} />
        <Wrapper>
          <Chat />
          <HeaderMenu setOpenDrawer={setOpenDrawer} />
        </Wrapper>
      </Component>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
};

export default Header;
