import React, { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../api/api";
import { Table } from "react-bootstrap";

const Home = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = () => {
    axios
      .get(`${api}/users`)
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>ID</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map(item => {
            return (
              <tr key={item.id}>
                <td style={{ textAlign: "center" }}>{item.id}</td>
                <td style={{ textAlign: "center" }}>{item.name}</td>
                <td style={{ textAlign: "center" }}>{item.email}</td>
                <td style={{ textAlign: "center" }}>{item.password}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Home;
