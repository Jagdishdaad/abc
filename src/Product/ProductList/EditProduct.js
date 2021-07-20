import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core";
import { Input } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Typography } from "@material-ui/core";
import { Close, TextFields } from "@material-ui/icons";
import { display } from "@material-ui/system";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MainCategory from "./MainCategory";
import SubCategory from "./SubCategory";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#121417",
  },

  root: {
    borderRadius: "0.3vw",
    color: "green",
    padding: "4.5%",
    backgroundColor: "#2D2D2D",
    borderColor: "#121417",

    width: "25vw",
    height: "3vw",
    color: "white",
    marginTop: "2%",
  },

  input: {
    "&::placeholder": {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "1vw",
      lineHeight: "1.2vw",
      color: "#FFFFFF",
      opacity: 1,
    },
  },
}));

function EditProduct({ showEdit, setShowEdit }) {
  const classes = useStyles();
  const handleClose = () => {
    setShowEdit(false);
  };
  const [main, setMain] = React.useState({
    id: 1,
    name: "Construction Material",
  });

  const handleChangeMain = (event) => {
    const name = event.target.name;
    setMain({
      ...main,
      [name]: event.target.value,
    });
  };
  const [sub, setSub] = React.useState({
    id: 1,
    name: "Construction Material",
  });

  const handleChangeSub = (event) => {
    const name = event.target.name;
    setSub({
      ...sub,
      [name]: event.target.value,
    });
  };
  return (
    <div>
      <Dialog
        fullWidth="true"
        maxWidth="md"
        open={showEdit}
        onclose={handleClose}
        classes={{ paper: classes.paper }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <div
            style={{
              display: "flex",
              height: "50vh",
              paddingBottom: "25vh",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                style={{
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "1.8vw",
                  lineHeight: "2.2vw ",
                  letterSpacing: "0.04vw",
                  color: "#FFFFFF",
                }}
              >
                Product Details
              </Typography>
              <Close
                onClick={handleClose}
                style={{
                  cursor: "pointer",
                  color: "#FFFFFF",
                  width: "2.5vw",
                  height: "2.5vw",
                }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <MainCategory />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <SubCategory />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Open Sans",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "1.2vw",
                    lineHeight: "1.8vw ",
                    letterSpacing: "0.04vw",
                    color: "#FFB600",
                    cursor: "pointer",
                  }}
                >
                  Add New Brand +
                </Typography>

                <Input
                  placeholder="Enter Brand Name"
                  variant="text"
                  classes={{
                    root: classes.root,
                    input: classes.input,
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Open Sans",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "1.2vw",
                    lineHeight: "1.8vw ",
                    letterSpacing: "0.04vw",
                    color: "#FFB600",
                    cursor: "pointer",
                  }}
                >
                  Add New Grade +
                </Typography>
                <Input
                  placeholder="Enter New Grade"
                  variant="text"
                  classes={{
                    root: classes.root,
                    input: classes.input,
                  }}
                />
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            onClick={handleClose}
            style={{
              background: "#FFB600",
              borderRadius: "4px",
              textTransform: "unset",
            }}
          >
            Save
          </Button>
          <Button
            color="primary"
            autoFocus
            onClick={handleClose}
            style={{
              color: "#FFB600",
              border: "1px solid #FFB600",
              textTransform: "unset",
            }}
          >
            Delete Product
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditProduct;
