import React from 'react';
import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import nextId from 'react-id-generator';


class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: [
                { name: 'Nickola J.', salary: 800, increase: false, like: false, id: nextId() },
                { name: 'Lebron J.', salary: 1800, increase: false, like: false, id: nextId() },
                { name: 'Curry S.', salary: 2800, increase: false, like: false, id: nextId() },
                { name: 'Wade D.', salary: 3800, increase: false, like: false, id: nextId() },
            ],
            term: '',
            filterCriteria: 'all',
        };
    }
    
    deleteItem = (id) => {
        this.setState((prevSate) => {
            const newArr = prevSate.data.filter((elem) => elem.id !== id);
            
            return {
                data: newArr,
            };
        });
    }
    
    addItem = (name, salary) => {
        const newItem = {
            name: name,
            salary: +salary,
            increase: false,
            like: false,
            id: nextId(),
        };
        
        this.setState((prevState) => {
            const newArr = [...prevState.data, newItem];
            
            return {
                data: newArr,
            };
        });
    }
    
    onToggleProp = (id, prop) => {
        this.setState((prevState) => {
            const newArr = prevState.data.map((employee) => {
                if (employee.id === id) {
                    return {
                        ...employee,
                        [prop]: !employee[prop]
                    }
                }
                
                return employee;
            });
            
            return {
                data: newArr
            };
        })
    }
    
    searchEmployee = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        
        return items.filter((item) => item.name.indexOf(term) > -1);
    }
    
    onUpdateSearch = (term) => {
        this.setState({ term: term });
    }
    
    filterEmployees = (employees, filterCriteria) => {
        switch (filterCriteria) {
            case 'rise':
                return employees.filter((employee) => employee.like);
            case 'salaryMore1000':
                return employees.filter((employee) => employee.salary > 1000);
            default:
                return employees;
        }
    }
    
    onUpdateFilter = (filterCriteria) => {
        this.setState({ filterCriteria: filterCriteria });
    }
    
    render() {
        const filteredData = this.filterEmployees(this.state.data, this.state.filterCriteria);
        const visibleData = this.searchEmployee(filteredData, this.state.term);
        
        return (
            <div className="app">
                <AppInfo employees={this.state.data} />
                
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter onUpdateFilter={this.onUpdateFilter} />
                </div>
                
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm addItem={this.addItem} />
            </div>
        );
    }
}


export default App;