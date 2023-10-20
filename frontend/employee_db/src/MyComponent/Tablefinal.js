import React, { useEffect, useState } from 'react'

export const TableBody = () => {


    const [data, setData] = useState('');
    useEffect(() => {
        fetch("http://localhost:4000/Employees")
            .then(res => res.json())
            .then(json => {
                setData(json)
            })
    }, [])


    const rowDelete = (id) => {
        fetch(`http://localhost:4000/Employees/${id}`, {
            method: "DELETE",

        }).then(res => res.json())
            .then(res => { console.warn(`${id} is deleted`); alert('deleted') })
        window.location.reload();
    }


    const [employee, setEmployee] = useState({ id: '', firstName: '', lastName: '', email: '', phone: 0 });
    const handleInputs = (e) => {
        console.log(e);
        const name = e.target.name;
        const value = e.target.value;

        setEmployee({ ...employee, [name]: value });


    }
    const putData = async (e) => {
        //e.preventDefault();
        const { id, firstName, lastName, email, phone } = employee;
        console.log(employee)
        console.log(`http://localhost:4000/Employees/${id}`)
        const res = await fetch(`http://localhost:4000/Employees/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({ firstName, lastName, email, phone }),

        });

        const data = await res.message;
        console.log(data, 'data')
        if (res.status == '500') {
            window.alert("Invalid");

        }
        else {
            window.alert("Updated!");
        }

    }


    return (
        <div className="my-class">
            <h1>Employee information <i style={{ fontSize: '13px', fontWeight: 'normal' }} >by Afreen Bano</i></h1>
            <hr /><br />
            <form method='PUT' onSubmit={putData}>
                <fieldset >
                    <table >
                        <tbody><tr>
                            <th colSpan="2">Update</th>
                            </tr>
                            <tr>
                                <td>ID</td>
                                <td>
                                    <input value={employee.id} onChange={handleInputs} name="id" />
                                </td>
                            </tr>
                            <tr>
                                <td>First name</td>
                                <td>
                                    <input value={employee.firstName} onChange={handleInputs} id="firstName" name="firstName" />
                                </td>
                            </tr>
                            <tr>
                                <td>Last name</td>
                                <td>
                                    <input value={employee.lastName} onChange={handleInputs} id="lastName" name="lastName" />
                                </td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>
                                    <input value={employee.email} onChange={handleInputs} id="email" name="email" />
                                </td>
                            </tr>
                            <tr>
                                <td>Phone no.</td>
                                <td>
                                    <input value={employee.phone} onChange={handleInputs} id="phone" name="phone" />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="submit" value="Update" /> </td>
                            </tr></tbody>
                    </table>
                </fieldset>
            </form>
            <fieldset>
                <table border="1" cellPadding="5px" style={{ borderCollapse: 'collapse' }} >

                    <thead>
                        <tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Email</th><th>Phoneno.</th></tr>
                    </thead>

                    <tbody>{data && data.map(item => (
                        <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>

                            <td><button style={{ backgroundColor: 'red' }} onClick={() => rowDelete(item._id)}>Delete</button></td>
                        </tr>
                    ))}</tbody>

                </table>
            </fieldset></div>
    );
}
