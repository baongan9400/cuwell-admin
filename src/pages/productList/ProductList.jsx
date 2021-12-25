import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MainLayout from "../../Layouts/MainLayout";
import postApi from "api/post";
import { SkeletonRow } from "components/loading/SkeletonRow";
import { Box } from "@mui/material";
export default function ProductList() {
  const [isLoading, setLoading] = useState(false);

  const pageSize = 10;
  const [data, setData] = useState([]);
  const params = {
    search: "",
    category: "",
    page: 1,
    page_size: 1000,
  };
  useEffect(() => {
    fetchListPost(params);
  }, []);

  const fetchListPost = async (params) => {
    try {
      setLoading(true);

      const response = await postApi.getSearchPostData(params);
      if (response) {
        response.results.map((item) => {
          item["status"] = item.status ? "Available" : "Block";
          return item;
        });
        setLoading(false);

        setData(response.results);
      }
    } catch (error) {
      setLoading(false);
      console.log("failed to fetch list user: ", error);
      setData(productRows);
    }
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "product",
      headerName: "Product",
      width: 260,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img
              className="productListImg"
              src={params.row.images[0].url}
              alt=""
            />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "total", headerName: "Total", width: 120 },
    { field: "sell", headerName: "Sold", width: 120 },
    { field: "stock", headerName: "Stock", width: 120 },
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
              <button className="productListEdit">View</button>
            </Link>
            {/* <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            /> */}
          </>
        );
      },
    },
  ];

  return (
    <MainLayout>
      <div className="productList">
        {isLoading ? (
          <Box sx={{ width: "80%" }}>
            <SkeletonRow />
            <SkeletonRow />
            <SkeletonRow />
            <SkeletonRow />
            <SkeletonRow />
            <SkeletonRow />
          </Box>
        ) : (
          <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={pageSize}
            checkboxSelection
          />
        )}
      </div>
    </MainLayout>
  );
}
