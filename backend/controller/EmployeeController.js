import mongoose from 'mongoose';
import {EmployeeSchema} from '../models/EmployeeModel.js'

const employee = mongoose.model('employee', EmployeeSchema);
export const addEmployee = (req, res) => {
    const newEmployee = new employee( req.body );
    newEmployee.save()
      .then(employee => {
        res.json(employee);
      })
      .catch(err => {
        res.send(err);
      });
};
export const getEmployee = (req, res) => {
    employee.find({})
      .then(employees => {
        res.json(employees);
      })
      .catch(err => {
        res.send(err);
      })
  };
  
export const updateEmployee= (req, res) => {
    console.log(req.params.EmployeeId,req.body)
    employee.findOneAndUpdate({ _id: req.params.EmployeeId}, req.body, {new: true})
    
        .then(employee =>{
            res.status(200).json(employee);
        })
        .catch(err =>{
            res.status(500).send(err)
        })
}

export const deleteEmployee = (req, res) => {
    employee.deleteOne({ _id: req.params.EmployeeId})
        .then(employee =>{
            res.json({ message: 'Successfully deleted employee'});
        })
           
        .catch(err=>{
            res.send(err)
        })
};
export const getEmployeeWithID = (req, res) => {
    employee.findById(req.params.EmployeeId)
        .then(employee =>{
            res.json(employee)
        })
        .catch(err =>{
            res.send(err)
        })
};
