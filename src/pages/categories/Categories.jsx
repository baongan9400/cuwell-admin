import Chart from "../../components/chart/Chart";
import "./categories.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function Categories() {
  return (
    <div className="categories">
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
    </div>
  );
}
