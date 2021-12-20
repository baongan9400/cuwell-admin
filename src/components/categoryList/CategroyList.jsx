import "./categoryItem.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function LoadingFrame() {
  return (
    <div className="post">
      <div className="left-col">
        <div className="avatar">
          <Skeleton circle height="100%" containerClassName="avatar-skeleton" />
        </div>
      </div>
      <div className="right-col">
        <p style={{ marginTop: 10 }}>
          <Skeleton count={1} />
        </p>
      </div>
    </div>
  );
}
export default function CategroyList(props) {
  const { categories, isLoading } = props;
  const Button = ({ type }) => {
    return <button className={"categoryItemButton " + type}>{type}</button>;
  };
  return (
    <div className="categoryItem">
      <h3 className="categoryItemTitle">All Categories</h3>
      <table className="categoryItemTable">
        <tr className="categoryItemTr">
          <th className="categoryItemTh">Name</th>
          <th className="categoryItemTh">Date</th>
          <th className="categoryItemTh">Status</th>
        </tr>
        {isLoading && (
          <>
            <LoadingFrame />
            <LoadingFrame />
            <LoadingFrame />
          </>
        )}
        {categories?.map((item) => (
          <tr className="categoryItemTr">
            <td className="categoryItemUser">
              <img
                src={require(`images/0.svg`).default}
                alt=""
                className="categoryItemImg"
              />
              <span
                className="categoryItemName"
                style={{ textTransform: "capitalize" }}
              >
                {item?.name}
              </span>
            </td>
            <td className="categoryItemDate">2 Jun 2021</td>
            <td className="categoryItemStatus">
              <Button type="Approved" />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
