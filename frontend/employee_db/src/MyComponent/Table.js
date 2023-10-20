import React, {useEffect} from 'react' 
const TableHeader = () => {
    return (
        <div>
        <h1 style={{ textAlign:'center'}}> Employee List </h1>
        <table id="employee_table" border="1" cellPadding="5px" style={{ borderCollapse: 'collapse' }} width="100%">
            
            <thead>
        
            <tr>
                <th>First Name  </th>
                <th> Last Name</th>
                <th>Email</th>
                <th>Phoneno.</th>
            </tr>
        </thead>
      </table>
      </div>
    ); 
}

const TableBody = props => {
const [row,setRow] = useState('');
useEffect( ( )=>{
    fetch( "http://localhost:4000/Employees")
.then(res=>res. json())
then(res=>{setCuteDogImage(res.message);
})
},[])

    
    const rows = props.characterData.map((index,row) => {
        return (
            
            
            <tr key={index}>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.email}</td>
                <td>{row.phone}</td>
                <td>
                    <button style={{ backgroundColor: 'red' }} onClick={() => props.removeCharacter(row)} >Delete</button>
                   
                </td>
                <td>
                <button style={{ backgroundColor: 'green' }} onClick={() => props.removeCharacter(row)} >Update</button>
                </td>
            </tr>
            
            
        );
    });

    return (
       
        <table  border="1" cellPadding="5px" style={{ borderCollapse: 'collapse' }} width="100%">
            <tbody>
                {rows}
                <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>
                    <button style={{ backgroundColor: 'red' }}>Delete</button>
                   
                </td>
                <td>
                <button style={{ backgroundColor: 'green' }} >Update</button>
                </td>
          </tr>
        ))}
      </tbody>
            </tbody>
        </table>
        
    );
}

class Table extends Component {
    render() {
        //const characterData = this.props.characterData;
        const {characterData, removeCharacter} = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
            </table>
        );
    }
}
const rowDelete=(id)=>{
    fetch(`http://localhost:4000/Employees/${id}`,{
    method: "DELETE",

}).then(res=>res.json())
.then(res=>{alert("deleted"); console.warn(res)})
}
const rowUpdate=(id)=>{
    fetch(`http://localhost:4000/Employees/${id}`,{
    method: "PUT",
    headers: {"Content-Type": "application/json",},
      body: JSON.stringify(data),
    }).then(res=>res.json())
    .then(res=>{if(res==200){alert("success")}})
}

export default Table