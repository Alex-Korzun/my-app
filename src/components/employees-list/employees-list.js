import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp, onSalaryChange}) => {

    const elements = data.map(item => {
        const {id, ...otherProps} = item;
        return (
            <EmployeesListItem 
                key={id} 
                {...otherProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                onSalaryChange={(e) => onSalaryChange(id, e.target.value)} />
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;
