import Skeleton from "@mui/material/Skeleton";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const LoadingSkeleton = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ margin: 2, mr: 3 }}>
        <Skeleton variant="circular">
          <Avatar />
        </Skeleton>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Skeleton width="100%">
          <Typography>.</Typography>
        </Skeleton>
      </Box>
    </Box>
  );
};
