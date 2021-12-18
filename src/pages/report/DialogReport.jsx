import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import "./DialogReport.css";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function DialogSubmit(props) {
  const { open, onClickClose, report } = props;
  const classAvatar = useStyles();

  const handleClose = () => {
    onClickClose();
  };
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        style={{ overflow: "hidden", height: "400px", marginTop: "100px" }}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <div style={{ textTransform: "capitalize" }}>Type: {report.type}</div>
        </DialogTitle>
        <DialogContent dividers>
          <Typography
            gutterBottom
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <Avatar
              alt={report.user && report.user.name}
              src={report.user && report.user.avatar}
            />
            <h5 style={{ marginLeft: "20px" }}>
              {report.user && report.user.name}
            </h5>
          </Typography>
          <Typography gutterBottom>
            <h6 style={{ marginBottom: "10px" }}>Description: </h6>
            {report.description}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button color="secondary">
            <Link
              to={report.post && `./management/product/${report.post.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Go to post
            </Link>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogSubmit;
