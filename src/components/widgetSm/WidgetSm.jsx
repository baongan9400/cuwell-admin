import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
import { useState, useEffect } from "react";
import userApi from "../../api/user";
import { LoadingSkeleton } from "components/loading/SkeletonAvatarText";

export default function WidgetSm() {
  const [isLoading, setLoading] = useState(false);

  const [data, setData] = useState([]);
  useEffect(() => {
    fetchListUser();
  }, []);

  const fetchListUser = async () => {
    try {
      setLoading(true);
      const response = await userApi.getAllUsers();
      if (response) {
        response.payload.map((item) => {
          item["id"] = item.userId;
          item["city"] = item.address.city;
          return item;
        });
        setLoading(false);
        setData(response.payload.slice(0, 6));
      }
    } catch (error) {
      console.log("failed to fetch list user: ", error);
    }
  };

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      {isLoading ? (
        <ul className="widgetSmList">
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
        </ul>
      ) : (
        <ul className="widgetSmList">
          {data.map((item) => (
            <li className="widgetSmListItem">
              <img
                src={"https://i.pravatar.cc/150?u=" + item.userId}
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{item.name}</span>
                <span className="widgetSmUserTitle">City:{item.city}</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
