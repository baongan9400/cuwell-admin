import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MainLayout from "../../Layouts/MainLayout";
import userApi from "../../api/user";
import Rating from '@mui/material/Rating';

export default function UserList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchListUser();
  }, []);

  const fetchListUser = async () => {
    try {
      const response = await userApi.getAllUsers();
      if (response) {
        response.payload.map((item) => {
          item['id'] = item.userId
          item['city'] = item.address.city
          return item;
       })
        setData(response.payload);
      }
    } catch (error) {
      console.log("failed to fetch list user: ", error);

      // if failed to fetch, use dummy data
      setData(userRows);
    }
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width:230 },
    {
      field: "name",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={"https://i.pravatar.cc/150?u=" + params.row.id} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 260 },
    {
      field: "ratingAverage",
      headerName: "Rating",
      width: 200,
      renderCell: (params) => {
        return (
          <Rating name="read-only" value={params.row.ratingAverage} readOnly />
        );
      },
    },
    {
      field: "city",
      headerName: "City",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <MainLayout>
      <div className="userList">
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      </div>
    </MainLayout>
  );
}
