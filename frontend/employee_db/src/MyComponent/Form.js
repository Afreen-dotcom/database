import React,{useState} from 'react'

const Form = () => {
    const [employee,setEmployee] = useState({firstName:'',lastName:'',email:'',phone:0});
    const handleInputs = (e)=>{ 
         console.log(e);
        const name = e.target.name;
        const value = e.target.value;
        console.log(e.target.value)
         setEmployee({...employee, [name]:value});
        
        
    }
    const postData=async(e)=>{
        e.preventDefault();
        const{firstName,lastName,email,phone}=employee;
        console.log(firstName,lastName,email,phone)
        const res=await fetch("http://localhost:4000/Employees",{
            method: "POST",
            headers: {"Content-Type": "application/json",},
      body: JSON.stringify({firstName,lastName,email,phone}),

    });
   
     const data =await res.json(); 
     
     if(!data ){
        window.alert("Invalid");

     }  
     else if(res.ok){
      window.alert("submitted!");
        window.location.reload(); 
     }
    }
  return (
    <div>
      <form method='POST'onSubmit={postData}>
                <h1 style={{ textAlign:'center'}}>Enter Employee Details </h1>
                <label>First Name </label>
                <input name='firstName' value={employee.firstName} onChange={handleInputs} />
                <label>Last Name</label>
                <input name='lastName' value={employee.lastName} onChange={handleInputs} />
                <label>Email</label>
                <input name='email' value={employee.email} onChange={handleInputs} />
                <label>Phone no.</label>
                <input name='phone' value={employee.phone} onChange={handleInputs} />
                <input type="submit" value="Submit" />
                
            </form>
    </div>
  )
}

export default Form
