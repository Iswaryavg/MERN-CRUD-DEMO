import React,{useState, useEffect} from 'react';
import axios from "axios";

function Form(props)
{

  const[formdata,setformdata]=useState({id:"",name:"",country:"",age:"",isEdit:false});
  const[edit,setedit]=useState([]);



  // useEffect(()=>
  // {
  //   const edit= ()=>
  //   {
      
  //     const result=({
  //       name:props.editeddata.name,
        
  //       country:props.editeddata.country,
        
  //       age:props.editeddata.age,
  //     })
  //     setformdata(result)
        
  //      }
  //   edit();
  // },[])


  function handlesubmit(e)
  {
    if(!formdata.isEdit)
    {
      let data={
        _id:formdata._id,
    isEdit:formdata.isEdit,  
        name:formdata.name,
        age:formdata.age,
        country:formdata.country
      }
    //   e.preventDefault();
    //   let data=formdata;    
     props.myData(data)
    }
  else
  {  
    e.preventDefault();
    let data={
    isEdit:formdata.isEdit,
      _id:formdata._id,
      name:formdata.name,
      age:formdata.age,
      country:formdata.country
    }
    props.myData(data)

  }

    //  axios.post("http://localhost:5000/add",formdata).then(response => console.log(response))

  }
  function handlechange(event)
  {


    const { name, value } = event.target;
    setformdata(prevData => {
      return {
        ...prevData,
        [name]: value
      };
  
    });

  }
  useEffect(()=>
  {
    const edit= ()=>
    {
    
      if(props.editeddata._id!=null)
      {
       
        setformdata({ isEdit:true,_id:props.editeddata._id,name:props.editeddata.name,age:props.editeddata.age,country:props.editeddata.country})
      }
      
        
       }
    edit();
  },[props.editeddata._id])

return   <form>
<div className="form-group">
      <strong><label for="Name">Name</label></strong>
      <input type="text" className="form-control" id="name" placeholder="Enter Your Name" name="name" value={formdata.name} onChange={handlechange} />
    </div>
    <div className="form-group">
    <strong><label for="country">Country</label></strong>
      <input type="text" className="form-control" id="country" placeholder="Enter Your Country Name" name="country" value={formdata.country} onChange={handlechange}  />
    </div>
 <div class="form-group">
 <strong><label for="age">Age</label></strong>
      <input type="number" className="form-control" id="age" placeholder="Enter Your Age" name="age" value={formdata.age} onChange={handlechange} />
    </div>
    <button type="submit" class="btn btn-lg btn-dark" onClick={handlesubmit} formdata={formdata}>{formdata.isEdit?"update":"create"}</button>
</form>

}
export default Form;