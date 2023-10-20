import React, { useState} from 'react'
//import axios from 'axios';
export default function Page() {
return (
  <div>
    <div className="my-class">
      <h1>Employee information <i style={{ fontSize: '13px', fontWeight: 'normal' }} >by Afreen Bano</i></h1>
      <hr /><br />
      <form>
        <table>
          <tbody>
            <tr>
              <td valign="top">
                <fieldset >
                  <table id="add_employee_table">
                    <tbody>
                      <tr>
                        <th colSpan="2">Add Employees</th>
                      </tr>
                      <tr>
                        <td>First name</td>
                        <td>
                          <input type="text" id="firstName"  name="firstName"/>
                        </td>
                      </tr>
                      <tr>
                        <td>Last name</td>
                        <td>
                          <input type="text" id="lastName" name="lastName" />
                        </td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>
                          <input type="text" id="email" name="email"/>
                        </td>
                      </tr>
                      <tr>
                        <td>Phone no.</td>
                        <td>
                          <input type="text" id="phone" name="phone" />
                        </td>
                      </tr>
                      <tr>
                
                        <td>
                          <input type="text" id="address" name="address"/>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input type="button" id="submit"  name="submit" value="Add employee"onSubmit={handleSubmit}/> </td>
                        <td id="error_msg"></td>
                      </tr>
                    </tbody>
                  </table>
                </fieldset>
              </td>
              <td valign="top" width="100%">
                <fieldset>
                  <table id="employee_table" border="1" cellPadding="5px" style={{ borderCollapse: 'collapse' }} width="100%">
                    <tbody>
                      <tr>
                        <th>
                          First Name
                        </th>
                        <th>
                          Last Name
                        </th>
                        <th>
                          Email
                        </th>
                        <th>
                          Phone no.
                        </th>
                        <th>
                          Address
                        </th>

                      </tr>
                      <tr >
                        <td >
                          Afreen
                        </td>
                        <td>
                          Bano
                        </td>
                        <td>
                          aaffy07@gmail.com
                        </td>
                        <td>
                          9893242162
                        </td>
                        <td>
                          Saket Nagar
                        </td>
                        <td>
                          <input type='button' value='Edit employee'/>
                        </td>
                        <td> 
                        <input type='button' value='Delete user' style={{ backgroundColor: 'red' }} />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </fieldset>
              </td>
            </tr>
          </tbody>
        </table> 
      </form> 
    </div> 
  </div>
)
}
