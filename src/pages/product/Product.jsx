import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@mui/icons-material";
import MainLayout from "../../Layouts/MainLayout";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import postApi from "api/post";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
export default function Product() {
  const { productId } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUserPost();
  }, []);

  const fetchUserPost = async () => {
    try {
      setLoading(true);
      const response = await postApi.getPostById(productId);
      if (response) {
        setLoading(false);
        setData(response);
        console.log(response);
      }
    } catch (error) {
      setLoading(false);
      console.log("failed to fetch user sale with error: ", error);
    }
  };
  return (
    <MainLayout>
      <div className="product">
        <div className="productTitleContainer">
          <h1 className="productTitle">Product</h1>
          <Link to="/newproduct">
            <button className="productAddButton">Create</button>
          </Link>
        </div>
        <div className={loading ? "loading-bg" : "loading-bg-none"}>
          <img
            src="https://cutewallpaper.org/21/loading-gif-transparent-background/Free-Content-Discovery-Influencer-Marketing-Tool-Buzzsumo-.gif"
            alt="Loading..."
          />
        </div>
        {loading ? (
          <></>
        ) : (
          <div className="productTop">
            {/* <div className="productTopLeft">
            <Chart
              data={productData}
              dataKey="Sales"
              title="Sales Performance"
            />
          </div> */}
            <div className="productTopRight">
              <div style={{ display: "flex" }} className="">
                <div style={{ flex: 2 }} className="">
                  <div className="productInfoTop">
                    <img
                      src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      alt=""
                      className="productInfoImg"
                    />
                    <h3 className="productName">{data.title}</h3>
                  </div>
                  <div className="productInfoBottom">
                    <div className="productInfoItem">
                      <h5 className="productInfoKey">id:</h5>
                      <span className="productInfoValue">{productId}</span>
                    </div>
                    <div className="productInfoItem">
                      <h5 className="productInfoKey">quantity:</h5>
                      <span className="productInfoValue">{data.total}</span>
                    </div>
                    <div className="productInfoItem">
                      <h5 className="productInfoKey">sales:</h5>
                      <span className="productInfoValue">{data.sell}</span>
                    </div>
                    <div className="productInfoItem">
                      <h5 className="productInfoKey">blocked:</h5>
                      <span className="productInfoValue">
                        {data?.status === 2 ? "blocked" : "active"}
                      </span>
                    </div>
                    <div className="productInfoItem">
                      <h5 className="productInfoKey">in stock:</h5>
                      <span className="productInfoValue">{data.stock}</span>
                    </div>
                    <div className="productInfoItem">
                      <h5 className="productInfoKey">description:</h5>
                      <span className="productInfoValue description">
                        {data.description}
                      </span>
                    </div>
                  </div>
                </div>
                <ImageList
                  sx={{ width: 500, height: 300 }}
                  cols={3}
                  rowHeight={164}
                >
                  {data?.images?.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                        src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={data.title}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </div>
            </div>
          </div>
        )}
        <div className="productBottom">
          <form className="productForm">
            <div className="productFormLeft">
              <label>Product Name</label>
              <input type="text" placeholder="Apple AirPod" />
              <label>In Stock</label>
              <select name="inStock" id="idStock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <label>Active</label>
              <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="productFormRight">
              <div className="productUpload">
                <img
                  src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="productUploadImg"
                />
                <label for="file">
                  <Publish />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="productButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}
