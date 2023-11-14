import Users from "./APP/Modules/user-list/Container/userList";
import ProfileUI from "./APP/Modules/user-profile/Container/profileList";
import "./App.css";
import { Offline, Online } from "react-detect-offline";

function App() {
  return (
    <div className="background">
      <Online>
        <div className="bg-pattern-top"></div>
        <div className="bg-pattern-bottom"></div>
        <Users />
      </Online>
      <Offline>
        <h1>No Internet</h1>
      </Offline>
    </div>
  );
}

export default App;
