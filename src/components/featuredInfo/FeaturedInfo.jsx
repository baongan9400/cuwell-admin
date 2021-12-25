import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { useEffect, useState } from "react";
import statisticApi from "api/statisticApi";

export default function FeaturedInfo() {
  const [salesStatistic, setSalesStatistic] = useState({
    current: 0,
    previous: 0,
  });
  const [productStatistic, setProductStatistic] = useState({
    current: 0,
    previous: 0,
  });

  useEffect(() => {
    fetchSalesStatistic();
    fetchProductStatistic();
  }, []);

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
          <span className="featuredMoney">{productStatistic.current}</span>
          <span className="featuredMoneyRate">
            {productStatistic.current - productStatistic.previous}
            {productStatistic.current - productStatistic.previous > 0 ? (
              <ArrowUpward className="featuredIcon" />
            ) : (
              <ArrowDownward className="featuredIcon negative" />
            )}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem featuredItem-2">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${salesStatistic.current}</span>
          <span className="featuredMoneyRate">
            {salesStatistic.current - salesStatistic.previous}
            {salesStatistic.current - salesStatistic.previous > 0 ? (
              <ArrowUpward className="featuredIcon" />
            ) : (
              <ArrowDownward className="featuredIcon negative" />
            )}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem featuredItem-3">
        <span className="featuredTitle">Registration</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">6</span>
          <span className="featuredMoneyRate">
            +2 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
