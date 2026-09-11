import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


function App() {
    const data = [
        { name: 'Nickola J.', salary: 800, increase: true, id: 1, },
        { name: 'Lebron J.', salary: 1800, increase: true, id: 2, },
        { name: 'Curry S.', salary: 2800, increase: false, id: 3, },
        { name: 'Wade D.', salary: 3800, increase: true, id: 4, },
    ];
    
    return (
        <div className="app">
            <AppInfo />
            
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            
            <EmployeesList data={data} />
            <EmployeesAddForm />
        </div>
    );
}


export default App;