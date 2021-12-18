import "./categories.css";
import BarChartCustom from "../../components/barchart/BarChart";
import FormCreateCategory from "../../components/createCategoryForm/FormCreateCategory";
import MainLayout from "../../Layouts/MainLayout";
import CategroyList from "components/categoryList/CategroyList";
import categoryApi from "api/category/categoryApi";
import React, { useEffect, useState } from "react";

// import PropTypes from "prop-types";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, SetLoading] = useState(false);

  const fetchCategories = async (params) => {
    try {
      SetLoading(true);
      const res = await categoryApi.getAllCategoriesData();
      if (res) {
        SetLoading(false);
        setCategories(res);
      }
    } catch (error) {
      console.log("failed to fetch categories", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <MainLayout>
      <div className="categories">
        <div className="homeWidgets">
          <FormCreateCategory />
          <CategroyList categories={categories} isLoading={isLoading} />
        </div>
        <BarChartCustom />
      </div>
    </MainLayout>
  );
}
