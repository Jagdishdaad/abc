import React from "react";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#121417",
    width: "30vw",
    height: "18vw",
  },
}));

function DeleteProduct({ showDelete, setShowDelete }) {
  const classes = useStyles();
  const handleClose = () => {
    setShowDelete(false);
  };

  return (
    <div>
      <Dialog
        open={showDelete}
        onclose={handleClose}
        classes={{ paper: classes.paper }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          style={{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "16 px",
            lineHeight: "22 px",
            letterSpacing: "0.04vw",
            color: "#FFFFFF",
            width: "20vw",
            marginLeft: "17%",
          }}
        >
          {"Are you sure you want to delete this Product?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            style={{
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "16 px",
              lineHeight: "22 px",
              letterSpacing: "0.04vw",
              color: "#FFFFFF",
              marginLeft: "25%",
              display: "flex",
              alignSelf: "center",
            }}
          >
            Product: Cement
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            style={{
              background: "#FFB600",
              borderRadius: "4px",
              textTransform: "unset",
            }}
            onClick={handleClose}
          >
            Delete
          </Button>
          <Button
            style={{
              color: "#FFB600",
              border: "1px solid #FFB600",
              textTransform: "unset",
            }}
            autoFocus
            onClick={handleClose}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteProduct;
