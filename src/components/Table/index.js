import { useEffect, useState } from "react";
import { Table, Button, Form, Typography, Popconfirm } from "antd";
import EditableCell from "../TableCell";
// import { useDispatch } from 'react-redux';
import {
  deleteProduct,
  fetchProducts,
  updateProduct,
} from "../../actions/productAction";
import "./index.css";

const TableSensor = ({ sensors, dispatch }) => {
  const [form] = Form.useForm();
  const [data, setData] = useState(sensors);
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => +record.id === editingKey;
  const edit = (record) => {
    form.setFieldsValue({
      temperature: "",
      pressure: "",
      humidity: "",
      ...record,
    });
    setEditingKey(record.id);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (record) => {
    try {
      dispatch(
        updateProduct(record.id, {
          ...record,
        })
      )
        .then((data) => {
          dispatch(fetchProducts());
          console.log(data);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

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
      editable: true,
    },
    {
      title: "Pressure",
      dataIndex: "pressure",
      key: "pressure",
      editable: true,
    },
    {
      title: "Humidity",
      dataIndex: "humidity",
      key: "humidity",
      editable: true,
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
      render: (id, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => {
                save(record);
              }}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <div className="action-container">
            <Button className="btn-action-view">
              <Typography.Link
                disabled={editingKey !== ""}
                onClick={() => {
                  edit(record);
                }}
                className="btn-action-view"
              >
                Edit
              </Typography.Link>
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

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType:
          col.dataIndex === "temperature" ||
          col.dataIndex === "humidity" ||
          col.dataIndex === "pressure"
            ? "number"
            : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  useEffect(() => {
    setData(sensors);
  }, [sensors]);

  return (
    <Form form={form} component={false}>
      <Table
        className="form-table"
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        rowKey={(record) => record.id}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
          position: ["bottomCenter"],
        }}
      />
    </Form>
  );
};

export default TableSensor;
