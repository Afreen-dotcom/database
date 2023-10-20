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
    .then(res=>{alert(`${id} is deleted`)})
    window.location.reload();
    }

    const [isEditing,setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [employee,setEmployee] = useState({firstName:'',lastName:'',email:'',phone:0});
    const handleInputs = (e)=>{ 
            console.log('hiii');
            const name = e.target.name;
            const value = e.target.value;
            console.log(e.target.value)
        setEmployee({...employee, [name]:value});
        
        
    }

    const rowUpdate=(id)=>{
        if(!isEditing)
        {
            setIsEditing(true)
            setEditingId(id)

        }
        else{
            setIsEditing(false)
            setEditingId(null)
                //e.preventDefault();
                const { firstName, lastName, email, phone } = employee;
                console.log(id)
                console.log(employee)
                console.log(`http://localhost:4000/Employees/${id}`)
                const res = fetch(`http://localhost:4000/Employees/${id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json", },
                    body: JSON.stringify({ firstName, lastName, email, phone }),
        
                });
        
                const data = res.message;
                console.log(data, 'data')
                if (res.status === '500') {
                    window.alert("Invalid");
        
                }
                else {
                    window.alert("Updated!");
                    window.location.reload();
                }
        
            }
    }

    return (
        <div>
            <table border="1" cellPadding="5px" style={{ borderCollapse: 'collapse' }} >
            <thead> 
                <tr><th>First Name</th><th>Last Name</th><th>Email</th><th>Phoneno.</th></tr>
            </thead>
            <tbody>{data && data.map(item => (
                    <tr key={item._id}>
                    <td contentEditable={isEditing && item._id===editingId}name='firstName'value={isEditing && item._id===editingId ? employee.firstName : item.firstName}onChange={handleInputs}style={{backgroundColor: isEditing && item._id === editingId ? 'lightblue' : 'white'}} >
        {isEditing && item._id === editingId ? 
        <input 
            type="text" 
            name="firstName" 
            value={employee.firstName} 
            onChange={handleInputs} 
        /> 
        : item.firstName }</td>
                    <td contentEditable={isEditing && item._id===editingId}name='lastName'value={isEditing && item._id===editingId ?employee.lastName:item.lastName}onInput={handleInputs}style={{backgroundColor: isEditing && item._id === editingId ? 'lightblue' : 'white'}}>{item.lastName}</td>
                    <td contentEditable={isEditing && item._id===editingId}name='email'value={isEditing && item._id===editingId ?employee.email:item.email} onInput={handleInputs} style={{backgroundColor: isEditing && item._id === editingId ? 'lightblue' : 'white'}}dangerouslySetInnerHTML={{ __html: item.email }}></td>
                    <td contentEditable={isEditing && item._id===editingId}name='phone'value={isEditing && item._id===editingId ?employee.phone:item.phone} onChange={handleInputs} style={{backgroundColor: isEditing && item._id === editingId ? 'lightblue' : 'white'}}dangerouslySetInnerHTML={{ __html: item.phone }}></td>
                    <td><button  onClick={() => rowUpdate(item._id)}> {editingId === item._id ? "Save" : "Update"}</button></td>
                    <td><button style={{ backgroundColor: 'red'}} onClick={() => rowDelete(item._id)}>Delete</button></td>
                </tr>
                ))}</tbody>
        </table>
        
    </div>
    
        
    );
}

