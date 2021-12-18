import "./widgetSm.css";
import { TextField, Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { Controller, useForm } from "react-hook-form";
const FormCreateCategory = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    console.log(data.name);
  };

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Create New Cateroy</span>
      <form>
        <Controller
          name={"name"}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Box sx={{ m: 3, bgcolor: "background.paper" }}>
              <TextField
                onChange={onChange}
                value={value}
                label={"Name"}
                fullWidth
                variant="filled"
              />
            </Box>
          )}
        />
        <Button
          sx={{ m: 3 }}
          onClick={handleSubmit(onSubmit)}
          variant="contained"
          endIcon={<AddIcon />}
        >
          Create
        </Button>
      </form>
    </div>
  );
};
export default FormCreateCategory;
