import React,{useEffect,useState} from 'react';
import './App.css';
import Form from "./components/Form";
import Details from "./components/Details";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from "axios"
function App()
{

const[fetchdata,setfetchdata]=useState([])
const[editeddata,setediteddata]=useState([])
  useEffect(()=>
  {
    const fetchItems= ()=>
    {
      
      const getAll=axios.get("http://localhost:5000").then(res=>{      
        setfetchdata(res.data)
      })     
       }
    fetchItems();
  },[create])
function create(data)
{
if(!data.isEdit)
{
  axios.post("http://localhost:5000/add",data).then(response => console.log(response))
  console.log(data)
}
else
{
  
  axios.put("http://localhost:5000/update",data).then(response=>{console.log(response)})
  console.log(data)
}
}
function update(data)
{
  setediteddata(data)
console.log(data)
}
function deletedata(data)
{
  var option=window.confirm(`Are you sure you want to delete ${data.name}`)
  if(option)
  {
    axios.delete(`http://localhost:5000/del/${data._id}`,data).then(response=>{console.log(response)})
  }
  
console.log(data)
}

  return <div>
  <Header />
  <div className="container">
  <div className="row appsection">
      <div className="col-lg-6">
<Form myData={create} editeddata={editeddata}/>
      </div>
      <div className="col-lg-6">
    <Details fetchdata={fetchdata} update={update} delete={deletedata}/>
      </div>
  </div>
  </div>
  <Footer />
  </div>
}
export default App;
