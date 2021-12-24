import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import MainLayout from "../../Layouts/MainLayout";
import Report from "pages/report";

export default function Home() {
  return (
    <MainLayout>
      <div className="home">
        <FeaturedInfo />
        <div style={{ display: "flex" }} className="">
          <div style={{ flex: 2 }} className="">
            <Chart
              data={userData}
              title="User Analytics"
              grid
              dataKey="Active User"
            />
          </div>
          <Report />
        </div>

        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
    </MainLayout>
  );
}
