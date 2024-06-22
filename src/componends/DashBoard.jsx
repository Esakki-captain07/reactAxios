import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import AxiosService from '../utils/AxioxsSerivce';
import ApiRouter from '../utils/ApiRouter';

function DashBoard() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const res = await AxiosService.get(ApiRouter.AXIOS_APP.path);
      if (res.status === 200) {
        setData(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await AxiosService.delete(`${ApiRouter.AXIOS_APP.path}/${id}`);
      if (res.status === 200) {
        toast.success("Data Deleted Successfully");
        getData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return<>
    <div className="table-responsive">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.phone}</td>
              <td>{e.company}</td>
              <td>{e.address}</td>
              <td>
                <Button variant="info" onClick={() => navigate(`/feed/${e.id}`)}>Edit</Button>
                {' '}
                <Button variant="danger" onClick={() => handleDelete(e.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
 
  </>;
}

export default DashBoard;
