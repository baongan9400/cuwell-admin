import "./403.css";
import Button from "@mui/material/Button";

const NotFound = () => (
  <div className="forbidden">
    <div className="lock"></div>
    <div className="message">
      <h1>Access to this page is restricted</h1>
      <p>Please check with the site admin if you believe this is a mistake.</p>
      <Button variant="contained" href="/login" sx={{ mt: 3 }} color="grey">
        Try to login again
      </Button>
    </div>
  </div>
);

export default NotFound;
