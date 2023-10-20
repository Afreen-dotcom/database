import React, {Component} from 'react'
//import {TableBody} from './MyComponent/Table2'
import Form from './MyComponent/Form'
//import MyTable from './MyComponent/MyTable';
import {TableBody} from './MyComponent/Tablefinal'

class App extends Component {
    
    render() {

       

        return (
            <div className="container">
               
               
           <TableBody/>
           <Form/>
              
            </div>
        );
    }
}

export default App
