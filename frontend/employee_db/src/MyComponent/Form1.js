import React, {Component} from 'react'

class Form extends Component {

    
    constructor(props) {
        super(props);

        this.initialState = {
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        };

        this.state = this.initialState;
    }

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState(
            {
                [name]: value
            }
        );
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const {firstName,lastName,email,phone} = this.state;

        return (
            <form>
                <h1 style={{ textAlign:'center'}}>Enter Employee Details </h1>
                <label>First Name </label>
                <input name='firstName' value={firstName} onChange={this.handleChange} />
                <label>Last Name</label>
                <input name='lastName' value={lastName} onChange={this.handleChange} />
                <label>Email</label>
                <input name='email' value={email} onChange={this.handleChange} />
                <label>Phone no.</label>
                <input name='phone' value={phone} onChange={this.handleChange} />
                <input type='button' onClick={this.submitForm} value="Submit" />
                
            </form>
        );
    }
}

export default Form