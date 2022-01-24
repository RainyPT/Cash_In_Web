import { ListGroup, Badge } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getExpensesByDate } from "../ReqLib";
import { convertDate } from "../Utils";
const RecentActivityComponent = () => {
  const [expenseArray, setExpenseArray] = useState([]);

  useEffect(() => {
    let twodaysago = new Date();
    twodaysago.setDate(twodaysago.getDate() - 1);
    let tomorow = new Date();
    tomorow.setDate(twodaysago.getDate() + 2);
    async function getRecentExpenses() {
      await getExpensesByDate(
        convertDate(twodaysago),
        convertDate(tomorow)
      ).then((res) => setExpenseArray(res.data));
    }
    getRecentExpenses();
  }, []);

  return (
    <div className="containerGraphs" style={{ height: "100%" }}>
      <center>
        <p className="miniTitles">Recent Activity</p>
      </center>

      <ListGroup
        as="ol"
        numbered
        style={{
          marginTop: "2vh",
          cursor: "pointer",
          maxHeight: "500px",
          WebkitOverflowScrolling: "touch",
          overflowX: "hidden",
        }}
      >
        {expenseArray.length > 0 ? (
          expenseArray.map((c, id) => (
            <ListGroup.Item
              className="d-flex justify-content-between align-items-start"
              key={id}
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{c.name}</div>
              </div>
              <Badge variant="primary" pill>
                {c.value}
              </Badge>
            </ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item
            className="d-flex justify-content-between align-items-start"
            disabled
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">No Expenses</div>
            </div>
            <Badge bg="warning" pill>
              no value
            </Badge>
          </ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
};

export default RecentActivityComponent;
