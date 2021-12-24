import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { useEffect, useState } from "react";
import statisticApi from "api/statisticApi";

export default function FeaturedInfo() {
  const [userStatistic, setUserStatistic] = useState({});
  const [salesStatistic, setSalesStatistic] = useState({});
  const [productStatistic, setProductStatistic] = useState({});

  useEffect(() => {
    fetchUserStatistic();
    fetchSalesStatistic();
    fetchProductStatistic();
  }, []);

  const fetchUserStatistic = async () => {
    try {
      const res = await statisticApi.getUserStatistic();
      if (res) {
        console.log(res);
        setUserStatistic(res);
      }
    } catch (error) {
      console.log("Failed to fetch user statistic with error: ", error);
    }
  };

  const fetchSalesStatistic = async () => {
    try {
      const res = await statisticApi.getSalesStatistic();
      if (res) {
        console.log(res);
        setSalesStatistic(res);
      }
    } catch (error) {
      console.log("Failed to fetch sales statistic with error: ", error);
    }
  };

  const fetchProductStatistic = async () => {
    try {
      const res = await statisticApi.getProductStatistic();
      if (res) {
        console.log(res);
        setProductStatistic(res);
      }
    } catch (error) {
      console.log("Failed to fetch product statistic with error: ", error);
    }
  };

  return (
    <div className="featured">
      <div className="featuredItem featuredItem-1">
        <span className="featuredTitle">Products</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2,415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem featuredItem-2">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem featuredItem-3">
        <span className="featuredTitle">Registration</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
