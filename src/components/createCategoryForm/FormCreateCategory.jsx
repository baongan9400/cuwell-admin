import "./widgetSm.css";
import { TextField, Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";

const FormCreateCategory = (props) => {
  const { fetchCreateCategory, isLoadingCreate } = props;
  const [error, setError] = useState(false);

  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    if (data !== undefined && data.name !== undefined && data.name !== "") {
      setError(false);
      fetchCreateCategory(data);
    } else {
      setError(true);
    }
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
                helperText={error === true ? "Required!" : ""}
                error={error}
              />
            </Box>
          )}
        />
        {isLoadingCreate ? (
          <LoadingButton
            sx={{ m: 3, pl: 3, pr:3}}
            loading
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="outlined"
          >
            SAVE
          </LoadingButton>
        ) : (
          <Button
            sx={{ m: 3 }}
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            endIcon={<AddIcon />}
          >
            Create
          </Button>
        )}
      </form>
    </div>
  );
};
export default FormCreateCategory;
