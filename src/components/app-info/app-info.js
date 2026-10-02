import './app-info.css';


const AppInfo = (props) => {
    const { employees } = props;
    
    const numberOfEmployees = employees.length
    const numberOfBonus = employees.filter((employee) => employee.increase).length;
    
    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании Чирик</h1>
            <h2>Общее число сотрудников: {numberOfEmployees} </h2>
            <h2>Премию получат: {numberOfBonus} </h2>
        </div>
    );
};


export default AppInfo;