import React from "react";
import Typography from "@material-ui/core/Typography";

const MessageBox = ({ socket, }) => {
  const [messages, updateMessages] = React.useState([]);
  console.log(socket)

  React.useEffect(() => {
    socket.on("chat_message", msg => updateMessages([...messages, msg]));
  }, [socket, messages]);


  return (
    <div>
      Messages
      {messages.map(m => (
        <Typography key={`${m.name}-${m.chat}`}>
          {m.name}: {m.chat}
        </Typography>
      ))}
    </div>
  );
};

export default MessageBox;
