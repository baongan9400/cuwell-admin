import "./categories.css";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import BarChartCustom from "../../components/barchart/BarChart";
import FormCreateCategory from "../../components/createCategoryForm/FormCreateCategory";
import MainLayout from "../../Layouts/MainLayout";

export default function Categories() {
  return (
    <MainLayout>
       <div className="categories">
      <div className="homeWidgets">
        <FormCreateCategory />
        <WidgetLg />
      </div>
      <BarChartCustom />
    </div>
    </MainLayout>
  );
}
