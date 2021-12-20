import Skeleton from "@mui/material/Skeleton";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const SkeletonRow = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ margin: 2, ml: 5 }}>
        <Skeleton variant="circular">
          <Avatar />
        </Skeleton>
      </Box>
      <Box sx={{ width: "20%", m: 3, pl: 3 }}>
        <Skeleton width="100%">
          <Typography>.</Typography>
        </Skeleton>
      </Box>
      <Box sx={{ width: "20%", m: 3, pl: 3 }}>
        <Skeleton width="100%">
          <Typography>.</Typography>
        </Skeleton>
      </Box>
      <Box sx={{ width: "20%", m: 3, pl: 3 }}>
        <Skeleton width="100%">
          <Typography>.</Typography>
        </Skeleton>
      </Box>
      <Box sx={{ width: "20%", m: 3, pl: 3 }}>
        <Skeleton width="100%">
          <Typography>.</Typography>
        </Skeleton>
      </Box>
    </Box>
  );
};
