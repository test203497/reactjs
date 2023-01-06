import React from "react";
import { useEffect, useState } from 'react';
const Users = () =>{
     const [UsersData, setUsers] = useState([]);
     const fetchData = async () => {
      const response = await fetch('http://localhost/techmama/rest/V1/custom/getlist', {mode:'cors'})
      const data = await response.json()
      const res = JSON.parse(data);
      //setUsers(data)
      setUsers(res)
    }
  
    useEffect(() => {
      fetchData()
    }, [])
     //{UsersData.map(home => <div>{home.title}</div>)}
     return (
      <div className="container-fluid">
        <div className="row">
        <table className="table">
       <thead>
        <tr>
        <th>ID#</th>
        <th>Title</th>
       </tr>
    </thead>
     <tbody>
        <tr>
         {UsersData.map((user)=><div>
            <td key={user.id}>{user.id}</td>
            <td key={user.id}>{user.title}</td>
          </div>
            )}
         
        </tr>
    </tbody>
   </table>
        </div>
      </div>
    );
}

export default Users;