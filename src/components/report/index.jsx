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
// import adminApi from "../../../api/management/adminApi";

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

  const listReport = reports.map((report) => (
    <li key={report.id} onClick={() => onClickOpenButton(report)}>
      <ListItem alignItems="flex-start" className="report-item">
        <ListItemAvatar>
          <Avatar
            alt={report.user && report.user.name}
            src={
              report.user && report.user.avatar
                ? report.user.avatar
                : "https://i.pravatar.cc/150?u=" + report.user.email
            }
          />
        </ListItemAvatar>
        <ListItemText
          primary={report.type}
          secondary={
            <React.Fragment>
              <span className="report-description">
                <Typography
                  component="span"
                  variant="body2"
                  className={`${classes.inline}`}
                  color="textPrimary"
                >
                  {report.user && report.user.name}
                </Typography>

                {` — ${report.description}`}
              </span>
            </React.Fragment>
          }
        />
      </ListItem>
    </li>
  ));
  return <ul>{listReport}</ul>;
}

function Report(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  // const [reports, setReports] = useState([]);
  const [report, setReport] = useState({});
  const [loading, setLoading] = useState(false);
  const reports = [
    {
      id: 13,
      type: "INFORMATION_NOT_CORRECT",
      description: "Xấu",
      user: {
        id: 22,
        name: "Huyền Đặng",
        email: "dangbaongan9400@gmail.com",
        phone: "0708152286",
        address: {
          createdAt: "2021-07-06T10:59:05.863+00:00",
          updatedAt: "2021-07-27T03:12:35.204+00:00",
          id: 28,
          commune: "Xã Vạn Hòa",
          district: "Thành phố Lào Cai",
          city: "Lào Cai",
        },
        auth: 1,
        roles: ["ROLE_USER"],
        avatar: null,
        deletedAt: null,
      },
      post: {
        id: 448,
        title:
          "Áo Ngực Nữ Thun Gân Cotton Khoét Lưng Sâu Không Gọng Không Móc Cài Gợi - Áo Bra Kiểu Pháp Gợi Cảm Quyến Rũ - Cúp ngực Mỏng Nhẹ Nâng Phom",
        description:
          "Tạm biệt những chiếc áo nặng nề mút lót dày nóng bí, cùng chào hè với siêu phẩm Áo ngực nữ Cotton thun gân kiểu Pháp khoét lưng sâu đẹp gợi cảm quyến rũ nào các nàng !      THÔNG TIN SẢN PHẨM   -...",
        category: "Thời trang - Phụ kiện",
        price: 30900,
        size: "small",
        image:
          "https://salt.tikicdn.com/cache/280x280/ts/product/f0/09/ff/850c7506d032c82fa006b1ac01c80b8f.jpg",
        user_id: 4,
        createdAt: "2021-06-13T00:00:00.000+00:00",
        updatedAt: "2021-12-09T16:17:55.726+00:00",
        user: {
          id: 4,
          name: "user3",
          email: "user3@gmail.com",
          phone: "123456789",
          address: {
            createdAt: "2021-06-28T13:07:55.574+00:00",
            updatedAt: "2021-07-12T09:58:44.192+00:00",
            id: 1,
            commune: "Phường An Khê",
            district: "Quận Thanh Khê",
            city: "Hậu Giang",
          },
          auth: 1,
          roles: ["ROLE_USER"],
          avatar: null,
          deletedAt: null,
        },
        status: true,
        buyer: null,
      },
    },
    {
      id: 9,
      type: "FAKE_POST",
      description: "san pham gia",
      user: {
        id: 81,
        name: "Tran Van Si",
        email: "sitvdut@gmail.com",
        phone: "0796236387",
        address: {
          createdAt: "2021-07-16T04:34:06.091+00:00",
          updatedAt: "2021-07-16T04:34:06.091+00:00",
          id: 40,
          commune: "Phường Hòa Khánh Bắc",
          district: "Quận Liên Chiểu",
          city: "Đà Nẵng",
        },
        auth: 1,
        roles: ["ROLE_USER"],
        avatar: null,
        deletedAt: "2021-07-18T10:51:14.332+00:00",
      },
      post: {
        id: 462,
        title: "QUẦN NGỐ NỮ -VẢI THUN COTTON ",
        description:
          "  QUẦN NGỐ nữ Chiều dài 70cm ống vừa Lưng thun( Chun ) có độ đàn hồi tốt Chất vải Thuncotton có độ co zãn Màu sắc có 6 màu: Xanh, Hồng, Đen, Nâu, Trắng, Vàng Có các Sizie cho người 38 đến 80kg mặc...",
        category: "Thời trang - Phụ kiện",
        price: 45000,
        size: "small",
        image:
          "https://salt.tikicdn.com/cache/280x280/ts/product/94/60/70/b0a336d266d1e68327b7d9b0e597c3fd.jpg",
        user_id: 18,
        createdAt: "2021-06-13T00:00:00.000+00:00",
        updatedAt: "2021-07-18T10:57:38.158+00:00",
        user: {
          id: 18,
          name: "user17",
          email: "user17@gmail.com",
          phone: "123456789",
          address: {
            createdAt: "2021-06-28T13:07:55.574+00:00",
            updatedAt: "2021-07-12T09:58:44.192+00:00",
            id: 1,
            commune: "Phường An Khê",
            district: "Quận Thanh Khê",
            city: "Hậu Giang",
          },
          auth: 1,
          roles: ["ROLE_USER"],
          avatar: null,
          deletedAt: null,
        },
        status: true,
        buyer: null,
      },
    },
    {
      id: 7,
      type: "FAKE_POST",
      description: "rác",
      user: {
        id: 22,
        name: "Huyền Đặng",
        email: "dangbaongan9400@gmail.com",
        phone: "0708152286",
        address: {
          createdAt: "2021-07-06T10:59:05.863+00:00",
          updatedAt: "2021-07-27T03:12:35.204+00:00",
          id: 28,
          commune: "Xã Vạn Hòa",
          district: "Thành phố Lào Cai",
          city: "Lào Cai",
        },
        auth: 1,
        roles: ["ROLE_USER"],
        avatar: null,
        deletedAt: null,
      },
      post: {
        id: 495,
        title:
          "Gen nịt bụng định hình 6 nấc cài - 4 thanh chống cuộn - chiều cao gen 25cm - gen nịt bụng tạo vòng eo thon gọn - đai nịch bụng chống cuộn giảm mỡ sau sinh-Lê Ngọc Fashion",
        description:
          "Gen nịt bụng định hình 6 nấc cài - 4 thanh chống cuộn - chiều cao gen 25cm - gen nịt bụng tạo vòng eo thon gọn - đai nịch bụng chống cuộn giảm mỡ sau sinh-Lê Ngọc Fashion Size dựa trên kích thước...",
        category: "Thời trang - Phụ kiện",
        price: 69000,
        size: "small",
        image:
          "https://salt.tikicdn.com/cache/280x280/ts/product/e2/15/92/495411258b0b8fc5747e680ec1471b39.jpg",
        user_id: 17,
        createdAt: "2021-06-13T00:00:00.000+00:00",
        updatedAt: "2021-06-13T00:00:00.000+00:00",
        user: {
          id: 17,
          name: "user16",
          email: "user16@gmail.com",
          phone: "123456789",
          address: {
            createdAt: "2021-06-28T13:07:55.574+00:00",
            updatedAt: "2021-07-12T09:58:44.192+00:00",
            id: 1,
            commune: "Phường An Khê",
            district: "Quận Thanh Khê",
            city: "Hậu Giang",
          },
          auth: 1,
          roles: ["ROLE_USER"],
          avatar: null,
          deletedAt: null,
        },
        status: false,
        buyer: null,
      },
    },
  ];
  // setReports(response);
  useEffect(() => {
    // const fetchLastetReports = async () => {
    //   try {
    //     const response = await adminApi.getLastestReports({_limit: 3});
    //     console.log(response);
    //     setReports(response);
    //     setLoading(true)
    //   } catch (error) {
    //     console.log("Failed to fetch lastest posts", error);
    //   }
    // };
    // fetchLastetReports();
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
