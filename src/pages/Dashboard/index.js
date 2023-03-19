import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import TableSensor from "../../components/Table";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../actions/productAction";
import "./index.css";

const socket = io("http://localhost:3000");
function Dashboard() {
  const sensors = useSelector((state) => state.productReducer.products);
  console.log(sensors, "dar databse");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  // const [supplyDataHistory, setSupplyDataHistory] = useState([]);
  socket.emit("supply-data", () => {
    console.log("data sent");
  });

  socket.on("supply-data", () => {
    dispatch(fetchProducts()).then(() => {
      setLoading(false);
    });
  });

  useEffect(() => {

    dispatch(fetchProducts())
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [socket]);

  return (
    <div className="container">
      {!loading ? <TableSensor data={sensors} /> : <h1>LOADING</h1>}
    </div>
  );
}

export default Dashboard;
