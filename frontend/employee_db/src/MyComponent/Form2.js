import React,{useState} from 'react'

const Form2 = () => {

const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
 const [email, setEmail] = useState('')
 const [phone,setPhone] = useState(0)

const handleFormSubmit = (event)=>{
    event.preventDefault();
    const dataToSubmit = {firstName,lastName,email,phone}
     //https://jsonplaceholder.typicode.com/posts
     //http://localhost:4000/Employees
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: 'POST',
      headers: {
         'Content-type' : 'application/json; charset=UTF-8'},
      body: JSON. stringify (dataToSubmit)
    }). then(res =>res. json())
       .then(res=> {console.log(res)})
              
    }
    
  return (
      <div>
      <form method='POST' action='=#' onSubmit={handleFormSubmit}>
                <h1 style={{ textAlign:'center'}}>Enter Employee Details </h1>
                <label>First Name </label>
                <input name='firstName' value={firstName} onChange={(event) =>setFirstName(event.target.value)} />
                <label>Last Name</label>
                <input name='lastName' value={lastName} onChange={(event) =>setLastName(event.target.value)} />
                <label>Email</label>
                <input name='email' value={email} onChange={(event) =>setEmail(event.target.value)} />
                <label>Phone no.</label>
                <input name='phone' value={phone} onChange={(event) =>setPhone(event.target.value)} />
                <input type='submit'  value="Submit" />
                
            </form>
    </div>
  )
}

export default Form2
