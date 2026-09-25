import React from 'react';
import './employees-add-form.css';


class EmployeesAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        };
    }
    
    onValueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    
    onSubmit = (event) => {
        event.preventDefault();
        
        this.props.addItem(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: '',
        });
    };
    
    render() {
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex" onSubmit={this.onSubmit}>
                    <input type="text"
                           className="form-control new-post-label"
                           name="name"
                           placeholder="Как его зовут?"
                           onChange={this.onValueChange}
                           value={this.state.name}
                    />
                    <input type="number"
                           className="form-control new-post-label"
                           name="salary"
                           placeholder="З/П в $?"
                           onChange={this.onValueChange}
                           value={this.state.salary}
                    />
                    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить
                    </button>
                </form>
            </div>
        );
    }
}


export default EmployeesAddForm;