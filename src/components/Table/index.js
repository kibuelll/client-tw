import { Table, Row, Col, Button } from "antd";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct, fetchProducts } from "../../actions/productAction";
import "./index.css";

const TableSensor = ({ data }) => {
  const dispatch = useDispatch();

  const editable = (e) => {
    console.log(e)
    e.innerHTML = <input placeholder="edit"/>
  } 

  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
      .then((data) => {
        console.log(data);
        dispatch(fetchProducts());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const columns = [
    {
      title: "Temperature",
      dataIndex: "temperature",
      key: "temperature",
      editable :true,
      render : (temperature) => {
        return <span onFocus={editable}>{temperature}</span>;
      }
    },
    {
      title: "Pressure",
      dataIndex: "pressure",
      key: "pressure",
    },
    {
      title: "Humidity",
      dataIndex: "humidity",
      key: "humidity",
    },
    {
      title: "Time",
      dataIndex: "updatedAt",
      key: "updtedAt",
      render: (updatedAt) => {
        const current = new Date(updatedAt).toISOString().split("T")[1];
        return (
          <span>{`${current.split(":")[0]}:${current.split(":")[1]}`}</span>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id) => {
        return (
          <div className="action-container">
            <Button className="btn-action-view">
              <Link to={`/sensor/${id}`} className="btn-action-view">
                View
              </Link>
            </Button>
            <Button
              onClick={() => {
                handleDelete(id);
              }}
              className="btn-action-delete"
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <Table
      dataSource={data}
      columns={columns}
      rowKey={(record) => record.id}
      rowClassName="row-table"
      className="my-table"
      pagination={{ position: ["bottomCenter"] }}
    />
  );
};

export default TableSensor;
