import React from 'react';
import axios from "axios";
function Details(props)
{

return <div className="container">
<table class="table">
  <thead>
    <tr>
   
      <th scope="col">Name</th>
      <th scope="col">Country</th>
      <th scope="col">Age</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
{

   props.fetchdata.map(data=>(
  <tr>
    <td>{data.name}</td>
    <td>{data.country}</td>
    <td>{data.age}</td>
    <td>
      <button className="btn btn-lg btn-dark" onClick={e=>{props.update(data)}}>Edit</button>
    </td>
    <td>
      <button className="btn btn-lg btn-dark" onClick={e=>{props.delete(data)}}>Delete</button>
    </td>
  </tr>
))
}
  </tbody>
</table>
</div>

}
export default Details;