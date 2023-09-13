
//components
import Messenger from "./Components/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./context/AccountProvider";

function App() {
  const clientId = '883611165102-qeachnv9if3263k3sjvltu9pgs4ci6u9.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
      <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
    
  );
}

export default App;
