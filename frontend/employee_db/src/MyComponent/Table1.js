import React, {useEffect,useState} from 'react' 

export const TableBody =()=> {


const [data,setData] = useState('');
useEffect( ( )=>{
    fetch("http://localhost:4000/Employees")
.then(res=>res.json())
.then(json =>{ setData(json)
})
},[])


const rowDelete=(id)=>{
    fetch(`http://localhost:4000/Employees/${id}`,{
    method: "DELETE",

}).then(res=>res.json())
.then(res=>{console.warn(`${id} is deleted`); alert('deleted')})
}



const rowUpdate=(id)=>{
    console.log(id)
}


return (
    <div>
        <table border="1" cellPadding="5px" style={{ borderCollapse: 'collapse' }} >
        <thead> 
            <tr><th>First Name</th><th>Last Name</th><th>Email</th><th>Phoneno.</th></tr>
        </thead>
        <tbody>{data && data.map(item => (
                <tr key={item._id}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td><button  onClick={() => rowUpdate(item._id)}>Update</button></td>
                <td><button style={{ backgroundColor: 'red'}} onClick={() => rowDelete(item._id)}>Delete</button></td>
            </tr>
            ))}</tbody>
    </table>
</div>
   
     
);
}



        fetch(`http://localhost:4000/Employees/${id}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify({firstName,lastName,email,phone}),
        }).then(res=>res.json())
        .then(res=>{console.warn(`${id} is updated`)})