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
                { name: 'Nickola J.', salary: 800, increase: false, id: nextId(), },
                { name: 'Lebron J.', salary: 1800, increase: false, id: nextId(), },
                { name: 'Curry S.', salary: 2800, increase: true, id: nextId(), },
                { name: 'Wade D.', salary: 3800, increase: false, id: nextId(), },
            ],
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
            id: nextId(),
        };
        
        this.setState((prevState) => {
            return {
                data: [...prevState.data, newItem],
            };
        });
    }
    
    render() {
        console.log(this.state);
        return (
            <div className="app">
                <AppInfo />
                
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                
                <EmployeesList data={this.state.data} onDelete={this.deleteItem} />
                <EmployeesAddForm addItem={this.addItem} />
            </div>
        );
    }
    
}


export default App;