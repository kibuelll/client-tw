import {Table,Row,Col} from 'antd'
import "./index.css"

const TableSensor = ({data}) => {

  const columns = [
    {
      title : "Temperature",
      dataIndex : "temperature",
      key: 'temperature'
    },
    {
      title : "Pressure",
      dataIndex : "pressure",
      key: 'pressure'
    },
    {
      title : "Humidity",
      dataIndex : "humidity",
      key: 'humidity'
    },
    {
      title : "Time",
      dataIndex : "updatedAt",
      key: 'updtedAt',
      render : (updatedAt) => {
        const current = new Date(updatedAt).toISOString().split('T')[1]
        return (
          <span>{`${current.split(":")[0]}:${current.split(":")[1]}`}</span>
        )
      }
    }
  ]


  return (
    <Table 
    dataSource={data} 
    columns={columns} 
    rowKey={record => record.id} 
    className="my-table" 
    pagination={{position:['bottomCenter']}}/>
  )
}

export default TableSensor
