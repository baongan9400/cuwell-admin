import "./categories.css";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import BarChartCustom from "../../components/barchart/BarChart";
import FormCreateCategory from "../../components/createCategoryForm/FormCreateCategory";

export default function Categories() {
  return (
    <div className="categories">
      <div className="homeWidgets">
        <FormCreateCategory />
        <BarChartCustom />
      </div>
    </div>
  );
}
