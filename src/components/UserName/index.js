import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    padding: "48px",
    minWidth: '300px'
  },
  textField: {
    marginBottom: "16px",
  }
});

const UserName = ({ setUserName }) => {
  const classes = useStyles();

  const [name, updateName] = React.useState("");

  return (
    <Paper className={classes.root} elevation={4}>
      <form onSubmit={() => setUserName(name)}>
        <Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant='outlined'
              label='userName'
              onChange={e => updateName(e.target.value)}
              label="User Name"
              onFocus={console.log("onfocus")}
              onBlur={console.log("onblur")}
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={() => setUserName(name)}
              fullWidth
              color='primary'
              type='submit'
              variant="contained"
            >
              START CHAT
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default UserName;
