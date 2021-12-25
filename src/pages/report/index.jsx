import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import "./Report.css";
import DialogReport from "./DialogReport";
import reportApi from "api/report";

const useStyles = makeStyles((theme) => ({
  inlineReport: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

function ReportList(props) {
  const { reports, classes, onClickOpen, getReport } = props;

  const onClickOpenButton = (report) => {
    onClickOpen(true);
    getReport(report);
  };

  const listReport = reports?.map((report) => (
    <li key={report.id} onClick={() => onClickOpenButton(report)}>
      <ListItem alignItems="flex-start" className="report-item">
        <ListItemAvatar>
          <Avatar
            alt={report.user}
            src={"https://i.pravatar.cc/150?u=" + report?.user}
          />
        </ListItemAvatar>
        <ListItemText
          primary={report?.type}
          secondary={
            <React.Fragment>
              <span className="report-description">
                <Typography
                  component="span"
                  variant="body2"
                  className={`${classes.inline}`}
                  color="textPrimary"
                >
                  {report.user}
                </Typography>

                {` — ${report.description}`}
              </span>
            </React.Fragment>
          }
        />
      </ListItem>
    </li>
  ));
  return (
    <ul style={{ listStyleType: "none", overflowY: "scroll", height: "280px" }}>
      {listReport}
    </ul>
  );
}

function Report(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [reports, setReports] = useState([]);
  const [report, setReport] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchLastetReports = async () => {
      try {
        setLoading(true);
        const response = await reportApi.getAllReportData();
        if (response) {
          setLoading(false);

          setReports(response);
        }
      } catch (error) {
        console.log("Failed to fetch lastest report: ", error);
      }
    };
    fetchLastetReports();
  }, []);

  const onClickOpen = () => {
    console.log("click");
    setOpen(true);
  };
  const onClickClose = () => {
    setOpen(false);
  };

  const getReport = (report) => {
    setReport(report);
    console.log("got report: ", report);
  };

  return (
    <div className="reportList">
      <List className={classes.inlineReport}>
        <h4 className="report-title">Report violations: </h4>
        <ReportList
          reports={reports}
          report={report}
          classes={classes}
          onClickOpen={onClickOpen}
          getReport={getReport}
          onClickClose={onClickClose}
        />

        <DialogReport open={open} report={report} onClickClose={onClickClose} />
      </List>
    </div>
  );
}

export default Report;
