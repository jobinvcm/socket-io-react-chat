import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: "10px",
    width: "100%"
  },
  chatBoxButton: {
    height: "100%"
  }
});

const ChatBox = ({ socket, name }) => {
  const classes = useStyles();
  const [chat, updateChat] = React.useState("");
  const [userMessage, updateUserMessage] = React.useState("");

  React.useEffect(() => {
    socket.on("user_typing", msg =>  name === msg ? updateUserMessage('') : updateUserMessage(msg))
  }, [socket, name]);

  const formSubmit = e => {
    e.preventDefault();
    socket.emit("chat_message", { name: name, chat: chat });
    updateChat("");
  };

  const userTyping = () => {
    socket.emit("user_typing", name);
  };

  const userStopTyping = () => {
    socket.emit("user_stop_typing", name);
  };

  return (
    <div className={classes.root}>
      <form onSubmit={formSubmit}>
        <Grid container>
          <Grid item xs={12} sm={9}>
            <TextField
              fullWidth
              onChange={e => updateChat(e.target.value)}
              value={chat}
              variant='outlined'
              label='Type your message...'
              onFocus={userTyping}
              onBlur={userStopTyping}
              helperText={userMessage && `${userMessage} typing...`}
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <Button
              fullWidth
              onClick={formSubmit}
              variant='contained'
              className={classes.chatBoxButton}
            >
              SEND
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default ChatBox;
