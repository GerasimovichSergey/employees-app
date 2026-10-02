import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = (props) => {
    const { data, onDelete, onToggleProp } = props;
    
    const employees = data.map((employee) => {
        const { id, ...itemProps } = employee;
        
        return <EmployeesListItem
            key={id}
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleProp={(event) => onToggleProp(id, event.currentTarget.getAttribute('data-toggle'))}
        />
    });
    
    return (
        <ul className="app-list list-group">
            {employees}
        </ul>
    );
};


export default EmployeesList;