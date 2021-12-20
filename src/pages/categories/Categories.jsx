import "./categories.css";
import BarChartCustom from "../../components/barchart/BarChart";
import FormCreateCategory from "../../components/createCategoryForm/FormCreateCategory";
import MainLayout from "../../Layouts/MainLayout";
import CategroyList from "components/categoryList/CategroyList";
import categoryApi from "api/category/categoryApi";
import React, { useEffect, useState } from "react";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [chart, setChart] = useState([]);

  const [isLoading, SetLoading] = useState(false);
  const [isLoadingChart, setLoadingChart] = useState(false);
  const [isLoadingCreate, setLoadingCreate] = useState(false);

  const fetchCategories = async () => {
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
  const fetchStatisticCategories = async () => {
    try {
      setLoadingChart(true);
      const res = await categoryApi.statisticCategory();
      if (res) {
        setLoadingChart(false);
        setChart(res);
      }
    } catch (error) {
      console.log("failed to fetch chart", error);
    }
  };
  const fetchCreateCategory = async (params) => {
    try {
      setLoadingCreate(true);
      const res = await categoryApi.createCategory(params);
      if (res) {
        setLoadingCreate(false);
      }
    } catch (error) {
      console.log("failed to create categories", error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchStatisticCategories();
  }, [isLoadingCreate]);

  return (
    <MainLayout>
      <div className="categories">
        <div className="homeWidgets">
          <FormCreateCategory fetchCreateCategory={fetchCreateCategory} isLoadingCreate={isLoadingCreate} />
          <CategroyList categories={categories} isLoading={isLoading} />
        </div>
        <BarChartCustom data={chart} isLoadingChart={isLoadingChart} />
      </div>
    </MainLayout>
  );
}
