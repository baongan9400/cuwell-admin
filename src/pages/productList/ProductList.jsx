import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MainLayout from "../../Layouts/MainLayout";
import postApi from "api/post"
export default function ProductList() {
  const pageSize = 8;
  const [data, setData] = useState([]);
  const params = {
    search: "",
    category: "",
    page: 1,
    page_size: pageSize,
  };
  useEffect(() => {
    fetchListPost(params);
  }, []);

  const fetchListPost = async (params) => {
    try {
      const response = await postApi.getSearchPostData(params);
      if (response) {
        setData(response.results);
      }
    } catch (error) {
      console.log("failed to fetch list user: ", error);
      setData(productRows);
    }
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <MainLayout>
      <div className="productList">
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={pageSize}
          checkboxSelection
        />
      </div>
    </MainLayout>
  );
}
