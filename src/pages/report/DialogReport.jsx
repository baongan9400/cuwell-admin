import React, { useState } from "react";
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
import BlockIcon from "@mui/icons-material/Block";
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import postApi from "api/post";
import { pushToast } from "components/Toast";

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
  console.log(report);
  const classAvatar = useStyles();
  const [isLoadingCreate, setLoadingCreate] = useState(false);

  const handleClose = () => {
    onClickClose();
  };
  const fetchCreateCategory = async (params) => {
    try {
      setLoadingCreate(true);
      const res = await postApi.blockPost(params);
      if (res) {
        setLoadingCreate(false);
        pushToast("success", "Block this post successfully.");
      }
    } catch (error) {
      pushToast("error", "Block this post failed.Try again !");
    }
  };
  const onSubmit = () => {
    fetchCreateCategory(report.post);
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
          <div style={{ textTransform: "capitalize" }}>Report violation</div>
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
              alt={report.user}
              src={"https://i.pravatar.cc/150?u=" + report.user}
            />
            <h5 style={{ marginLeft: "20px" }}>User ID: {report.user}</h5>
          </Typography>
          <Typography gutterBottom>
            <h6 style={{ marginBottom: "10px" }}>Create At: </h6>
            {report.created_at}
          </Typography>
          <Typography gutterBottom>
            <h6 style={{ marginBottom: "10px" }}>Reported Post ID: </h6>
            {report.post}
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
              to={report.post && `./management/product/${report.post}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Go to post
            </Link>
          </Button>
        </DialogActions>
        {isLoadingCreate ? (
          <LoadingButton
            sx={{ m: 3, pl: 3, pr: 3 }}
            loading
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="outlined"
          >
            BLOCK...
          </LoadingButton>
        ) : (
          <Button
            sx={{ m: 3 }}
            onClick={onSubmit}
            variant="contained"
            startIcon={<BlockIcon />}
          >
            BLOCK
          </Button>
        )}
      </Dialog>
    </div>
  );
}

export default DialogSubmit;
