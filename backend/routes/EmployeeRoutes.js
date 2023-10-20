import { addEmployee,getEmployee,getEmployeeWithID,updateEmployee,deleteEmployee } from "../controller/EmployeeController.js"
const routes = (app) => {
    app.route('/Employees')
    .get(getEmployee)
    .post(addEmployee);

    app.route('/Employees/:EmployeeId')
        .get(getEmployeeWithID)
        .put(updateEmployee)
        .delete(deleteEmployee)
}

export default routes;