import React from "react";
import socketIOClient from "socket.io-client";
import ChatBox from "./components/ChatBox";
import MessageBox from "./components/MessageBox";
import UserName from "./components/UserName";

const endPoint = "http://localhost:9000";

const App = () => {
  const socket = socketIOClient(endPoint);
  const [name, updateName] = React.useState("");

  return (
    <div>
      {!name && <UserName setUserName={n => updateName(n)} />}
      {name && (
        <div>
          <MessageBox socket={socket}/>
          <ChatBox socket={socket} name={name}/>
        </div>
      )}
    </div>
  );
};

export default App;
